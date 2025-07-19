import style from "./Header.module.css";

export default function Header() {
	return (
		<header className={style.header}>
			<div>
				<button>Menu</button>
			</div>
			<div className={style.rightHeader}>
				<button>Timer</button>
				<button>Profile</button>
			</div>
		</header>
	);
}
