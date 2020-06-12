import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPostings } from '../../../store/actions/postingActions';
import PostingsListComponent from './PostingsListComponent';

function PostingsList() {

    const dispatch = useDispatch();
    const postings = useSelector(state => state.postings);
    const filter = postings.filter;

    useEffect(() => {

        dispatch(getPostings());

    }, []);

    useEffect(() => {
        dispatch(getPostings());
    }, [filter.country, filter.department]);

    if (postings?.list?.content?.length) {

        return (
            <PostingsListComponent postings={postings.list.content}></PostingsListComponent>
        )
    }

    return null;
}

export default PostingsList;