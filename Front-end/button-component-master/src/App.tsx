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
						<div className="outlineButton">
							<p className="name">&lt;Button variant ="outline" /&gt;</p>
							<Button variant="outlined" />
						</div>
						<div className="outlineButton-alt">
							<p className="alt">&: hover, &:focus</p>
							<Button variant="outlined" />
						</div>
					</div>
					<div className="group">
						<div className="textButton">
							<p className="name">&lt;Button variant ="text" /&gt;</p>
							<Button variant="text" />
						</div>
						<div className="textButton-alt">
							<p className="alt">&: hover, &:focus</p>
							<Button variant="text" />
						</div>
					</div>
					<div className="group">
						<div className="disableShadowButton">
							<p className="name">&lt;Button disableShadow /&gt;</p>
							<Button disableShadow={false} />
						</div>
					</div>
					<div className="group">
						<div className="disableButton">
							<p className="name">&lt;Button disabled /&gt;</p>
							<Button disabled={true} />
						</div>
						<div className="disableButton-alt">
							<p className="alt">Button variant ="text" disabled</p>
							<Button variant="text" disabled={true} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
