import './donate.css';
import "@fontsource/dm-sans";
import { React, useState } from 'react';

const preferenceSampleList = [
    {
    name: "Promoting or Protecting Human Rights",
    description: "This purpose covers the advancement of Human Rights",
    icon: "rights",
    assigned: ["Headshot4","Headshot2","Headshot3"],
    assigned_link: ["","",""],
    proposals: [
        {
            number: "1",
            date: "12/1/2022",
            state: "Completed",
            allocation1: ["wires","20.0"],
            allocation2: ["guide_dogs","80.0"],
            panel: ["Headshot3","Headshot2"]
        },
        {
            number: "4",
            date: "12/2/2022",
            state: "Active",
            allocation1: ["rspca","35.0"],
            allocation2: ["guide_dogs","65.0"],
            panel: ["Headshot4","Headshot2"]
        }]
    },
    {
        name: "Advancing the Natural Environment",
        description: "This purpose covers the advancement of the Natural Environment",
        icon: "environment",
        assigned: ["Headshot1","Headshot2","Headshot3"],
        assigned_link: ["","",""],
        organizations: ["guide_dogs","peta","rspca","wires"],
        proposals: [
            {
                number: "1",
                date: "12/4/2022",
                state: "Completed",
                allocation1: ["rspca","35.0"],
                allocation2: ["guide_dogs","65.0"],
                panel: ["Headshot4","Headshot1"]
            },
            {
                number: "2",
                date: "12/5/2022",
                state: "Active",
                allocation1: ["wires","50.0"],
                allocation2: ["rspca","50.0"],
                panel: ["Headshot3","Headshot4"]
            }]
        },
        {
            name: "Advancing Education",
            description: "This purpose covers the advancement of Human Rights",
            icon: "education",
            assigned: ["Headshot4","Headshot1","Headshot3","Headshot2"],
            assigned_link: ["","",""],
            organizations: ["peta","wires","guide_dogs"],
            proposals: [
                {
                    number: "7",
                    date: "12/7/2022",
                    state: "Active",
                    allocation1: ["wires","50.0"],
                    allocation2: ["rspca","50.0"],
                    panel: ["Headshot2","Headshot3"]
                },
                {
                    number: "2",
                    date: "12/8/2022",
                    state: "Completed",
                    allocation1: ["wires","20.0"],
                    allocation2: ["guide_dogs","80.0"],
                    panel: ["Headshot4","Headshot1"]
                }]
            },
            {
                name: "Advancing Religion",
                description: "This purpose covers the advancement of Human Rights",
                icon: "religion",
                assigned: ["Headshot2","Headshot1","Headshot3"],
                assigned_link: ["","",""],
                organizations: ["guide_dogs","wires","rspca"],
                proposals: [
                    {
                        number: "4",
                        date: "12/10/2022",
                        state: "Active",
                        allocation1: ["rspca","35.0"],
                        allocation2: ["guide_dogs","65.0"],
                        panel: ["Headshot4","Headshot3"]
                    },
                    {
                        number: "9",
                        date: "12/11/2022",
                        state: "Active",
                        allocation1: ["wires","50.0"],
                        allocation2: ["rspca","50.0"],
                        panel: ["Headshot2","Headshot4"]
                    }]
                },
                {
                    name: "Relieving The Suffering of Animals",
                    description: "This purpose covers the advancement of Human Rights",
                    icon: "animal",
                    assigned: ["Headshot3","Headshot2","Headshot1","Headshot4"],
                    assigned_link: ["","",""],
                    organizations: ["peta","guide_dogs","wires","rspca"],
                    proposals: [
                        {
                            number: "6",
                            date: "12/13/2022",
                            state: "Active",
                            allocation1: ["wires","20.0"],
                            allocation2: ["guide_dogs","80.0"],
                            panel: ["Headshot1","Headshot4"]
                        },
                        {
                            number: "8",
                            date: "12/14/2022",
                            state: "Completed",
                            allocation1: ["rspca","35.0"],
                            allocation2: ["guide_dogs","65.0"],
                            panel: ["Headshot2","Headshot1"]
                        }]
                    },
                    {
                        name: "Advancing Healthcare",
                        description: "This purpose covers the advancement of Human Rights",
                        icon: "healthcare",
                        assigned: ["Headshot1","Headshot3","Headshot2"],
                        assigned_link: ["","",""],
                        organizations: ["peta","guide_dogs","wires","rspca"],
                        proposals: [
                            {
                                number: "3",
                                date: "12/16/2022",
                                state: "Completed",
                                allocation1: ["wires","50.0"],
                                allocation2: ["rspca","50.0"],
                                panel: ["Headshot2","Headshot4"]
                            },
                            {
                                number: "6",
                                date: "12/17/2022",
                                state: "Active",
                                allocation1: ["wires","20.0"],
                                allocation2: ["guide_dogs","80.0"],
                                panel: ["Headshot1","Headshot3"]
                            }]
                        },
];

