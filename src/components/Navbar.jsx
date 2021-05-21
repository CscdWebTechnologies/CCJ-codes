import React from 'react';
import Button from './button';
import './style.css';

const Navbar = () => {
	return (
		<div className='nav-body'>
			<div className='nav-logo'>
				<img
					className='nav-logo-name'
					src='https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg'
					alt='logo'
				/>
			</div>
			<div className='nav-menu-link'>
				<p>Prices</p>
				<p>Learn</p>
				<p>Individuals</p>
				<p>Businesses</p>
				<p>Developers</p>
				<p>Company</p>
			</div>
			<div className='nav-menu-pass'>
				<Button label='Sign in' />
				<Button label='Get started' styles={{ backgroundColor: 'blue', color: '#fff', fontWeight: '700' }} />
			</div>
		</div>
	);
};

export default Navbar;
