import axios from "axios";

export default async function handler(req, res) {
	if (req.method === "GET") {
		try {
			const clientID = "fe7d44f600f86aa803c4";
			const clientSecret = "0637cf791db9959ed81b6c83626bdb8190e693d4";
			const requestToken = req.query.code;

			const ghRes = await axios({
				method: "post",
				url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
				headers: {
					accept: "application/json",
				},
			});
			res.redirect(`/create?access_token=${ghRes.data?.access_token}`);
		} catch (error) {
			console.log(error);
			res.status(400).send(error.toString());
		}
	} else {
		res.status(404).send();
	}
}
