import React from 'react'
import '@testing-library/jest-dom'
import { render, wait, cleanup } from '@testing-library/react'
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'

import * as postingServices from '../../../services/postingServices';
import rootReducer from "../../../store/reducers";
import PostingsList from './PostingsList';

const store = createStore(rootReducer, applyMiddleware(thunk));

afterEach(() => cleanup())

test('show postings list', async () => {

    const history = createMemoryHistory();

    jest.spyOn(postingServices, 'getPostingsService')
        .mockImplementation(() => Promise.resolve(postings));

    const postings = {
        content: [
            {
                id: 123,
                name: 'software engineer',
                location: {
                    city: 'Krakow',
                    address: 'Old city'
                }
            },
            {
                id: 1234,
                name: 'software engineer 2',
                location: {
                    city: 'Berlin',
                    address: 'East side'
                }
            }
        ],
    }

    let wrapper = render(
        <Provider store={store}>
            <Router history={history}>
                <PostingsList />
            </Router>
        </Provider>
    )

    const { getByTestId, getByText } = wrapper;

    await wait(() => {
        expect(getByText('Old city')).toBeInTheDocument();
    });

    expect(getByText('software engineer')).toBeInTheDocument();

    expect(getByTestId('postings').children.length).toEqual(2);
})