import './admin.css';
import "@fontsource/dm-sans";
import { React, useState } from 'react';
import calendar_icon from '../../../assets/Proposals/Calendar.svg'
import algo_icon from '../../../assets/Proposals/algorand_logo_mark_black.png'
import delete_icon from '../../../assets/Proposals/Delete.svg'
import plus_icon from '../../../assets/Proposals/Plus icon.svg'

const proposalSampleList = [
    {
      number: 1,
      name: "Preventing or Relieving Suffering Animals",
      status: "Completed",
      icon:"animal",
      preference: "Animal Welfare",
      organizations: ["peta","guide_dogs","wires","rspca"],
      end: "10 June 2022",
      amount: "60,000"
    },
    {
        number: 2,
        name: "Promoting or Protecting Human Rights",
        status: "Closing",
        icon:"rights",
        preference: "Human Rights",
        organizations: ["peta","guide_dogs","wires","rspca"],
        end: "10 June 2022",
        amount: "60,000"
    },
    {
        number: 3,
        name: "Preventing or Relieving Suffering Animals",
        status: "Active",
        icon:"education",
        preference: "Education",
        organizations: ["peta","guide_dogs","wires","rspca"],
        end: "10 June 2022",
        amount: "60,000"
    },
    {
        number: 4,
        name: "Promoting or Protecting Human Rights",
        status: "Active",
        icon:"healthcare",
        preference: "Healthcare",
        organizations: ["peta","guide_dogs","wires","rspca"],
        end: "10 June 2022",
        amount: "60,000"
    }
  ];

const Admin = () => {

    const [currentProposal, setCurrentProposal] = useState(0);
    
    return (
        <>
        <div className='header'>
            <h1 className='headerText'>Proposals - Admin</h1>
        </div>
        <div className='wrapperBody'>
            <div className='proposalList'>
                <div className='newProposalContainer'>
                    <img className='newProposalImg' src={plus_icon} alt='plus_icon'></img>
                    <h1 className='proposalText'>New Proposal</h1>
                </div>
                {
                    proposalSampleList.map((proposal, index) => (
                        <div onClick={() => setCurrentProposal(index)} key={index} className='proposal'>
                            <img className='deleteProposalImg' src={delete_icon} alt='delete_icon'></img>
                            <div className="proposalInnerText">
                                <p className='proposalText'>Proposal #{proposal.number}: {proposal.name}</p>
                            </div>
                            <p className='proposalStatusText'>{proposal.status}</p>
                            <img className='proposalImg' alt='preference_icon'
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
                    <p className='proposalText'>Organizations:</p>
                    {
                        proposalSampleList[currentProposal].organizations.map((expertURL, index) => (
                            <img key={index} alt='organization_icon'
                                className='organizationIcon' 
                                src={require('../../../assets/Proposals/Company icons/' + expertURL + '.png')}
                            ></img>
                        ))
                    }
                </div>
                <div className='proposalInfoParent'>
                    <div className='proposalEndDate'>
                        <img className='informationIcon' src={calendar_icon} alt='calendar_icon'></img>
                        <p className='proposalText'>{proposalSampleList[currentProposal].end}</p>
                    </div>
                    <div className='proposalAmount'>
                        <img className='informationIcon' src={algo_icon} alt='algorand_icon'></img>
                        <p className='proposalText'>{proposalSampleList[currentProposal].amount} ALGO</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Admin;
