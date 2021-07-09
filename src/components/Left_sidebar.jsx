import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import './left-sidebar.css';
import { Tweet } from 'react-twitter-widgets'
export default function Left_sidebar() {
    return (
        <div className='left-sidebar'>


    


    <Timeline
   
  dataSource={{
    sourceType: 'profile',
    screenName: 'Javascript'
  }}
  options={{
    height: '700'
  }}
/>
        </div>
    )
}
