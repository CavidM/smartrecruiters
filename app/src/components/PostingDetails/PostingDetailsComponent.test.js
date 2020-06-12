import React from 'react'
import '@testing-library/jest-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import PostingDetailsComponent from './PostingDetailsComponent';

afterEach(() => cleanup())

test('render PostingDetailsComponent', () => {

    const posting = {
        name: 'Software engineer',
        location: {
            city: 'Krakow',
        },
        jobAd: {
            sections: {
                jobDescription: {
                    title: 'Job description',
                    text: 'Job description text'
                },
                qualifications: {
                    title: 'Qualifications',
                    text: 'Qualifications text',
                }
            }
        }
    }

    let wrapper = render(
        <PostingDetailsComponent posting={posting} />
    )

    const { getByText } = wrapper;

    expect(getByText('Software engineer')).toBeInTheDocument();
    expect(getByText('Krakow')).toBeInTheDocument();
    expect(getByText('Job description')).toBeInTheDocument();
    expect(getByText('Qualifications text')).toBeInTheDocument();
})