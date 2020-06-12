import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
    }
});

function ProgressBarComponent() {

    const cls = useStyles();
    const showProgressBar = useSelector(state => state.common.showProgressBar)

    if (showProgressBar) {
        return (
            <LinearProgress className={cls.root} color="primary" />
        );
    }

    return (null);
}

export default ProgressBarComponent;