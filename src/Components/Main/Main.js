import React from 'react'
import { Container, Box, LinearProgress } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router-dom';
const HomeContainer = React.lazy(() => import('./../Home/HomeContainer'));
const About = React.lazy(() => import('./../About/About'));

export default function Main() {
    return (
      <Container>
        <Box my={2}>
            <React.Suspense fallback={<div><LinearProgress /></div>}>
              <Switch>
                <Route exact path="/home">
                  <HomeContainer />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route path="*">
                  <Redirect to="/home" />
                </Route>
              </Switch>
            </React.Suspense>
        </Box>
      </Container>
    )
}