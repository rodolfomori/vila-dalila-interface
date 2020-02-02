import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import NewGroup from '../pages/Groups/New Group';
import EditGroup from '../pages/Groups/Edit Group';
import Groups from '../pages/Groups';
import Assistance from '../pages/Assistance';
import Publishers from '../pages/Publishers';
import SettingsPage from '../pages/SettingsPage';
import Profile from '../pages/Profile';
import NewPublisher from '../pages/Publishers/New Publisher';
import EditPublisher from '../pages/Publishers/Edit Publisher';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} isPrivate />
      <Route path="/home" component={Home} isPrivate />

      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/groups/new-group" component={NewGroup} isPrivate />
      <Route path="/groups/:id/edit" component={EditGroup} isPrivate />
      <Route path="/groups" component={Groups} isPrivate />

      <Route path="/assistance" component={Assistance} isPrivate />

      {/* <Route path="/publishers" component={Publishers} isPrivate /> */}
      <Route path="/publishers/new" component={NewPublisher} isPrivate />
      <Route path="/publishers/:id/edit" component={EditPublisher} isPrivate />

      <Route path="/settings" component={SettingsPage} isPrivate />
    </Switch>
  );
}
