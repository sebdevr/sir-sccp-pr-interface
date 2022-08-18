export default function TextInput(props) {
	const { label, name, placeholder, handleChange } = props;
	return (
		<div>
			<label className="font-inter text-gray-500 text-[12px]">{label}</label>
			<input
				type="text"
				onChange={handleChange}
				name={name}
				className="font-inter text-input text-white  placeholder:text-[#828295] text-[12px] placeholder:italic"
				placeholder={placeholder}
			/>
		</div>
	);
}
