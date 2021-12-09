import React from 'react';
import { render, screen } from '@testing-library/react';
import samplePeeps from '../samplePeeps.json';

describe(`Tests for the Peep List`, () => {

    test(`Test that the correct number of Peeps are displayed`, () => {
        const expectedLength = samplePeeps.length;

        render(
            <PeepList peeps={samplePeeps} />
        );

        const table = screen.getByTestId("list");

        expect(table.children.length).toEqual(expectedLength);

    });
});