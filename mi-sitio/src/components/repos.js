import React, { useEffect, useState } from "react";
//import Repos from "../data/repos";
import Repo from "./repo";
//import fetchRepos from "../libs/fetchRepos";

export default () => {

	const [repos,setRepos] = useState([]);
	const [reposCount,setReposCount] = useState([]);


	useEffect(()=>{

		const data = sessionStorage.getItem("repos");
		let myRepos 
		if(data){
			myRepos  = JSON.parse(data);

			setReposCount(myRepos.length);

			myRepos = myRepos.slice(0,13);
			return setRepos(myRepos); 
		}

		async function fetchRepos(){
			const response = await fetch("https://api.github.com/users/willy-o/repos");
			myRepos = await response.json();
			setReposCount(myRepos.length);


			sessionStorage.setItem("repos", JSON.stringify(myRepos));

			myRepos = myRepos.slice(0,13);

			setRepos(myRepos);
		}

		fetchRepos();
			
	},[]);



	return (
		<div className="mt-12 container mx-auto max-w-4xl">

			<header className="text-center">
				<h2 className="text-3xl font-bold">My work in open source</h2>
				<p>Colaboration and contribution of code</p>
			</header>

			<ul className="repos-list">
				{
					repos.map((repo)=>{
						return <Repo repo={repo} key={repo.id} />
					})
				}
			</ul>
			<div className="mt-8 text-center">
				<a href="https://api.github.com/users/willy-o" className="btn mb-32" target="_blank" rel="noopener noreferrer">See more in github {reposCount}</a>
			</div>

		</div>
	)
}