import React from "react";
import ReactDOM from "react-dom";

import "../css/index.css";

import Header from "./components/header";
import Slider from "./components/slider";
import News from "./components/news";


export default class Root extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Slider/>
				<News/>
			</div>
		);
	};
}
ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
