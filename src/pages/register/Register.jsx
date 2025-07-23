import { useState } from "react";
import style from "./Register.module.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		dob: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState(null);
	// const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className={style.content}>
			<div className={style.formContainer}>
				<h1>Register</h1>
				<form onSubmit={handleSubmit}>
					<div className={style.formRow}>
						<input
							type="text"
							name="firstName"
							placeholder="First Name"
							value={formData.firstName}
							onChange={handleChange}
							pattern="^[A-Za-z]+$"
							required
						></input>
					</div>
					<div className={style.formRow}>
						<input
							type="text"
							name="lastName"
							placeholder="Last Name"
							value={formData.lastName}
							onChange={handleChange}
							required
						></input>
					</div>
					<div className={style.formRow}>
						<input
							type="text"
							name="username"
							placeholder="Username"
							value={formData.username}
							onChange={handleChange}
							required
						></input>
					</div>
					<div className={style.formRow}>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={formData.email}
							onChange={handleChange}
						></input>
					</div>
					<div className={style.formRow}>
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={formData.password}
							onChange={handleChange}
							autoComplete="off"
							required
						></input>
					</div>
					<div className={style.formRow}>
						<input
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password"
							value={formData.confirmPassword}
							onChange={handleChange}
							autoComplete="off"
							required
						></input>
					</div>

					<button type="submit">Submit</button>
				</form>
				<p>
					Already have an account? <a href="">Login</a>
				</p>
			</div>
		</div>
	);
}
