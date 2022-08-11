export default function DropdownSelector(props) {
	const { label, placeholder, options, handleChange, name } = props;

	return (
		<div>
			<label className="font-inter text-gray-500 text-[12px]">{label}</label>
			<select
				onChange={handleChange}
				name={name}
				className="font-inter text-input "
				placeholder={placeholder}
			>
				{options.map((option, index) => {
					return (
						<option className=" mb-2" key={index} value={option}>
							{option}
						</option>
					);
				})}
			</select>
		</div>
	);
}
