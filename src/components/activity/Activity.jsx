import style from "./Post.module.css";

export default function Post() {
	return (
		<div className={style.activityWrapper}>
			<div className={style.activityHeader}>
				<img src="http://placehold.co/80" alt="sample image"></img>
				<h3>Name Surname</h3>
				<p>Username</p>
				<p>20/01/2025</p>
			</div>

			<hr></hr>

			<div className={style.activityText}>
				<h3>Activity Title</h3>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Cumque quos maxime voluptas, atque qui beatae doloremque
					neque alias iste. Iste alias quae dolor tempore ipsam
					obcaecati accusantium. Beatae, sint officia vitae nisi
					tenetur at quam, eius eum facilis recusandae harum maxime
					blanditiis voluptates ad! Ipsa a temporibus tempore expedita
					officia!
				</p>
			</div>

			<hr></hr>

			<div className={style.activityStats}>
				<div className={style.activityTime}>
					<p>Time</p>
					<p>01:25:30</p>
				</div>
				<div className={style.activityCategory}>
					<p>Categories</p>
					<span>
						<p>SQL</p>
					</span>
					<span>
						<p>Spring Boot</p>
					</span>
					<span>
						<p>Java</p>
					</span>
				</div>
			</div>
		</div>
	);
}
