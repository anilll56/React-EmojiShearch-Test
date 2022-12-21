import {render , screen} from '@testing-library/react';
import Header from '../Header';

describe('Header' , () => {
    it('should render Header' , () => {
        render(<Header/>);
        const headdingElement = screen.getByText(/😀 Emoji Shearch 😅/i);
        expect(headdingElement).toBeInTheDocument();
    }
    )
})
