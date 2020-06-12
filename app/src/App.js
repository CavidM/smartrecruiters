import React from 'react';
import { unstable_createMuiStrictModeTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FilterablePostingsListComponent from './components/FilterablePostingsList/FilterablePostingsListComponent';
import AppHeader from './components/AppHeader/AppHeader';
import PageWrapper from './components/PageWrapper';
import PostingDetails from './components/PostingDetails/PostingDetails';

const theme = unstable_createMuiStrictModeTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App' data-test="app">

        <Router>

          <AppHeader />

          <PageWrapper>
            <Switch>

              <Route path="/posting/:id">
                <PostingDetails />
              </Route>

              <Route path="/">
                <FilterablePostingsListComponent></FilterablePostingsListComponent>
              </Route>

            </Switch>
          </PageWrapper>

        </Router>

      </div>
    </ThemeProvider>
  );
}

export default App;
