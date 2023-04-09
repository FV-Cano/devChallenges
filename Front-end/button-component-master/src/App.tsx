import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Sidebar } from "./components/Sidebar";

function App() {
	return (
		<div className="App">
			<div className="nav">
				<Sidebar />
			</div>
			<div className="main">
				<h1>Buttons</h1>
				<div className="buttonGroups">
					<div className="group">
						<div className="defaultButton">
							<p className="name">&lt;Button /&gt;</p>
							<Button />
						</div>
						<div className="defaultButton-alt">
							<p className="alt">&: hover, &:focus</p>
							<Button />
						</div>
					</div>
					<div className="group">
						<div className="defaultButton">
							<p className="name">&lt;Button variant ="outline" /&gt;</p>
							<Button />
						</div>
						<div className="defaultButton-alt">
							<p className="alt">&: hover, &:focus</p>
							<Button />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
