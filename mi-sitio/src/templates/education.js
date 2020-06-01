import React from 'react';
import { graphql, Link } from 'gatsby';
import EdNav from "../components/education-nav";


export default (props)=>{
	const pageData = props.data.educationJson;
	return (
		<div className="">
			<header className="py-12 border-purple-500 border-solid border-t-8">
					<div className="max-w-4xl mx-auto">
					<Link to="/" className="btn inline-block mt-4">Regresar al inicio</Link>
					<h2 className="capitalize text-6xl font-bold">{pageData.tittle}</h2>
					<p className="text-xl">{pageData.description}</p>
				</div>
			</header>
			<ul>
				{
					pageData.items.map((item,index)=>(			
						<li className="bg-while shadow mt-4 flex" key={index}>
							<p className="vertical-text">{pageData.slug}</p>
							<div className="flex items-center flex-1 p-8">
								<div className="flex-1">
									<h3>{item.name}</h3>
									{
										item.degree && <span className="inline-block p-2 radius bg-purple-100 text-purple-700">{item.degree}</span>
									}
								</div>
							</div>
						</li>
					))
				}
			</ul>
			<EdNav />
		</div>
	)
}

export const qurery = graphql`
	query($slug : String){
		  educationJson(slug:{eq: $slug}){
		    tittle
		    slug
		    description
		    items{
		    	name
		    	degree
		    }
		}
	}
`; 