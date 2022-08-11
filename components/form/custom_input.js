import React from "react";
export default function CustomInput(props) {
	const { label, placeholder, width = 175, name, setValue, value } = props;
	const errRef = React.useRef(null);
	const parentRef = React.useRef(null);
	const inputRef = React.useRef(null);
	const newName = `temp-${name}`;
	const [newInput, setNewInput] = React.useState("");
	const handelDelete = (todel) => {
		//filter out the item to delete
		let item = value[name].filter((item) => item !== todel);

		setValue({
			...value,
			[name]: item,
		});
	};

	const handelChange = (e) => {
		errRef.current.innerHTML = "";
		setNewInput(e.target.value);
		
		setValue({
			...value,
			[newName]: e.target.value,
		});
	};
	function handelAddNew(e) {
		//This function will and a new input to the
		//getting the elements id
		e.preventDefault();
		if (value[newName]&&value[newName] !== "") {
			setValue({
				...value,
				[name]: [...value[name], value[newName]],
				[newName]:"",
			});
			inputRef.current.value="";			
		} else {
			errRef.current.innerText = "Please enter valid name";
		}
	}

	const handleUpdate = (e) => {
		//updating the preexisting value from the array
		let index = e.target.id;
		console.log(index);
		let newValue = value[name];
		newValue[index] = e.target.value;
		//updating the value at the index of the array
		setValue({
			...value,
			[name]: [...newValue],
		});
	};

	return (
		<div>
			<label className="w-full block font-inter text-gray-500 text-[12px]">
				{label}
			</label>
			<div className="w-full flex flex-wrap gap-5">
				<div ref={parentRef} className="flex flex-wrap gap-5">
					{value &&
						value[name].map((item, index) => {
							return (
								<div className="relative" key={index}>
									<input
										id={index}
										value={value[name][index]}
										className="font-inter text-input"
										style={{ width }}
										placeholder={item}
										onChange={handleUpdate}
									/>
									<button
										onClick={(e) => {
											e.preventDefault();
											handelDelete(item);
										}}
										className="font-inter text-gray-500 absolute top-5 right-3 text-[12px]"
									>
										❌
									</button>
								</div>
							);
						})}
					<input
						onChange={handelChange}
						type="text"
						value={value[newName]}
						ref={inputRef}
						className="font-inter text-input-custom "
						style={{ width }}
						placeholder={placeholder}
					/>
				</div>

				<div
					style={{ width }}
					className=" flex justify-center ring-[1px] ring-[#828295] rounded outline-dotted "
				>
					<button
						onClick={handelAddNew}
						className="text-[12px] text-[#00D1FF] bg-transparent w-[44px] h-[28px] ring-[1px] ring-[#828295] font-inter font-bold p-1 rounded mt-3 mb-3 text-center"
					>
						Add
					</button>
				</div>
			</div>
			<span className="text-xs text-red-600 font-inter" ref={errRef}></span>
		</div>
	);
}
