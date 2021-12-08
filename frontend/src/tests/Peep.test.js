import { render, screen } from '@testing-library/react';
import Peep from '../Components/Peep';
import samplePeeps from '../samplePeeps.json';

describe(`Tests for individual Peeps`, () => {

    const testPeep = samplePeeps[0];

    beforeEach(() => {
        render(<Peep peep={testPeep} />);
    });

    test(`Test that the correct name is rendered within the Peep`, () => {
        expect(screen.getByText(testPeep.name)).toBeInTheDocument();
    });

    test(`Test that the correct username rendered within the Peep`, () => {
        expect(screen.getByText(`@${testPeep.username}`)).toBeInTheDocument();
    });

    test(`Test that the correct time is rendered within the Peep`, () => {
        expect(screen.getByText(testPeep.date)).toBeInTheDocument();
    });
});