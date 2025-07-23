import style from "./Feed.module.css";

import Header from "../../components/header/Header.jsx";
import Activity from "../../components/activity/Activity.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { useEffect, useState } from "react";

export default function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const url = "http://localhost:8080/api/users";
		async function getPosts() {
			try {
				const username = "jaknito";
				const password = "test1234";
				const basicAuth = btoa(`${username}:${password}`);

				const response = await fetch(url, {
					method: "GET",
					headers: {
						Authorization: `Basic ${basicAuth}`,
					},
				});

				if (!response.ok) {
					console.log("Response status: " + response.status);
				}

				const json = await response.json();
				setPosts(json);
			} catch (error) {
				console.log(error.message);
			}
		}

		getPosts();
	}, []);

	console.log(posts);

	return (
		<>
			<div className={style.content}>
				<Activity />
				<Activity />
				<Activity />
				<Activity />
				<Activity />
				<Activity />
			</div>
		</>
	);
}
