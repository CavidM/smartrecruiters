import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(Theme => ({
    root: {
        '& .postingItemTitle': {
            marginBottom: 2
        },
        '& .postingItem:not(:last-child)': {
            marginBottom: Theme.spacing(3)
        },
        '& .section': {
            fontWeight: '300'
        }
    }
}));

const mark = (el) => {
    return {
        __html: el
    }
}

function PostingDetailsComponent(props) {

    const cls = useStyles();
    
    const { posting } = props;
    const { sections } = posting?.jobAd;

    return (
        <div className={cls.root}>

            <div className={'postingItem'}>
                <h2 className={'postingItemTitle'} data-test="posting-name">
                    {posting?.name}
                </h2>
                <div data-test="posting-location">
                    {posting?.location?.city}
                </div>
            </div>

            <div className={'postingItem'} data-test="job-description">
                <h3 className={'postingItemTitle'}>
                    {sections?.jobDescription?.title}
                </h3>
                <div className="section" dangerouslySetInnerHTML={mark(sections?.jobDescription.text)} />
            </div>

            <div className={'postingItem'} data-test="job-qualifications">
                <h3 className={'postingItemTitle'}>
                    {sections?.qualifications?.title}
                </h3>
                <div className="section" dangerouslySetInnerHTML={mark(sections?.qualifications.text)} />
            </div>

        </div>
    );
}

export default PostingDetailsComponent;