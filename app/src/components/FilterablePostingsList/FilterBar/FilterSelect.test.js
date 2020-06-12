import React from 'react'
import '@testing-library/jest-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import FilterSelectComponent from './FilterSelectComponent';


afterEach(() => cleanup())

test('render FilterSelect component', async () => {

    const items = [
        { value: 'pl', key: 'pl', label: 'Poland' },
        { value: 'de', key: 'de', label: 'Berlin' }
    ]

    const change = jest.fn();

    let wrapper = render(
        <FilterSelectComponent
            items={items}
            change={change}
            name='country'
            label='Country'
            value=''
        />
    )

    const { getByText, getByRole, getAllByRole } = wrapper;

    fireEvent.mouseDown(getByRole('button'));

    expect(getByText('Poland')).toBeInTheDocument();

    expect(getAllByRole('option').length).toBe(3);

})