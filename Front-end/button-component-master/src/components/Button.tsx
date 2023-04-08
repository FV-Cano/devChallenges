import "../styles/Button.css";

interface ButtonProps {
	variant: "text" | "outlined";
	disableShadow: boolean;
	disabled: boolean;
	startIcon: string;
	endIcon: string;
	size: "sm" | "md" | "lg";
	color: "default" | "primary" | "secondary" | "danger";
	content: string;
}

export const Button = ({
	variant,
	disableShadow,
	disabled,
	startIcon,
	endIcon,
	size,
	color,
	content,
}: ButtonProps) => {
	return (
		<button
			className={`button ${variant} ${size} ${color}
            ${disableShadow ? "" : "shadow"}
            ${disabled ? "disabled" : ""}
            `}
		>
			{/* prettier-ignore */}
			{startIcon ? <span className="material-icons">{startIcon}</span> : ""}
			{<span className="textContent">{content}</span>}
			{endIcon ? <span className="material-icons">{endIcon}</span> : ""}
		</button>
	);
};
