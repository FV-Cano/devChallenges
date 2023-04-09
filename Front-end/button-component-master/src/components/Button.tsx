import "../styles/Button.css";

interface ButtonProps {
	variant: "default" | "text" | "outlined";
	disableShadow: boolean;
	disabled: boolean;
	startIcon: string;
	endIcon: string;
	size: "sm" | "md" | "lg";
	color: "default" | "primary" | "secondary" | "danger";
	content: string;
}

const defaultProps: ButtonProps = {
	variant: "default",
	disableShadow: true,
	disabled: false,
	startIcon: "",
	endIcon: "",
	size: "md",
	color: "default",
	content: "Default",
};

export const Button = (props: ButtonProps) => {
	const {
		variant,
		disableShadow,
		disabled,
		startIcon,
		endIcon,
		size,
		color,
		content,
	} = props;

	return (
		<button
			className={`button ${variant} ${size} ${color}
			${disableShadow ? "" : "shadowed"}
			${disabled ? "disabled" : ""}
		`}
		>
			{startIcon ? <span className="material-icons">{startIcon}</span> : ""}
			<span className="textContent">{content}</span>
			{endIcon ? <span className="material-icons">{endIcon}</span> : ""}
		</button>
	);
};

Button.defaultProps = defaultProps;
