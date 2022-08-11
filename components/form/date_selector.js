import React from "react";
export default function DateInput(props) {
	const { label, placeholder, name, handleChange } = props;

	return (
		<div>
			<label className="font-inter text-gray-500 text-[12px]">{label}</label>
			<input
				type="date"
				name={name}
				onChange={handleChange}
				className="font-inter text-input text-gray-500 "
				placeholder={placeholder}
			/>
		</div>
	);
}
