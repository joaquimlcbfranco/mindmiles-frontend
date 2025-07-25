import style from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<div className={style.errorWrapper}>
			<h1>Sorry! There was an error handling your request</h1>
      <p>Back to <Link to="/">homepage</Link></p>
		</div>
	);
}
