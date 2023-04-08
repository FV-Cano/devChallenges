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
	);
}

export default App;
