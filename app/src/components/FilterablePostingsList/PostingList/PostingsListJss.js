import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    postingsList: {
        listStyle: 'none',
        margin: theme.spacing(0),
        padding: theme.spacing(0),
    },
    posting: {
        margin: `${theme.spacing(2)}px 0`,
        transition: '.1s',
        '&:hover': {
            backgroundColor: 'aliceblue'
        },
        '& a': {
            textDecoration: 'none'
        }
    },
    postingName: {
        fontSize: 18
    },
    postingLocation: {
        fontWeight: 300,
        fontSize: 15
    }
}))

export default useStyles;