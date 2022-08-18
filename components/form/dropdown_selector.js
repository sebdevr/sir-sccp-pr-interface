import Select from "react-select";

export default function DropdownSelector(props) {
	const { label, options, name } = props;
	const handleSelect = (e) => {
		props.handleChange({
			target: {
				name,
				value: e.value,
			},
		});
	};
	return (
		<div>
			<label className="font-inter text-gray-500 text-[12px]">{label}</label>
			<Select
				onChange={handleSelect}
				name={name}
				options={options}
				classNamePrefix="select-wrapper"
				className="font-inter   placeholder:text-[#828295] text-[12px] placeholder:italic "
				placeholder={options[0].label}
			>
				{/* {options.map((option, index) => {
					return (
						<option
							className=" p-2 bg-white text-black"
							key={index}
							value={option}
						>
							{option}
						</option>
					);
				})} */}
			</Select>
		</div>
	);
}
