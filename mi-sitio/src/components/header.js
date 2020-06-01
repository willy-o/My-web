import React from "react";
import Illustration from "../img/undraw_programming_2svr.png";
import Form from "./contact_form";

export default () => (				
	<header className="bg-gray-300">
		<div className="container mx-auto p-12 max-w-4xl">
			<div className="flex justify-center items-center">
				<div className="flex-1">
					<h1 className="font-bold text-blue-700 text-6xl">Hello! I'm Willy</h1>
					<p className="font-light text-xl">I'm web developer</p>
				</div>
				<img src={Illustration} alt="Man in front of some monitors" style={{height:"300px"}}></img>
			</div>
			<div>
				<Form />
			</div>
		</div>
	</header>
	
)