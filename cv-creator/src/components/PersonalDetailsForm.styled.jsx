import { useState } from "react";

const PersonalDetailsForm = ({cvInfo, setCvInfo}) => {


    const handleChange = (e) => {
        setCvInfo(prev => {return {...prev, [e.target.name]: e.target.value}});
    }

    return ( 
        <>
            <label>
                <h3>Name</h3>
                <input type="text" name="name" value={cvInfo.name} onChange={(e) => handleChange(e)}/>
            </label>
            <label>
                <h3>Occupation</h3>
                <input type="text" name="occupation" value={cvInfo.occupation} onChange={(e) => handleChange(e)}/>
            </label>
            <label>
                <h3>About</h3>
                <input type="text" name="about" value={cvInfo.aboutf} onChange={(e) => handleChange(e)}/>
            </label>
        </>
     );
}
 
export default PersonalDetailsForm;