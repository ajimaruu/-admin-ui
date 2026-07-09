import React from "react";

function Button(props) { 
	const { children, type = "submit", variant = "primary", disabled } = props;
  	const baseClasses = "h-12 rounded-md text-sm w-full cursor-pointer hover:scale-105";
	const variantClasses = {
		primary: "bg-primary text-white", 
		secondary: "bg-gray-05 text-gray-02",
	};
	const disabledClasses = disabled ? "opacity-70 cursor-not-allowed hover:scale-100" : "";
	const finalClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${disabledClasses}`;
	return (
		<>
			<button className={finalClasses} type={type} disabled={disabled}>
				{children}
			</button>
		</>
	);
}

export default Button;
