import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Activity from "../../components/activity/Activity.jsx";
import style from "./Profile.module.css";

export default function Profile() {
	return (
		<>
			<Header />
			<div className={style.profileWrapper}>
				<div className={style.profileInfo}>
					<img
						className={style.image}
						src="http://placehold.co/160"
						alt="sample image"
					></img>
					<div className={style.profileDetails}>
						<h1>Name Surname</h1>
						<h2>username</h2>
						<div className={style.followers}>
							<p>Followers</p>
							<p>123</p>
						</div>
						<div className={style.following}>
							<p>Following</p>
							<p>321</p>
						</div>
					</div>
					<button className={style.editProfile}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="20px"
							viewBox="0 -960 960 960"
							width="20px"
							fill="#FFFFFF"
						>
							<path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
						</svg>
					</button>
				</div>

				<div className={style.activities}>
					<select className={style.sort}>
						<option value="latest">Sort by <span>latest</span></option>
						<option value="newest">Sort by <span>newest</span></option>
					</select>
					<Activity />
					<Activity />
					<Activity />
					<Activity />
					<Activity />
				</div>
			</div>

			<Footer />
		</>
	);
}
