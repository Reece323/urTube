import React from 'react';
import {Subscription} from "./Subscription/Subscription";
import {Divider} from "semantic-ui-react";
import {SideBarHeader} from '../SideBarHeader/SideBarHeader';

export class Subscriptions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBarHeader title='Subscriptions'/>
        <Subscription label='Mumford&Sons' broadcasting/>
        <Subscription label='Taylor Swifty' amountNewVideos={10}/>
        <Subscription label='TEDx Yells' amountNewVideos={23}/>
        <Subscription label='Bladam' amountNewVideos={4}/>
        <Subscription label='Udacity' amountNewVideos={114}/>
        <Divider/>
      </React.Fragment>
    );
  }
}