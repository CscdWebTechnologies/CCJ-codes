import React from 'react';
import Button from './button';
import './style.css';

const ThirdPart = () => {
	return (
		<div className='third-container'>
			<div className='third-container-left'>
				<span className='third-container-header'>
					Earn up to $28 worth <br /> of crypto
				</span>
				<span className='third-container-content'>
					Discover how specific cryptocurrencies work-and <br /> get a bit of each crypto to try out for yourself.
				</span>
				<Button
					label='Start earning'
					styles={{ backgroundColor: 'rgb(22, 82, 240)', color: '#fff', width: '100px', height: '40px' }}
				/>
			</div>
			<div className='third-container-right'>
				<div className='third-container-list'>
					<div className='third-container-icon'>
						<img
							src='https://static-assets.coinbase.com/earn/campaigns/skale/asset-logo.svg'
							alt='SKALE'
							className='third-container-icon-img'
						></img>
					</div>
					<div className='third-container-right-content'>
						<span className='cutie'>
							SKALE <span className='cute'>SKL</span>
						</span>
					</div>
					<div className='third-container-right-earning'>
						<span>Earn $3 SKL</span>
					</div>
				</div>

				<div className='third-container-list'>
					<div className='third-container-icon'>
						<img
							src='https://static-assets.coinbase.com/earn/campaigns/ampleforth-governance-token/asset-logo.svg'
							alt='Ampleforth Governance Token'
							className='third-container-icon-img'
						></img>
					</div>
					<div className='third-container-right-content'>
						<span className='cutie'>Ampleforth Governance Token</span>
						<span className='cute'>FORTH</span>
					</div>
					<div className='third-container-right-earning'>
						<span>Earn $3 FORTH</span>
					</div>
				</div>

				<div className='third-container-list'>
					<div className='third-container-icon'>
						<img
							src='https://static-assets.coinbase.com/earn/campaigns/the-graph/asset-logo.svg'
							alt='The Graph'
							className='third-container-icon-img'
						></img>
					</div>
					<div className='third-container-right-content'>
						<span className='cutie'>
							The Graph <span className='cute'>GRT</span>
						</span>
					</div>
					<div className='third-container-right-earning'>
						<span>Earn $3 GRT</span>
					</div>
				</div>

				<div className='third-container-list'>
					<div className='third-container-icon'>
						<img
							src='https://static-assets.coinbase.com/earn/campaigns/stellar/asset-logo.svg'
							alt='Stellar Lumens'
							className='third-container-icon-img'
						></img>
					</div>
					<div className='third-container-right-content'>
						<span className='cutie'>
							Stellar Lumens <span className='cute'>XLM</span>
						</span>
					</div>
					<div className='third-container-right-earning'>
						<span>Earn $3 XLM</span>
					</div>
				</div>

				<span className='third-container-right-more'> View more {'>'} </span>
			</div>
		</div>
	);
};

export default ThirdPart;