const Donate = () => {

    const [ currentPreference, setCurrentPreference ] = useState(0);
    
    return (
        <>
        <div className='header'>
            <h1 className='headerText'>Select a Preference and Donate</h1>
        </div>
        <div className='wrapperBody'>
            <div className='preferenceContainer'>
            <div className='preferenceGrid'>
                {
                    preferenceSampleList.map((preference, index) => (
                        <div className='preferenceSquareItem' key={index}
                            onClick={() => setCurrentPreference(index)}
                            style={{
                                backgroundColor: (currentPreference === index ? '#2425db':'')
                            }}
                        >
                            <img key={index} alt='icon'
                                className='preferenceIcon'
                                src={require('../../assets/Donate/' + preference.icon + '.svg')}
                                style={{
                                    filter: (currentPreference === index ? 'invert(100%) sepia(0%) saturate(0%) hue-rotate(250deg) brightness(100%) contrast(100%)':'')
                                }}
                            ></img>
                            <p className='smallerText'
                            style={{
                                color: (currentPreference === index ? 'white':'')
                            }}
                            >{preference.name}</p>
                        </div>
                    ))
                }
            </div>
            </div>
            <div className='proposalInfo'>
                <div className="proposalInnerText">
                    <p className='proposalText'>{preferenceSampleList[currentPreference].name}</p>
                    <p className='proposalDetailsText'>
                        {preferenceSampleList[currentPreference].description}
                    </p>
                </div>
                <div className='assignedExperts'>
                    <p className='proposalText'>Assigned Experts:</p>
                    {
                        preferenceSampleList[currentPreference].assigned.map((expertURL, index) => (
                            <img key={index} alt='icon'
                                className='organizationIcon' 
                                src={require('../../assets/Proposals/Sample headshots/' + expertURL + '.png')}
                            ></img>
                        ))
                    }
                </div>
                <div className='proposalParent'>
                    <p className='proposalText'>Previous Proposals:</p>
                        {
                            preferenceSampleList[currentPreference].proposals.map((proposal, index) => (
                                <>
                                <div className='proposalContainer' key={index}>
                                <div className='preferenceHeader'>
                                    <p className='proposalPanelText'>Proposal #{proposal.number}</p>
                                    <p className='proposalPanelText'>{proposal.date}</p>
                                    <p className='proposalPanelText'>{proposal.state}</p>
                                </div>
                                <div className='preferenceBody'>
                                    
                                    <div className='allocation'>
                                        <img className='organizationImg' alt='icon' src={require('../../assets/Proposals/Company icons/' + proposal.allocation1[0] + '.png')}></img>
                                        <p className='proposalPanelText'>{proposal.allocation1[1]}%</p>
                                        
                                        <img className='organizationImg' alt='icon' src={require('../../assets/Proposals/Company icons/' + proposal.allocation2[0] + '.png')}></img>
                                        <p className='proposalPanelText'>{proposal.allocation2[1]}%</p>

                                        <img className='organizationImg' alt='icon' src={require('../../assets/Proposals/Sample headshots/' + proposal.panel[0] + '.png')}></img>
                                        <img className='organizationImg' alt='icon' src={require('../../assets/Proposals/Sample headshots/' + proposal.panel[1] + '.png')}></img>
                                    </div>
                                </div>
                                </div>
                                </>
                            ))
                        }    
                </div>
                <button type="submit" className='submit'>Confirm</button>
            </div>
        </div>
        </>
    )
}

export default Donate;