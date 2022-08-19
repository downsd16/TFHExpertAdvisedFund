import './history.css';
import "@fontsource/dm-sans";
import React from 'react';
import { useFormik } from 'formik';
import Prog_Bar from '../../progress-bar/Prog_Bar.js'
import Upload from '../../upload/Upload.js'


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
            <Prog_Bar completed={66} />
        </div>
        <div className='header'>
            <p className='subheader'>Professional History</p>
        </div>
        <div className='wrapperBody'>
            <div className='leftForms'>
                <form onSubmit={formik.handleSubmit}>
                <div className='inputContainer'>
                    <label htmlFor="prop_title">LinkedIn Profile URL</label>
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
                    <label htmlFor="country">Why You Want to Join This Panel?</label>
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
                    <label htmlFor="prop_type">Email Address</label>
                    <input
                        className='input'
                        id="prop_title"
                        name="prop_title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                </div>
                </form>
            </div>
            <div className='rightForms'>
                <label>Upload Curriculum Vitae</label>
                <Upload />
                <div className='inputContainer'>
                    <button type="submit" className='back'>Back</button>
                    <button type="submit" className='submit'>Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default New_Expert;