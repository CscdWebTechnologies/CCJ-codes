import React from 'react';

const Button = ({ label, styles }) => {
	return (
		<button
			style={{
				width: '30%',
				height: '50%',
				margin: '3px',
				border: 'none',
				backgroundColor: '#fff',
				borderRadius: '5px',
				...styles,
			}}
		>
			{label}
		</button>
	);
};

export default Button;
