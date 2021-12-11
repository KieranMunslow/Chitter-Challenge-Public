import { render } from '@testing-library/react';
import Header from '../Components/Header';

test(`Header matches snapshot`, () => {
    expect(render(<Header />)).toMatchSnapshot();
});