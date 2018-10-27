import React from 'react';
import './rank.css';

const Rank = ({name, entries}) => {
	return (
		<div>
			<div className='white f3'>
				{`${name}, you have submitted a total of...`}
			</div>
			<div className='white f1'>
				{`${entries} images`}
			</div>
		</div>
		);
}

export default Rank;