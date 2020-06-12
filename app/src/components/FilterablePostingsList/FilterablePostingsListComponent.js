import React from 'react';
import { makeStyles } from '@material-ui/core';
import FilterBar from './FilterBar/FilterBar';
import PostingsList from './PostingList/PostingsList';

const useStyles = makeStyles(theme => ({

    postingsList: {
        marginTop: theme.spacing(4)
    }
}));

function PostingsListComponent() {

    const cls = useStyles();

    return (
        <div>
            <FilterBar />

            <div className={cls.postingsList}>
                <PostingsList />
            </div>

        </div>
    );
}

export default PostingsListComponent;