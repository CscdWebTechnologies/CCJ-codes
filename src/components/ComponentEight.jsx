import React from 'react';
import Button from './button';
import './style.css';

const EightPart = () => {
	return (
		<div className='eight-container'>
			<div className='eight-container-content'>
				<div
					style={{
						backgroundColor: '#e9f6fe',
						width: '100%',
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<h2>Earn up to $28 worth of crypto</h2>
					<p>
						Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.
					</p>
                    <Button label='Start earning' styles={{marginTop: '0', backgroundColor: 'blue', height: '40px', color: '#fff', marginLeft: '-170px'}}/>
				</div>
				<picture>
					<source
						srcset='https://assets.coinbase.com/assets/earn-upsell-desktop.dad0f473399e16fa8c176a9599c883ea.webp'
						type='image/webp'
					/>
					<img
						src='https://assets.coinbase.com/assets/earn-upsell-desktop.852a74929173d0974480694525be02ab.jpg'
						alt='Earn crypto while learning about crypto'
						aria-label='Earn crypto while learning about crypto'
						loading='lazy'
					/>
				</picture>
			</div>
		</div>
	);
};

export default EightPart;
