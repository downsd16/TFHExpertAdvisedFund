import './new_expert.css';
import "@fontsource/dm-sans";
import React from 'react';
import { useFormik } from 'formik';
import Prog_Bar from '../../progress-bar/Prog_Bar.js'


const New_Expert = () => {

    const formik = useFormik({
        initialValues: {
          first_name: '',
          last_name: '',
          country: '',
          experience_years: '',
          panel: ''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return(
        <>
        <div className='header'>
            <h1 className='headerText'>Apply to Become an Expert</h1>
            <Prog_Bar completed={33} />
        </div>
        <div className='header'>
            <p className='subheader'>Submit an Application to Become an Expert</p>
        </div>
        <div className='wrapperBody'>
            <div className='leftForms'>
                <form onSubmit={formik.handleSubmit}>
                <div className='inputContainer'>
                    <label htmlFor="prop_title">First Name</label>
                    <input
                        className='input'
                        id="prop_title"
                        name="prop_title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="country">Country</label>
                    <select
                        id="country"
                        name="country"
                        onChange={formik.handleChange}
                        value={formik.values.country}
                        style={{ display: "block" }}
                    >
                        <option value="" label="Country of Proposal">
                        </option>
                        <option value='AUS' label='Australia'>
                        </option>
                        <option value='CA' label='Canada'>
                        </option>
                    </select>
                </div>
                <div className='inputContainer'>
                    <label htmlFor="prop_type">Join a Panel</label>
                    <select
                        id="prop_type"
                        name="prop_type"
                        onChange={formik.handleChange}
                        value={formik.values.prop_type}
                    >
                        <option value="" label="Select a color">
                            Type of Proposal{" "}
                        </option>
                        <option value='AUS' label='AUS'>
                            Payment
                        </option>
                    </select>
                </div>
                </form>
            </div>
            <div className='rightForms'>
                <form onSubmit={formik.handleSubmit}>
                <div className='inputContainer'>
                    <label htmlFor="prop_due_date">Last Name</label>
                    <input
                        id="prop_due_date"
                        name="prop_due_date"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                </div>
                <div className='inputContainer'>    
                    <label htmlFor="purpose">Years of Experience</label>
                    <select
                        id="purpose"
                        name="purpose"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    >
                        <option value="NONE" label="Select a Purpose"></option>
                        <option value='human_rights' label='Human Rights'></option>
                        <option value='animal_rights' label='Animal Rights'></option>
                        <option value='education' label='Education'></option>
                    </select>
                </div>
                <div className='inputContainer'>
                    <button type="submit" className='back'>Back</button>
                    <button type="submit" className='submit'>Submit</button>
                </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default New_Expert;