import React from 'react';
import "./WidgetLg.css"
import { transactions } from '../../datas';
const WidgetLg = () => {
    const Button = ({ type }) => {
        return <button className={`WidgetLgButton ${type} `} > {type} </button>
    }
    return (
        <div className='WidgetLg'>
            <h3 className="WidgetLgTitle">Latest transActions </h3>
            <table className="WidgetLgTable">
                <tr className="WidgetLgTr">
                    <th className="WidgetLgTh">Customer</th>
                    <th className="WidgetLgTh">Date</th>
                    <th className="WidgetLgTh">Amount</th>
                    <th className="WidgetLgTh">Status</th>
                </tr>
                {transactions.map(transactions=>(
                <tr className="WidgetLgTr">
                    <td className="WidgetLgUser">
                        <img src={transactions.img} className='WidgetLgImg' />
                        <span className='WidgetLgName'>{transactions.customer}</span>
                    </td>
                    <td className="WidgetLgDate">{transactions.date}</td>
                    <td className="WidgetLgAmount">{transactions.amount}$</td>
                    <td className="WidgetLgStatus">
                        <Button type={transactions.status} />
                    </td>
                </tr>
                ))}

            </table>
        </div>
    );
};

export default WidgetLg;