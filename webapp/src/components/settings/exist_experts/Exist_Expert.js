import './exist_expert.css';
import "@fontsource/dm-sans";
import { React } from 'react';
import exist_expert from '../../../assets/Settings/exist_expert.svg'
import new_expert from '../../../assets/Settings/new_expert.svg'
import fund_man from '../../../assets/Settings/fund_man.svg'
import location from '../../../assets/Settings/location.svg'
import Switch from "react-switch";

const existExpertList = [
    {
        name: 'John Berg',
        headshot: 'Headshot3',
        joined: '09/11/2021',
        location: 'Queensland, Australia',
        enabled: false
    },
    {
        name: 'Mark Duffy',
        headshot: 'Headshot2',
        joined: '09/11/2021',
        location: 'Johannesburg, South Africa',
        enabled: false
    },
    {
        name: 'Amira Chung',
        headshot: 'Headshot1',
        joined: '09/11/2021',
        location: 'California, United States',
        enabled: true
    }
  ];

const Exist_Expert = () => {
    
    return (
        <>
        <div className='header'>
            <h1 className='headerText'>Settings - Super Admin</h1>
        </div>
        <div className='wrapperBody'>
            <div className='adminOptions'>
                <div className='option'>
                    <img className='optionIcon' src={fund_man}></img>
                    <div className=''>
                        <p className='expertText'>Fund Management</p>
                        <p className='optionSubText'>Withdraw, Approve, and More</p>
                    </div>
                </div>
                <div className='option'>
                    <img className='optionIcon' src={exist_expert}></img>
                    <div className=''>
                        <p className='expertText'>Existing Experts</p>
                        <p className='optionSubText'>View, Remove or Modify Experts</p>
                    </div>
                </div>
                <div className='option'>
                    <img className='optionIcon' src={new_expert}></img>
                    <div className=''>
                        <p className='expertText'>New Experts</p>
                        <p className='optionSubText'>Approve or Add Experts</p>
                    </div>
                </div>
            </div>
            
            <div className='expertList'>
                <div className='expertSearch'>
                    <p className='expertText'>Search</p>
                </div>
                {
                    existExpertList.map((expert, index) => (
                        <div key={index} className='expert'>
                            <img className='expertHeadshot' 
                                src={require('../../../assets/Settings/' + expert.headshot + '.png')}
                            ></img>
                            <div className='expertDetails'>
                                <p className='expertText'>{expert.name}</p>
                                <p className='optionSubText'>Expert Since {expert.joined}</p>
                                <div className='location'>
                                    <img className='locationIMG' src={location}></img>
                                    <p className='optionSubText'>{expert.location}</p>
                                </div>
                            </div>
                            <div className='switchContainer'>
                                <label>
                                    <Switch checked={expert.enabled} />
                                </label>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Exist_Expert;