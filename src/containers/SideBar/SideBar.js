import React from 'react';
import SideBarItem from './SideBarItem/SideBarItem';
import {Menu, Divider} from 'semantic-ui-react';
import './SideBar.scss';
import {SideBarHeader} from './SideBarHeader/SideBarHeader';
import {Subscriptions} from './Subscriptions/Subscriptions';
import {SideBarFooter} from './SideBarFooter/SideBarFooter';

export class SideBar extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <Divider/>
        <Divider/>
        <SideBarItem path='/' label='Home' icon='pied piper pp'/>
        <SideBarItem path='/feed/trending' label='Trending' icon='fire'/>
        <SideBarItem label='Followers' icon='pied piper'/>
        <Divider/>
        <Divider/>
        <SideBarHeader title='Library'/>
        <SideBarItem label='History' icon='history'/>
        <SideBarItem label='Watch later' icon='clock'/>
        <SideBarItem label='Liked videos' icon='thumbs up'/>
        <Divider/>
        <Divider/>
        <Divider/>
        <Subscriptions/>
        <Divider/>
        <Divider/>
        <SideBarFooter/>
      </Menu>
    );
  }
}