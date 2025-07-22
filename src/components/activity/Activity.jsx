import style from "./Activity.module.css";

export default function Post() {
	return (
		<div className={style.activityWrapper}>
			<div className={style.activityHeader}>
				<img
					className={style.image}
					src="http://placehold.co/80"
					alt="sample image"
				></img>
				<h4 className={style.name}>Name Surname</h4>
				<p className={style.username}>Username</p>
				<p className={style.date}>20/01/2025</p>
			</div>

			<hr className={style.separator}></hr>

			<div className={style.activityText}>
				<h3>Activity Title</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Atque sint rerum quidem provident voluptatibus in libero
					inventore deserunt, error dolores?
				</p>
			</div>

			<hr className={style.separator}></hr>

			<div className={style.activityStats}>
				<div className={style.activityTime}>
					<p>Time</p>
					<p>01:25:30</p>
				</div>
				<div className={style.activityCategory}>
					<p>Categories</p>
					<div className={style.categories}>
						<span>
							<p>SQL</p>
						</span>
						<span>
							<p>Spring Boot</p>
						</span>
						<span>
							<p>Java</p>
						</span>
						<span>
							<p>Java</p>
						</span>
						<span>
							<p>Java</p>
						</span>
						<span>
							<p>Java</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
