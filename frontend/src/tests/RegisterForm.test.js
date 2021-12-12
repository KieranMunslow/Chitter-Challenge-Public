import { render, screen } from '@testing-library/react';
import RegisterForm from '../Components/RegisterForm';

describe(`Tests for the registration form`, () => {

    beforeEach(() => {
        render(<RegisterForm />);
    });

    test(`it should render a first name input and label`, () => {
        expect(screen.getByPlaceholderText(`First name...`)).toBeInTheDocument();
    });

    test(`it should render a surname input and label`, () => {
        expect(screen.getByPlaceholderText(`Surname...`)).toBeInTheDocument();
    });

    test(`it should render an email input and label`, () => {
        expect(screen.getByPlaceholderText(`Email...`)).toBeInTheDocument();
    });

    test(`it should render an username input and label`, () => {
        expect(screen.getByPlaceholderText(`Username...`)).toBeInTheDocument();
    });

    test(`it should render an password input and label`, () => {
        expect(screen.getByPlaceholderText(`Password...`)).toBeInTheDocument();
    });

    test(`it should render a confirm password input and label`, () => {
        expect(screen.getByPlaceholderText(`Confirm Password...`)).toBeInTheDocument();
    });

    test(`it should render a register button`, () => {
        expect(screen.getByText(`Register`)).toBeInTheDocument();
    });
});