import React from "react";
export default function DateInput(props) {
	const { label, name, handleChange } = props;

	const handelDate = (e) => {
		e.target.type = "date";
	};
	return (
		<div>
			<label className="font-inter text-gray-500 text-[12px]">{label}</label>
			<input
				type="text"
				onFocus={handelDate}
				name={name}
				onChange={handleChange}
				className="font-inter text-input text-white  placeholder:text-[#828295] text-[12px] placeholder:italic "
				placeholder="dd/mm/yyyy"
			/>
		</div>
	);
}
