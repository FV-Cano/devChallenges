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
					<div className="defaultGroup">
						<div className="defaultButton">
							<p className="name">&lt;Button /&gt;</p>
							<Button
								variant="text"
								disableShadow={true}
								disabled={false}
								startIcon=""
								endIcon=""
								size="md"
								color="default"
								content="Default"
							/>
						</div>
						<div className="defaultButton-alt">
							<p className="alt">&: hover, &:focus</p>
							<Button
								variant="text"
								disableShadow={true}
								disabled={false}
								startIcon=""
								endIcon=""
								size="md"
								color="default"
								content="Default"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
