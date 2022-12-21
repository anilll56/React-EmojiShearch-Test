import { screen , render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmojiResult from "../EmojiResult";

const mockSetShearch = jest.fn();

describe("EmojiResult Test", () => {

    it("should  render items", () => {
        render(<EmojiResult shearch={""} setShearch={mockSetShearch}/>);
        const tryEmoji = screen.getByText("Smile");
        expect(tryEmoji).toBeInTheDocument();
    });


    it("copies item when clicked", () => {
        const { getByText } = render(<EmojiResult  shearch={""} setShearch={mockSetShearch}/>);
        const item = getByText('100');
        fireEvent.click(item);
        expect(navigator.clipboard.readText()).resolves.toBe("100");

    });

    


});