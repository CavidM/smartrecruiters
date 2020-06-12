import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(Theme => ({
    root: {
      height: 80,
      backgroundColor: '#444545',
      color: 'white',
      padding: `${Theme.spacing(0)}px`
    },
    wrapper: {
      display: 'flex',
      height: 'inherit'
    },
    title: {
      margin: `auto 0`
    },
    backButton: {
      margin: 'auto 0 auto auto'
    }
  }));

  export default useStyles;