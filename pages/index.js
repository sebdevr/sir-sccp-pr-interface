import Head from "next/head";
import Side from "../components/side";

export default function Login() {
	return (
		<>
			<Head>
				<title>SIP / SCCP PR Interface</title>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<div>
				<div className="bg-[#0B0B22] w-full min-h-screen overflow-hidden  ">
					<div className="container m-auto mt-24 flex flex-wrap px-5 flex-row gap-20 ">
						<div className="mt-5">
							<Side />
						</div>
						<div className="w-[750px] ring-[1px] h-[650px] m-auto grid place-items-center ring-gray-500 rounded-[15px]">
							<div className="flex flex-wrap justify-center flex-col gap-5">
								<p className="text-white text-inter text-[18px] font-bold">
									Authorize yourself with{" "}
								</p>
								<button
									onClick={() =>
										window.open(
											"https://github.com/login/oauth/authorize?client_id=fe7d44f600f86aa803c4&scope=read%3Auser%20repo",
											"_self"
										)
									}
									className="btn-login text-[14px]"
								>
									Github Login
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
