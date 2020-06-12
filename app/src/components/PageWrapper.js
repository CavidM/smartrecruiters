import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(4)
    }
}));

function PageWrapper(props) {

    const cls = useStyles();

    return (
        <Container className={cls.root}>
            {props.children}
        </Container>
    );
}

export default PageWrapper;