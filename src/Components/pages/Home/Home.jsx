import React from "react";
import "./Home.css"
import Feature from "../../Features/Feature";
import Chart from "../../Charte/Chart";
import {xAxisData} from "../../../datas";
import WidgetSm from "../../WidgetSm/WidgetSm";
import WidgetLg from "../../WidgetLg/WidgetLg";

export default function Home() {
    return (
        <div className="home">
            <Feature />
            <Chart grid title="Month Sale" data={xAxisData} dataKey="sale"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )

} 