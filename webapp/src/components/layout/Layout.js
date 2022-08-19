import './layout.css';
import "@fontsource/dm-sans";
import { React } from 'react';
import { Outlet, Link } from "react-router-dom";

import dashboard from '../../assets/Global Assets/dashboard_icon.svg'
import donate from '../../assets/Global Assets/donate_icon.svg'
import proposals from '../../assets/Global Assets/proposals_icon.svg'
import profile from '../../assets/Global Assets/profile_icon.svg'
import settings from '../../assets/Global Assets/settings_icon.svg'
import Wallet from '../wallet/Wallet.js'

const Menu = () => {
    return (
    <div className="wrapperMain">
        <div className="wrapperMenu">
        
            <div className="wrapperHeader">
                <img className="logo" src={require("../../assets/Global Assets/TFH Logo.png")} alt="logo"></img>
            </div>

        <div className='wrapperNavbar'>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className='wrapperNavOption'>
                    <img className='buttonImg' alt='dashboard_image' src={dashboard}></img>
                    <h1 className='menuItem'>Dashboard</h1>
                    <img className='arrow' alt='arrow' src={require('../../assets/arrow-down_2@3x.png')}></img>
                </div>
            </Link>

            <Link to="/donate" style={{ textDecoration: 'none' }}>
                <div className='wrapperNavOption'>
                    <img className='buttonImg' alt='dashboard_image' src={donate}></img>
                    <h1 className='menuItem'>Donate</h1>
                    <img className='arrow' alt='arrow' src={require('../../assets/arrow-down_2@3x.png')}></img>
                </div>
            </Link>

            <Link to="/proposals" style={{ textDecoration: 'none' }}>
                <div className='wrapperNavOption'>
                    <img className='buttonImg' alt='dashboard_image' src={proposals}></img>
                    <h1 className='menuItem'>Proposals</h1>
                    <img className='arrow' alt='arrow' src={require('../../assets/arrow-down_2@3x.png')}></img>
                </div>
            </Link>

            <Link to="/profile" style={{ textDecoration: 'none' }}>
                <div className='wrapperNavOption'>
                    <img className='buttonImg' alt='dashboard_image' src={profile}></img>
                    <h1 className='menuItem'>Profile</h1>
                    <img className='arrow' alt='arrow' src={require('../../assets/arrow-down_2@3x.png')}></img>
                </div>
            </Link>

            <Link to="/settings" style={{ textDecoration: 'none' }}>
                <div className='wrapperNavOption'>
                    <img className='buttonImg' alt='dashboard_image' src={settings}></img>
                    <h1 className='menuItem'>Settings</h1>
                    <img className='arrow' alt='arrow' src={require('../../assets/arrow-down_2@3x.png')}></img>
                </div>
            </Link>
        </div>
    </div>
      <div className="backgroundShape">
        <Wallet />
      </div>
      <div className="userActions">
        <Outlet />
      </div>
    </div>
)}

export default Menu;