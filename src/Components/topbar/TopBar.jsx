import React from 'react';
import "./TopBar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const TopBar = () => {
    return (

        <div className='topbar'>
            <div className="topbarwrapper">

                <div className="topLeft">
                    <span className="logo">Panel Admin🙍‍♂️</span>
                </div>

                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsIcon />
                        <span className='topIconBadge'>2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <LanguageIcon />
                        <span className='topIconBadge'>2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <SettingsIcon />
                    </div>

                    <img src="favicon.ico" className='topAvatar' />

                </div>
            </div>
        </div>
    );
};

export default TopBar;