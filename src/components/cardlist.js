import React from 'react'
import Card from './Card'

const Cardlist = ({ Robots }) => {
	return (
		<div>
			{
			Robots.map((user, i) => {
				return <Card 
					key={i}
					id={i+2} 
					name={Robots[i].name} 
					email={Robots[i].created}/>
				})
			}
		</div>
	)
	

}
export default Cardlist;