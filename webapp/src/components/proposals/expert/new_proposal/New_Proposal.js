import './new_proposal.css';
import "@fontsource/dm-sans";
import React from 'react';
import { useFormik } from 'formik';


const New_Proposal = () => {

    const formik = useFormik({
        initialValues: {
          prop_title: '',
          prop_due_date: '',
          country: '',
          purpose: '',
          prop_type: '',
          panel: '',
          description: ''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return(
        <>
        <div className='header'>
            <img className='arrow' alt='arrow' src={require('../../../../assets/arrow-down_2@3x.png')}></img>
            <h1 className='headerText'>Proposals</h1>
        </div>
        <div className='wrapperBody'>
            <div className='leftForms'>
                <form onSubmit={formik.handleSubmit}>
                <div className='inputContainer'>
                    <label htmlFor="prop_title">Proposal Title</label>
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
                    <label htmlFor="prop_type">Proposal Type</label>
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
                <div className='inputContainer'>
                <label htmlFor="prop_due_date">Description</label>
                    <input
                        id="prop_due_date"
                        name="prop_due_date"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                </div>
                </form>
            </div>
            <div className='rightForms'>
                <form onSubmit={formik.handleSubmit}>
                <div className='inputContainer'>
                    <label htmlFor="prop_due_date">Due Date</label>
                    <input
                        id="prop_due_date"
                        name="prop_due_date"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                </div>
                <div className='inputContainer'>    
                    <label htmlFor="purpose">Charitable Purpose</label>
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
                    <label htmlFor="panel">Select a Panel</label>
                    <select
                        id="panel"
                        name="panel"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    >
                        <option value="NONE" label="Select a Panel to Vote"></option>
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

export default New_Proposal;