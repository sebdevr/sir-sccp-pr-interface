import { Tab } from "@headlessui/react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Tabs(props) {
	const { active, setActive } = props;
	const handelChange = (e) => {
		e === 0 ? setActive("sip") : setActive("sccp");
	};
	return (
		<div className="ring-[1px] ring-[#828295] px-2 py-1 mt-5 rounded h-[60px] w-[350px]">
			<Tab.Group onChange={handelChange}>
				<Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
					<Tab
						className={({ selected }) =>
							classNames(
								"text-[#85FFC4] h-[40px] w-[300px] rounded-lg  text-sm font-medium leading-5 ",
								"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none",
								selected
									? "btn-gradient shadow text-gray-50"
									: "text-white hover:bg-white/[0.12] hover:text-white"
							)
						}
					>
						SIP
					</Tab>
					<Tab
						className={({ selected }) =>
							classNames(
								"h-[40px] w-[300px] rounded-lg text-sm font-medium leading-5 text-[#85FFC4]",
								"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none ",
								selected
									? "btn-gradient text-gray-50  shadow"
									: "text-white hover:bg-white/[0.12] hover:text-white"
							)
						}
					>
						SCCP
					</Tab>
				</Tab.List>
			</Tab.Group>
		</div>
	);
}
