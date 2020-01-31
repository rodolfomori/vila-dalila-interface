import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Groups from '../pages/Groups';
import Assistance from '../pages/Assistance';
import Publishers from '../pages/Publishers';
import SettingsPage from '../pages/SettingsPage';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} isPrivate />
      <Route path="/home" component={Home} isPrivate />
      <Route path="/groups" component={Groups} isPrivate />
      <Route path="/assistance" component={Assistance} isPrivate />
      <Route path="/publishers" component={Publishers} isPrivate />
      <Route path="/settings" component={SettingsPage} isPrivate />
    </Switch>
  );
}
