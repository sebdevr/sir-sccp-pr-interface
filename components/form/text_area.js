export default function TextArea(props) {
	const { label, placeholder, rows, name, handleChange } = props;
	return (
		<div>
			<label className="font-inter text-gray-500 text-[12px]">{label}</label>
			<textarea
				rows={rows}
				onChange={handleChange}
				name={name}
				type="text"
				className=" textarea-input  text-white  placeholder:text-[#828295] text-[12px] placeholder:italic "
				placeholder={placeholder}
			/>
		</div>
	);
}
