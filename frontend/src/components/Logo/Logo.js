import React from 'react'
import compLogo from '../../assets/Logo.png';
const logo = (props) => (
    <div className="text-center img-fluid">
        <img src={compLogo} width="auto" height="auto" alt="MyLogo" style={{backgroundColor :'grey'}}/>
    </div>
);

export default logo;