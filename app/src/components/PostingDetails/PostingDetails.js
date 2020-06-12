import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPosting } from '../../store/actions/postingActions';
import PostingDetailsComponent from './PostingDetailsComponent';

function PostingDetails() {

    const dispatch = useDispatch();
    const posting = useSelector(state => state.postings.posting);

    let { id } = useParams();

    useEffect(() => {

        dispatch(getPosting(id));

    }, []);

    if (Object.keys(posting).length) {
        return (
            <PostingDetailsComponent posting={posting} />
        );
    }

    return null;
}

export default PostingDetails;