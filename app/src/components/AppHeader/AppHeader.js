import React from 'react';
import { Container } from '@material-ui/core';
import ProgressBarComponent from '../Common/ProgressBar/ProgressBarComponent';
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";
import {Button} from '@material-ui/core';
import useStyles from './AppHeaderJss';

function AppHeader() {

  const cls = useStyles();
  let history = useHistory();

  return (
    <Container className={cls.root} maxWidth="xl">

      <ProgressBarComponent />

      <Container className={cls.wrapper}>
        <div className={cls.title}>
          <div>SmartRecruiters Postings app</div>
        </div>

        <Route path={['/posting/:id']}>
          <Button
            className={cls.backButton}
            variant="contained"
            onClick={() => { history.goBack() }}
            data-test="back"
          >
            {'<-- Back'}
          </Button>
        </Route>

      </Container>
    </Container>
  );
}

export default AppHeader;