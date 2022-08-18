import Image from "next/image";
import { useRouter } from "next/router";

export default function UserCard({ username, avatar_url, name, company, bio }) {
	const router = useRouter();
	return (
		<div className="bg-[#002b34] rounded md:w-full  grid md:grid-cols-3 grid-cols-1 gap-5 md:gap-[175px]  pb-3 md:pb-0  overflow-hidden sm:flex-row text-[12px] md:h-[116px] shadow m-1 sm:m-auto ">
			<div className="flex  gap-5 w-[230px]  m-auto md:ml-[25px] md:m-0 ">
				<div className="h-[56px]  mt-[30px] w-[56px] rounded-full overflow-hidden">
					<Image
						alt="User"
						width={56}
						height={56}
						src={avatar_url ?? "/assets/user.png"}
						className="block   object-contain rounded-full"
					/>
				</div>
				<div className="text-white mt-[40px] font-inter">
					<p className="font-bold w-[155px] text-[13px] truncate ">
						{name ?? "Name"} | {username ?? "Username "}
					</p>
					<p className="text-gray-400 min-w-[125px] text-[12px] ">
						{company ?? <>&nbsp;</>}
					</p>
				</div>
			</div>
			<div className="w-[230px] m-auto h-[56px] overflow-hidden  text-gray-400 leading-relaxed md:mt-[30px] md:m-0  ">
				<p>{bio ?? <></>}</p>
			</div>

			<div className=" text-gray-400 w-[80px] m-auto  grid place-items-center ">
				<div
					onClick={() => router.replace("/")}
					className="text-[12px]   w-[65px]  cursor-pointer text-[#00d1ff] ring-[1px] h-[28px] duration-300 font-inter font-bold px-[10px] py-[6.5px] rounded "
				>
					Log out
				</div>
			</div>
		</div>
	);
}
