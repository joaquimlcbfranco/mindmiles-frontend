import style from "./Feed.module.css";

import Header from "../../components/header/Header.jsx";
import Activity from "../../components/activity/Activity.jsx";
import Footer from "../../components/footer/Footer.jsx";

export default function Feed() {
	return (
		<>
			<Header />
			<div className={style.content}>
				<Activity />
				<Activity />
				<Activity />
				<Activity />
				<Activity />
				<Activity />
			</div>
			<Footer />
		</>
	);
}
