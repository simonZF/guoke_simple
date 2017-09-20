import React from "react";
import ReactDOM from "react-dom";

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="header-info">
                    <a href="javascript:;" className="menu">菜单</a>
                    <h1 className="logo">GuoKr.com</h1>
                    <a className="toggle-pc" href="javascript:;">PC</a>
                </div>
                <div className="header-nav">
                    <a className="user-lgn" href="javascript:;">用户登录</a>
                    <span className="line"></span>
                    <a className="user-reg" href="javascript:;">用户注册</a>
                </div>
            </header>
        )
    }
}
