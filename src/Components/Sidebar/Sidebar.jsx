import React from 'react';
import "./Sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';

import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className='link'>
                            <li className='sidebarListItem active'>
                                <LineStyleIcon className='sidebaricon' />
                                Home
                            </li>
                        </Link>

                        <li className='sidebarListItem '>
                            <TimelineIcon className='sidebaricon' />
                            Analytics
                        </li>
                        <li className='sidebarListItem '>
                            <TrendingUpIcon className='sidebaricon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className='link'>
                            <li className='sidebarListItem '>
                                <PermIdentityIcon className='sidebaricon' />
                                Users
                            </li>
                        </Link>
                        <Link to="/newUsers" className='link'>
                            <li className='sidebarListItem '>
                                <PermIdentityIcon className='sidebaricon' />
                                New User
                            </li>
                        </Link>
                        <Link to="/products" className='link'>
                            <li className='sidebarListItem '>
                                <StorefrontIcon className='sidebaricon' />
                                Products
                            </li>
                        </Link>

                        <li className='sidebarListItem '>
                            <AttachMoneyIcon className='sidebaricon' />
                            Transaction
                        </li>
                        <li className='sidebarListItem '>
                            <BarChartIcon className='sidebaricon' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className="sidebarList">
                        <li className='sidebarListItem '>
                            <MailOutlineIcon className='sidebaricon' />
                            Mail
                        </li>
                        <li className='sidebarListItem '>
                            <DynamicFeedIcon className='sidebaricon' />
                            Feedback
                        </li>
                        <li className='sidebarListItem '>
                            <ChatBubbleOutlineIcon className='sidebaricon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className="sidebarList">
                        <li className='sidebarListItem '>
                            <MessageOutlinedIcon className='sidebaricon' />
                            Manage
                        </li>
                        <li className='sidebarListItem '>
                            <WorkOutlineIcon className='sidebaricon' />
                            Analytics
                        </li>
                        <li className='sidebarListItem '>
                            <ReportIcon className='sidebaricon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>



        </div>

    );
};

export default Sidebar;