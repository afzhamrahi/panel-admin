import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newMembers } from '../../datas';
import "./WidgetSm.css"
const WidgetSm = () => {
    return (
        <div className='WidgetSm'>
            <h3 className="WidgetSmTitle"> New Join Members</h3>
            <ul className="WidgetSmList">
                {newMembers.map((user=>
                <li className="WidgetSmListItem" key={user.id}>
                    <img src={user.img} className='WidgetSmImg' />
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUserName">{user.username}</span>
                        <span className="WidgetSmUserTitle">{user.title}</span>
                    </div>
                    <button className="WidgetSmButton">
                        <VisibilityIcon className='WidgetSmIcon' />
                    </button>
                </li>
                ))}

            </ul>
        </div>
    );
};

export default WidgetSm;
