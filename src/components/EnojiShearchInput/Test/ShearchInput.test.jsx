import {render , screen , fireEvent} from '@testing-library/react';
import EmojiShearchIntput from '../EmojiShearchIntput';


const mockSetShearch = jest.fn();

describe('ShearchInput', () => {
    it(' should render Input Element ', () => {
        render(<EmojiShearchIntput  shearch={""}  setShearch={mockSetShearch}/>);
        const inputElement = screen.getByPlaceholderText(/Search.../i);
        expect(inputElement).toBeInTheDocument();
        
    });

    it(' should be able to type input ', () => {
        render(<EmojiShearchIntput  shearch={""}  setShearch={mockSetShearch}/>);
        const inputElement = screen.getByPlaceholderText(/Search.../i);
        fireEvent.change(inputElement, {target: {value:'smile'}});
        expect(inputElement.value).toBe('smile');
        
    });
});