import React from "react";
import slider01 from "../../images/banner01.png";
export default class Slider extends React.Component{
    render(){
        return(
            <section>
                <div className="slider-box">
                    <ul className="slider-content">
                        <li>
                            <img src={slider01} alt="" />
                            <span>紫禁城的石头是如何运进去的?</span>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}
