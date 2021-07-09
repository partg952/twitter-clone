import React from 'react'
import './right-bar.css';   
import TwitterLogo from '../assets/twitter.svg';
import HouseIcon from '@material-ui/icons/House';
import HomeIcon from '../assets/home.svg';
import HashTag from '../assets/hashtag.svg';
import { Hash } from 'ssri';
import Bell from '../assets/bell.svg';
import Letter from '../assets/letter.svg';
import Bookmark from '../assets/bookmark.svg';
import List from '../assets/list.svg';
import User from '../assets/user.svg';
import More from '../assets/more.svg';
export default function Right_sidebar() {
    return (
        <div className='right-sidebar'>
            <span id='logo-span'>
                <img src={TwitterLogo} alt="" />
                <p style={{visibility:'none'}}>hello</p>
            </span>
            <br />
            <span className='sidebar-spans'>
                <img src={HomeIcon} alt="" style={{height:'100px'},{color:'black'}} />
                <p>Home</p>
            </span>
            <span className='sidebar-spans'>
                <img src={HashTag} alt="" />
                <p>Explore</p>
            </span>
            <span className='sidebar-spans'>
                <img src={Bell} alt="" />
                <p>Notifications</p>
            </span>
            <span className='sidebar-spans'>
                <img src={Letter} alt="" />
                <p>Messages</p>
            </span>
            <span className='sidebar-spans'>
                <img src={Bookmark} alt="" />
                <p>Bookmarks</p>
            </span>
            <span className='sidebar-spans'>
                <img src={List} alt="" />
                <p>Lists</p>
            </span>
            <span className='sidebar-spans'>
                <img src={User} alt="" />
                <p>Profile</p>
            </span>
            <span className='sidebar-spans'>
                <img src={More} alt="" />
                <p>More</p>
            </span>
            <button id='tweet-button2'>Tweet</button>
        </div>
    )
}
