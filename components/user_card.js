import Image from "next/image";
import { useRouter } from "next/router";

export default function UserCard({ username, avatar_url, name, company, bio }) {
	const router = useRouter();
	return (
		<div className="bg-[#070714] shadow rounded flex flex-wrap flex-cols justify-center sm:flex-row gap-8 text-[12px] p-3 lg:h-[116px] shadow m-1 sm:m-auto ">
			<div className="flex flex-wrap gap-5 ">
				<Image
					alt="User"
					width={56}
					height={56}
					src={avatar_url ?? "/assets/user.png"}
					className="block   object-contain rounded-full"
				/>
				<div className="text-white font-inter mt-6">
					<p className="font-bold text-[14px]">
						{name ?? "Name"} | {username ?? "Username"}
					</p>
					<p className="text-gray-400 text-[12px]">{company ?? <>&nbsp;</>}</p>
				</div>
			</div>

			<div className="w-[230px]  text-gray-400 leading-relaxed mt-4  ">
				<p>{bio ?? <>&nbsp;</>} </p>
			</div>

			<div className=" text-gray-400 leading-relaxed mt-5 ml-5 ">
				<div
					onClick={() => router.replace("/")}
					className="text-[12px] cursor-pointer text-[#85FFC4] bg-[#10104E] ring-[1px] ring-[#85FFC4] font-inter font-bold px-[14px] py-[7px] rounded-lg mt-2 "
				>
					Log out
				</div>
			</div>
		</div>
	);
}
