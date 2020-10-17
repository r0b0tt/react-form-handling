import React from "react";

const App = () => {
	return (
		<div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
			<div className="bg-white p-6 rounded shadow-xl">
				<h6 className="text-2xl mb-6">Create an account</h6>
				<form className="grid grid-cols-3 gap-5">
					<section className="flex gap-1 flex-col">
						<label
							htmlFor="fullNames"
							className="text-sm text-black"
						>
							Full Names*
						</label>
						<input
							required
							type="text"
							name="fullNames"
							id="fullNames"
							placeholder="John Doe"
							className="border px-2 py-2 rounded border-gray-500 transition duration-500 ease-in-out  focus:outline-none focus:border-black"
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
						/>
					</section>

					<section className="flex gap-1 flex-col">
						<label htmlFor="phone" className="text-sm text-black">
							Phone Number*
						</label>
						<input
							required
							type="tel"
							name="phone"
							id="phone"
							placeholder="+25412345678"
							className="border px-2 py-2 rounded border-gray-500 transition duration-500 ease-in-out  focus:outline-none focus:border-black"
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
								/>
								<p className="text-sm">Male</p>
							</div>
							<div className="flex gap-1 items-center">
								<input
									required
									type="radio"
									name="gender"
									id="gender"
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
									name="contract"
									id="contract"
								/>
								<p className="text-sm">Contract</p>
							</div>
							<div className="flex gap-1 items-center ">
								<input
									type="checkbox"
									name="partTime"
									id="partTime"
								/>
								<p className="text-sm">Part Time</p>
							</div>
							<div className="flex gap-1 items-center ">
								<input
									type="checkbox"
									name="fullTime"
									id="fullTime"
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
						></textarea>
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
		</div>
	);
};

export default App;
