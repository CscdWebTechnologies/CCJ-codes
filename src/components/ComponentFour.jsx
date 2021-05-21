import React from 'react';
import './style.css';

const FourthPart = () => {
	return (
		<div className='fourth-container'>
			<h2>Create your cryptocurrency portfolio today</h2>
			<p>Coinbase has a variety of features that make it the best place to start trading</p>
			<div className='fourth-container-content'>
				<div className='fourth-container-left'>
					<div className='fourth-container-content-one'>
						<div className='fourth-container-content-one-icon'>
							<svg width='30' height='32' viewBox='0 0 30 32'>
								<g fill='none' fill-rule='evenodd'>
									<path fill='#D4EEFF' d='M10 32h10V10H10z'></path>
									<path fill='#1752F0' d='M20 32h10V0H20z'></path>
									<path fill='#55B4FC' d='M0 32h10V19H0z'></path>
								</g>
							</svg>
						</div>
						<div className='fourth-container-content-one-content'>
							<h2>Manage your portfolio</h2>
							<p>
								Buy and sell popular digital currencies,
								<br />
								<span style={{ marginLeft: '-15px' }}>keep track of them in the one place.</span>
							</p>
						</div>
					</div>

					<div className='fourth-container-content-one'>
						<div className='fourth-container-content-one-icon'>
							<svg width='36' height='38' viewBox='0 0 36 38'>
								<g fill='none' fill-rule='evenodd'>
									<path
										d='M17.813 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0017.811 9.5M29.688 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0029.688 9.5'
										fill='#D4EEFF'
									></path>
									<path fill='#D4EEFF' d='M0 38h35.625V4.75H0z'></path>
									<path fill='#55B4FC' d='M0 11.875h35.625V4.75H0z'></path>
									<path
										d='M5.938 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 005.937 9.5'
										fill='#D4EEFF'
									></path>
									<path
										d='M27.313 4.75v2.375a2.375 2.375 0 004.75 0V4.75h-4.75zM5.938 9.5a2.375 2.375 0 002.375-2.375V4.75h-4.75v2.375A2.375 2.375 0 005.937 9.5'
										fill='#1752F0'
									></path>
									<path
										d='M17.813 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0017.811 9.5'
										fill='#D4EEFF'
									></path>
									<path
										d='M17.813 9.5a2.375 2.375 0 002.375-2.375V4.75h-4.75v2.375A2.375 2.375 0 0017.811 9.5'
										fill='#1752F0'
									></path>
									<path fill='#FFF' d='M4.75 34.438h26.125V11.875H4.75z'></path>
									<path fill='#1752F0' d='M12.69 26.329l3.359 3.359L26.125 19.61l-3.358-3.359z'></path>
									<path fill='#1752F0' d='M16.049 29.688l3.359-3.36-6.244-6.243-3.359 3.36z'></path>
								</g>
							</svg>
						</div>
						<div className='fourth-container-content-one-content'>
							<h2>Recurring buys</h2>
							<p>
								Invest in cryptocurrency slowly over time
								<br />
								<span style={{ marginLeft: '-35px' }}>
									by scheduling buys daily, weekly, or <br />
									<span style={{ marginLeft: '-230px' }}>monthly</span>
								</span>
							</p>
						</div>
					</div>

					<div className='fourth-container-content-one'>
						<div className='fourth-container-content-one-icon'>
							<svg width='30' height='33' viewBox='0 0 30 33' fill='none'>
								<path
									d='M15 0C9.106 0 4.284 4.64 4.284 11.344V25.78h21.429V11.344C25.714 4.64 20.892 0 14.999 0z'
									fill='#D4EEFF'
								></path>
								<path d='M30 12.375H0V33h30V12.375z' fill='#56B4FC'></path>
								<path d='M25.714 12.375H4.285v16.5h21.429v-16.5z' fill='#1652F0'></path>
								<path d='M15 18.563l2.84 6.187h-5.68L15 18.562z' fill='#fff'></path>
								<path
									d='M15 20.625c1.184 0 2.143-.923 2.143-2.063 0-1.139-.96-2.062-2.143-2.062-1.183 0-2.143.923-2.143 2.063 0 1.139.96 2.062 2.143 2.062z'
									fill='#fff'
								></path>
							</svg>
						</div>
						<div className='fourth-container-content-one-content'>
							<h2>Vault protection</h2>
							<p>
								For added security, store your funds in a
								<br />
								<span style={{ marginLeft: '-15px' }}>vault with time delayed withdrawals.</span>
							</p>
						</div>
					</div>

					<div className='fourth-container-content-one'>
						<div className='fourth-container-content-one-icon'>
							<svg width='36' height='36' viewBox='0 0 36 36' fill='none'>
								<path d='M36 2.25H0v31.5h36V2.25z' fill='#D4EEFF'></path>
								<path
									d='M28.125 36H7.875a1.128 1.128 0 01-1.125-1.125V1.125C6.75.506 7.256 0 7.875 0h20.25c.618 0 1.125.506 1.125 1.125v33.75c0 .619-.507 1.125-1.125 1.125z'
									fill='#56B4FC'
								></path>
								<path d='M29.25 2.25H6.75v31.5h22.5V2.25z' fill='#1652F0'></path>
								<path d='M23 15.137L21.889 14l-6.667 6.822 1.11 1.137L23 15.137z' fill='#fff'></path>
								<path d='M16.334 22l1.11-1.137-3.333-3.411-1.11 1.137L16.333 22z' fill='#fff'></path>
								<path
									d='M23.625 3.375h-11.25a1.128 1.128 0 01-1.124-1.125V1.125h13.5V2.25c0 .619-.507 1.125-1.126 1.125z'
									fill='#56B4FC'
								></path>
								<path
									d='M15.75 32.063c0 .337.226.562.563.562h3.375c.338 0 .563-.225.563-.562 0-.338-.226-.563-.563-.563h-3.375c-.337 0-.562.225-.562.563z'
									fill='#fff'
								></path>
							</svg>
						</div>
						<div className='fourth-container-content-one-content'>
							<h2>Mobile apps</h2>
							<p>
								Stay on top of the markets with the
								<br />
								<span style={{ marginLeft: '-15px' }}>Coinbase app for Android or iOS.</span>
							</p>
						</div>
					</div>
				</div>

				<div className='fourth-container-right'>
					<picture>
						<source
							srcset='https://assets.coinbase.com/assets/coinbase-app.3b0bfd4cb6b7a7614c1e18472187f6b9.webp'
							type='image/webp'
						/>
						<img
							src='https://assets.coinbase.com/assets/coinbase-app.51b8f3dbe406092d16845f3e74870061.jpg'
							alt='Coinbase Desktop and Mobile App'
							aria-label='Coinbase Desktop and Mobile App'
							loading='lazy'
						/>
					</picture>
				</div>
			</div>
		</div>
	);
};

export default FourthPart;
