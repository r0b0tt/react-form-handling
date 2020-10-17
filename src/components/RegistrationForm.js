import React from "react";

const RegistrationForm = () => {
	// Store user details
	const [userDetails, setUserDetails] = React.useState({
		fullNames: "",
		email: "",
		phoneNumber: "",
		employmentStatus: "employed",
		gender: "male",
		opportunities: [],
		aboutMe: "",
	});

	/**
	 * @param {React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement|any>} e
	 */
	const handleInputChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case "opportunities":
				let opportunities = [...userDetails.opportunities];
				if (e.target.checked) {
					opportunities.push(value);
				} else {
					const opportunityIndex = opportunities.findIndex(
						(opportunity) => opportunity === value
					);
					opportunities.splice(opportunityIndex, 1);
				}
				console.log(opportunities);
				return setUserDetails({
					...userDetails,
					opportunities: opportunities,
				});

			default:
				return setUserDetails({
					...userDetails,
					[name]: value,
				});
		}
	};

	/**
	 * @param {React.FormEvent} e
	 */
	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(userDetails);
	};
	return (
		<div className="bg-white p-6 rounded shadow-xl">
			<h6 className="text-2xl mb-6">Create an account</h6>
			<form
				className="grid grid-cols-3 gap-5"
				onSubmit={handleFormSubmit}
			>
				<section className="flex gap-1 flex-col">
					<label htmlFor="fullNames" className="text-sm text-black">
						Full Names*
					</label>
					<input
						required
						type="text"
						name="fullNames"
						id="fullNames"
						placeholder="John Doe"
						className="border px-2 py-2 rounded border-gray-500 transition duration-500 ease-in-out  focus:outline-none focus:border-black"
						value={userDetails.fullNames}
						onChange={handleInputChange}
					/>
				</section>

				<section className="flex gap-1 flex-col">
					<label htmlFor="email" className="text-sm text-black">
						Email Address*
					</label>
					<input
						required
						type="email"
						name="email"
						id="email"
						placeholder="john.doe@gmail.com"
						className="border px-2 py-2 rounded border-gray-500 transition duration-500 ease-in-out  focus:outline-none focus:border-black"
						value={userDetails.email}
						onChange={handleInputChange}
					/>
				</section>

				<section className="flex gap-1 flex-col">
					<label htmlFor="phone" className="text-sm text-black">
						Phone Number*
					</label>
					<input
						required
						type="tel"
						name="phoneNumber"
						id="phoneNumber"
						placeholder="+25412345678"
						className="border px-2 py-2 rounded border-gray-500 transition duration-500 ease-in-out  focus:outline-none focus:border-black"
						value={userDetails.phoneNumber}
						onChange={handleInputChange}
					/>
				</section>

				<section className="flex gap-1 flex-col">
					<label
						htmlFor="employmentStatus"
						className="text-sm text-black"
					>
						Employment Status*
					</label>
					<select
						required
						name="employmentStatus"
						id="employmentStatus"
						className="border px-2 py-2 rounded border-gray-500 transition duration-500 ease-in-out  focus:outline-none focus:border-black"
						value={userDetails.employmentStatus}
						onChange={handleInputChange}
					>
						<option value="employed">Employed</option>
						<option value="unemployed">Unemployed</option>
						<option value="selfEmployed">Self Employed</option>
						<option value="student">Student</option>
					</select>
				</section>

				<section className="flex gap-1 flex-col">
					<label htmlFor="gender" className="text-sm text-black">
						Gender*
					</label>
					<div className="flex gap-3">
						<div className="flex gap-1 items-center">
							<input
								required
								type="radio"
								name="gender"
								id="gender"
								value="male"
								checked={userDetails.gender === "male"}
								onChange={handleInputChange}
							/>
							<p className="text-sm">Male</p>
						</div>
						<div className="flex gap-1 items-center">
							<input
								required
								type="radio"
								name="gender"
								id="gender"
								value="female"
								checked={userDetails.gender === "female"}
								onChange={handleInputChange}
							/>
							<p className="text-sm">Female</p>
						</div>
					</div>
				</section>

				<section className="flex gap-1 flex-col">
					<label
						htmlFor="opportunities"
						className="text-sm text-black"
					>
						Interested Opportunities
					</label>
					<div className="flex gap-3">
						<div className="flex gap-1 items-center ">
							<input
								type="checkbox"
								name="opportunities"
								id="contract"
								value="contract"
								checked={userDetails.opportunities.includes(
									"contract"
								)}
								onChange={handleInputChange}
							/>
							<p className="text-sm">Contract</p>
						</div>
						<div className="flex gap-1 items-center ">
							<input
								type="checkbox"
								name="opportunities"
								id="partTime"
								value="partTime"
								checked={userDetails.opportunities.includes(
									"partTime"
								)}
								onChange={handleInputChange}
							/>
							<p className="text-sm">Part Time</p>
						</div>
						<div className="flex gap-1 items-center ">
							<input
								type="checkbox"
								name="opportunities"
								id="fullTime"
								value="fullTime"
								checked={userDetails.opportunities.includes(
									"fullTime"
								)}
								onChange={handleInputChange}
							/>
							<p className="text-sm">Full Time</p>
						</div>
					</div>
				</section>

				<section className="flex gap-1 flex-col col-span-3">
					<label htmlFor="aboutMe" className="text-sm text-black">
						Tell us something about yourself*
					</label>
					<textarea
						required
						name="aboutMe"
						id="aboutMe"
						className="flex-1 border px-2 py-2 rounded border-gray-500 transition duration-500 ease-in-out focus:outline-none focus:border-black"
						value={userDetails.aboutMe}
						onChange={handleInputChange}
					/>
				</section>

				<section>
					<button
						type="submit"
						className="text-sm text-white uppercase bg-blue-500 px-4 py-3 rounded transition duration-500 ease-in-out hover:bg-blue-700"
					>
						Create Account
					</button>
				</section>
			</form>
		</div>
	);
};

export default RegistrationForm;
