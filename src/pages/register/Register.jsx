import { useState } from "react";
import style from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";

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
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formData.password !== formData.confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		setError(null);

		const url = "http://localhost:8080/api/register";
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				const errorText = await response.json();
				setError(errorText.body.detail);
			} else {
				navigate("/registration-success");
			}
		} catch (e) {
			throw new Error(e);
		}
	}

	return (
		<div className={style.content}>
			<div className={style.formContainer}>
				<h1>Register</h1>
				<p className={style.note}>required fields are marked with *</p>
				{error !== null && error !== "" && <p className={style.error}>{error}</p>}
				<form onSubmit={handleSubmit}>
					<div className={style.formRow}>
						<input
							type="text"
							name="firstName"
							placeholder="First Name"
							value={formData.firstName}
							onChange={handleChange}
							required
						></input>
						<p className={style.required}>*</p>
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
						<p className={style.required}>*</p>
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
						<p className={style.required}>*</p>
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
						<p className={style.required}>*</p>
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
						<p className={style.required}>*</p>
					</div>

					<button type="submit">Submit</button>
				</form>
				<p>
					Already have an account? <Link to="/login">Login</Link>
				</p>
			</div>
		</div>
	);
}
