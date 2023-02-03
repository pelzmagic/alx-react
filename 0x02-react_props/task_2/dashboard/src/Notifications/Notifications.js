import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

const Notifications = () => {
    return (
        <div className="Notifications">
            <p style={{ paddingLeft: '0.5rem' }}>
            Here is the list of notifications
            </p>
            <ul>
                <li data='default'>New course available</li>
                <li data='urgent'>New resume available</li>
                <li data='urgent'
                dangerouslySetInnerHTML = {{ __html: getLatestNotification() }}></li>
            </ul>
            <button style={{position:'absolute', right: '0.5rem' , top: '0.5rem', 
            border: 'none' , margin: '0.5rem', backgroundColor: 'transparent'}}
            aria-label = 'close'
            onClick={console.log('Close button has been clicked')}>
                <img src={closeIcon} alt='Close Button' 
                style={{width:'1rem', height: '1rem' , padding: '0.2rem'}}/>
            </button>
        </div>
    );
};

export default Notifications;