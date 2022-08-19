import './user.css';
import "@fontsource/dm-sans";
import { React, useState } from 'react';
import calendar_icon from '../../../assets/Proposals/Calendar.svg'
import algo_icon from '../../../assets/Proposals/algorand_logo_mark_black.png'

const proposalSampleList = [
    {
      number: 1,
      name: "Preventing or Relieving Suffering Animals",
      status: "Completed",
      icon:"animal",
      preference: "Animal Welfare",
      assigned: ["Headshot1","Headshot2","Headshot3","Headshot4"],
      end: "10 June 2022",
      amount: "60,000"
    },
    {
        number: 2,
        name: "Promoting or Protecting Human Rights",
        status: "Closing",
        icon:"rights",
        preference: "Human Rights",
        assigned: ["Headshot4","Headshot2","Headshot3"],
        end: "21 July 2022",
        amount: "60,000"
    },
    {
        number: 3,
        name: "Preventing or Relieving Suffering Animals",
        status: "Active",
        icon:"education",
        preference: "Education",
        assigned: ["Headshot2","Headshot1","Headshot4"],
        end: "10 June 2022",
        amount: "60,000"
    },
    {
        number: 4,
        name: "Promoting or Protecting Human Rights",
        status: "Closing",
        icon:"healthcare",
        preference: "Healthcare",
        assigned: ["Headshot1","Headshot4","Headshot3"],
        end: "09 June 2022",
        amount: "60,000"
    }
  ];

const User = () => {

    const [currentProposal, setCurrentProposal] = useState(0);
    
    return (
        <>
        <div className='header'>
            <h1 className='headerText'>Proposals - User</h1>
        </div>
        <div className='wrapperBody'>
            <div className='proposalList'>
                {
                    proposalSampleList.map((proposal, index) => (
                        <div onClick={() => setCurrentProposal(index)} key={index} className='proposal'>
                            <div className="proposalInnerText">
                                <p className='proposalText'>Proposal #{proposal.number}: {proposal.name}</p>
                            </div>
                            <p className='proposalStatusText'>{proposal.status}</p>
                            <img className='proposalImg' alt='icon'
                                src={require('../../../assets/Proposals/' + proposal.icon + '.svg')}>
                            </img>
                        </div>
                    ))
                }
            </div>
            <div className='proposalInfo'>
                <div className="proposalInnerText">
                    <p className='proposalText'>Proposal #{proposalSampleList[currentProposal].number} - {proposalSampleList[currentProposal].preference}</p>
                    <p className='proposalDetailsText'>
                        This proposal covers distribution #{proposalSampleList[currentProposal].number}. 
                        This vote is cast for the charitable purpose of {proposalSampleList[currentProposal].preference} and 
                        relevant experts have been assigned to the distribution.
                    </p>
                </div>
                <div className='organizations'>
                    <p className='proposalText'>Assigned to:</p>
                    {
                        proposalSampleList[currentProposal].assigned.map((expertURL, index) => (
                            <img key={index} alt='icon'
                                className='organizationIcon' 
                                src={require('../../../assets/Proposals/Sample headshots/' + expertURL + '.png')}
                            ></img>
                        ))
                    }
                </div>
                <div className='proposalInfoParent'>
                    <div className='proposalEndDate'>
                        <img alt='icon' className='informationIcon' src={calendar_icon}></img>
                        <p className='proposalText'>{proposalSampleList[currentProposal].end}</p>
                    </div>
                    <div className='proposalAmount'>
                        <img alt='icon' className='informationIcon' src={algo_icon}></img>
                        <p className='proposalText'>{proposalSampleList[currentProposal].amount} ALGO</p>
                    </div>                   
                </div>
            </div>
        </div>
        </>
    )
}

export default User;
