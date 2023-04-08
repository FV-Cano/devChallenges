import "../styles/Sidebar.css";

export const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="logo">
				<h1 id="one">Dev</h1>
				<h1 id="two">challenges.io</h1>
			</div>
			<div className="sidebarItems">
				{/* prettier-ignore */}
				<ul>
					<li><span>Colors</span></li>
					<li><span>Typography</span></li>
					<li><span>Spaces</span></li>
					<li><span>Buttons</span></li>
					<li><span>Inputs</span></li>
					<li><span>Grid</span></li>
				</ul>
			</div>
		</div>
	);
};
