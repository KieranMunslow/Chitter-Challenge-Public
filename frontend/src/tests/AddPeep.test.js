import { render, screen } from '@testing-library/react';

describe(`Tests for the add peep page`, () => {

    beforeEach(() => {
        render(<AddPeep />);
    });

    test(`it should render a message input and label`, () => {
        expect(screen.getByPlaceholderText(`Enter message...`)).toBeInTheDocument();
    });

    test(`it should render a post button`, () => {
        expect(screen.getByText(`Post`)).toBeInTheDocument();
    });
});