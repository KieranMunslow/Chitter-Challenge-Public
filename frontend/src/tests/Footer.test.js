import { render } from '@testing-library/react';
import Footer from '../Components/Footer';


describe(`Test for the footer of the app`, () => {
    test(`Footers matches snapshot`, () => {
        expect(render(<Footer />)).toMatchSnapshot();
    });
});