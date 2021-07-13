import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Page404 } from './pages/index'
import "aos/dist/aos.css"

export default function App() {

  return (
    <Switch>
      <Route path="/404" exact component={Page404} />
      <Route path="/" exact component={() => <Main ref={(MainPage)=> window.MainPageChangeState = MainPage ? MainPage.ChangeState : null} />} />
    </Switch>
  );
}