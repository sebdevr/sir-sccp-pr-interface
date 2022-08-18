import { Tab } from "@headlessui/react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Tabs(props) {
	const { setActive } = props;
	const handelChange = (e) => {
		e === 0 ? setActive("sip") : setActive("sccp");
	};
	return (
		<div className="py-1 mt-5 rounded h-[60px] w-[350px]">
			<Tab.Group onChange={handelChange}>
				<Tab.List className="flex ring-[1px]  w-[350px] ring-[#828295] space-x-1 rounded-xl bg-blue-900/20 p-1">
					<Tab
						className={({ selected }) =>
							classNames(
								"text-[#00d1ff] h-[40px] w-[300px] rounded-lg  text-sm font-medium leading-5 ",
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
								"h-[40px] w-[300px] rounded-lg text-sm font-medium leading-5 text-[#00d1ff]",
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
