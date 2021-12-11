import { render } from '@testing-library/react';
import Header from '../Components/Header';


describe(`Tests for the header of the app`, () => {
    test(`Header matches snapshot when not logged in`, () => {
        expect(render(<Header loggedIn={false} username={``} />)).toMatchSnapshot();
    });

    test(`Header matches snapshot when logged in`, () => {
        expect(render(<Header loggedIn={true} username={`Name`} />)).toMatchSnapshot();
    });
});