import './menu.css';
import "@fontsource/dm-sans";
import dashboard from '../../assets/Global Assets/dashboard_icon.svg'
import donate from '../../assets/Global Assets/donate_icon.svg'
import proposals from '../../assets/Global Assets/proposals_icon.svg'
import profile from '../../assets/Global Assets/profile_icon.svg'
import settings from '../../assets/Global Assets/settings_icon.svg'

import { React } from 'react';
import { Link } from "react-router-dom";

const Menu = () => (
    <div className="wrapperMenu">
        
        <div className="wrapperHeader">
            <img className="logo" src={require("../../assets/Global Assets/TFH Logo.png")} alt="logo"></img>
        </div>

        <div className='wrapperNavbar'>
            <div className='wrapperNavOption'>
                <img className='buttonImg' alt='dashboard_image' src={dashboard}></img>
                <h1 className='menuItem'>Dashboard</h1>
                <img className='arrow' alt='arrow' src={require('../../assets/arrow-down_2@3x.png')}></img>
            </div>
    
            <div className='wrapperNavOption'>
                <img className='buttonImg' alt='donate_image' src={donate}></img>
                <h1 className='menuItem'>Donate</h1>
                <img className='arrow' alt='arrow' src={require('../../assets/arrow-down_2@3x.png')}></img>
            </div>

            <div className='wrapperNavOption'>
                <img className='buttonImg' alt='proposals_image' src={proposals}></img>
                <h1 className='menuItem'>Proposals</h1>
                <img className='arrow' alt='arrow' src={require('../../assets/arrow-down_2@3x.png')}></img>
            </div>

            <div className='wrapperNavOption'>
                <img className='buttonImg' alt='profile_image' src={profile}></img>
                <h1 className='menuItem'>My Profile</h1>
                <img className='arrow' alt='arrow' src={require('../../assets/arrow-down_2@3x.png')}></img>
            </div>

            <div className='wrapperNavOption'>
                <img className='buttonImg' alt='settings_image' src={settings}></img>
                <h1 className='menuItem'>Settings</h1>
                <img className='arrow' alt='arrow' src={require('../../assets/arrow-down_2@3x.png')}></img>
            </div>
        </div>
    </div>
    
)

export default Menu;