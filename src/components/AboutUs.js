import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate();
    


    //if we don't write replace, we can go back to last page.
    const clickHandler = () =>{
        navigate ('/' , {replace: true});
    }


    return (
        <div>
            <h1>About Us</h1>
            <br/>
            <br/>
            <button onClick={clickHandler}>Go Home</button>
        </div>
    );
};

export default AboutUs;