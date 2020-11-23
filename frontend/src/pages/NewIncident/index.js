import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident () {
    return (
        <div>
            <h1>New Incident</h1>
            <img src={ logoImg } alt="Be The Hero"></img>
        </div>
        
    );
}