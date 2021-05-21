import React from 'react';
import './style.css';

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='footer-container-content'>
				<div className='footer-container-content-details-one'>
					<img
						src='https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg'
						alt='Coinbase logo'
						loading='lazy'
						class='footer-container-content-details-one-image'
					></img>
					<select aria-label='Language selector' class='footer-container-content-details-one-select'>
						<option value='en'>English</option>
						<option value='de'>Deutsch</option>
						<option value='es'>Español - España</option>
						<option value='es-LA'>Español - América Latina</option>
						<option value='fr'>Français - France</option>
						<option value='id'>Bahasa Indonesia</option>
						<option value='it'>Italiano</option>
						<option value='ko'>한국어</option>
						<option value='pl'>Polski</option>
						<option value='pt'>Português - Brasil</option>
						<option value='pt-PT'>Português - Portugal</option>
						<option value='ru'>Pусский</option>
						<option value='th'>ไทย</option>
						<option value='tr'>Türkçe</option>
					</select>
					<div class='footer-container-content-details-one-contents'>
						<div className='footer-container-content-details-one-contents-one'>© 2021 Coinbase</div>
						<div className='footer-container-content-details-one-contents-two'>
							<a href='/'> Blog </a>
							<span className='footer-container-content-details-one-contents-two-content'>•</span>
							<a href='/'> Twitter </a>
							<span className='footer-container-content-details-one-contents-two-content'>•</span>
							<a href='/'> Facebook</a>
						</div>
					</div>
				</div>
				<div className='footer-container-content-details'>
					<h2>Company</h2>
					<a href='/'>About</a>
					<br />
					<a href='/'>Careers</a>
					<br />
					<a href='/'>Affiliates</a>
					<br />
					<a href='/'>Blog</a>
					<br />
					<a href='/'>Press</a>
					<br />
					<a href='/'>Investors</a>
					<br />
					<a href='/'>Legal & privacy</a>
					<br />
					<a href='/'>Cookie policy</a>
					<h2 style={{ marginTop: '15px' }}>Learn</h2>
					<a href='/'>Browse crypto prices</a>
					<br />
					<a href='/'>Crypto basics</a>
					<br />
					<a href='/'>Tips & tutorials</a>
					<br />
					<a href='/'>Market updates</a>
					<br />
					<a href='/'>What is Bitcoin?</a>
					<br />
					<a href='/'>What is crypto?</a>
					<br />
					<a href='/'>What is a blockchain?</a>
					<br />
					<a href='/'>
						How to set up a crypto <br /> wallet
					</a>
					<br />
					<a href='/'>How to send crypto</a>
					<br />
					<a href='/'>Taxes</a>
				</div>
				<div className='footer-container-content-details'>
					<h2>Individuals</h2>
					<a href='/'>Buy & sell</a>
					<br />
					<a href='/'>Earn free crypto</a>
					<br />
					<a href='/'>Wallet</a>
					<br />
					<a href='/'>Card</a>
					<br />
					<h2 style={{ marginTop: '15px' }}>Businesses</h2>
					<a href='/'>Prime</a>
					<br />
					<a href='/'>Custody</a>
					<br />
					<a href='/'>Asset Hub</a>
					<br />
					<a href='/'>Commerce</a>
					<br />
					<h2 style={{ marginTop: '15px' }}>Developers</h2>
					<a href='/'>Coinbase Cloud</a>
					<br />
					<a href='/'>Connect</a>
					<br />
					<a href='/'>Commerce</a>
					<br />
					<a href='/'>Pro</a>
					<br />
					<a href='/'>Bison Trails</a>
					<br />
					<a href='/'>WalletLink</a>
					<br />
					<a href='/'>Rosetta</a>
					<br />
					<a href='/'>USDC</a>
				</div>
				<div className='footer-container-content-details'>
					<h2>Support</h2>
					<a href='/'>Help center</a>
					<br />
					<a href='/'>Contact us</a>
					<br />
					<a href='/'>Create account</a>
					<br />
					<a href='/'>ID verification</a>
					<br />
					<a href='/'>Account information</a>
					<br />
					<a href='/'>Payment methods</a>
					<br />
					<a href='/'>Account access</a>
					<br />
					<a href='/'>Supported crypto</a>
					<br />
					<a href='/'>Supported countries</a>
					<br />
					<a href='/'>Status</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
