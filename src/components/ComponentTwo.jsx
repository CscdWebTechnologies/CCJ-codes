import React from 'react';
import './style.css';

const SecondPart = () => {
	return (
		<div style={{ position: 'relative', marginTop: '50px', marginBottom: '50px' }}>
			<section className='second-part-section'>
				<div className='second-part-container'>
					<table className='second-part-table'>
						<colgroup>
							<col style={{ width: '32px' }} />
						</colgroup>
						<tbody className='second-part-tbody'>
							<tr className='second-part-tr' data-element-handle='asset-table-row' data-slug='bitcoin'>
								<td className='second-part-td'>
									<div className='second-part-td-div'>
										<picture className='second-part-picture'>
											<source
												srcset='https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png'
												type='image/webp'
												className='second-part-source'
											/>
											<img
												src='https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png'
												alt='Bitcoin logo'
												aria-label='Bitcoin logo'
												loading='lazy'
												height='36'
												width='36'
												className='second-part-img'
											/>
										</picture>
										<div className='second-part-container-content'>
											<h4 className='second-part-container-content-h4'>Bitcoin</h4>
											<h4 className='second-part-container-content-h3'>BTC</h4>
										</div>
									</div>
								</td>
								<td className='second-part-container-content-second-td'>
									<div className='second-part-container-content-second-td-div'>
										<h4 className='second-part-container-content-second-td-h4'>GHS&nbsp;280,150.35</h4>
										<h4 className='second-part-container-content-second-td-h3'>-5.06%</h4>
									</div>
								</td>
							</tr>

							<tr className='second-part-tr' data-element-handle='asset-table-row' data-slug='ethereum'>
								<td className='second-part-td'>
									<div className='second-part-td-div'>
										<picture className='second-part-picture'>
											<source
												srcset='https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png'
												type='image/webp'
												className='second-part-source'
											/>
											<img
												src='https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png'
												alt='Ethereum logo'
												aria-label='Ethereum logo'
												loading='lazy'
												height='36'
												width='36'
												className='second-part-img'
											/>
										</picture>
										<div className='second-part-container-content'>
											<h4 className='second-part-container-content-h4'>Ethereum</h4>
											<h4 className='second-part-container-content-h3'>ETH</h4>
										</div>
									</div>
								</td>
								<td className='second-part-container-content-second-td'>
									<div className='second-part-container-content-second-td-div'>
										<h4 className='second-part-container-content-second-td-h4'>GHS&nbsp;22,330.67</h4>
										<h4 className='second-part-container-content-second-td-h3'>-3.70%</h4>
									</div>
								</td>
							</tr>

							<tr className='second-part-tr' data-element-handle='asset-table-row' data-slug='bitcoin-cash'>
								<td className='second-part-td'>
									<div className='second-part-td-div'>
										<picture className='second-part-picture'>
											<source
												srcset='https://dynamic-assets.coinbase.com/93a4303d1b0410b79bb1feac01020e4e7bdf8e6ece68282d0af2c7d0b481c5f5c44c0cec1d7071ae8f84674dbd139e290d50a038a6a4c1bbc856ec0871b5f3e2/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png'
												type='image/webp'
												className='second-part-source'
											/>
											<img
												src='https://dynamic-assets.coinbase.com/93a4303d1b0410b79bb1feac01020e4e7bdf8e6ece68282d0af2c7d0b481c5f5c44c0cec1d7071ae8f84674dbd139e290d50a038a6a4c1bbc856ec0871b5f3e2/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png'
												alt='Bitcoin Cash logo'
												aria-label='Bitcoin Cash logo'
												loading='lazy'
												height='36'
												width='36'
												className='second-part-img'
											/>
										</picture>
										<div className='second-part-container-content'>
											<h4 className='second-part-container-content-h4'>Bitcoin Cash</h4>
											<h4 className='second-part-container-content-h3'>BCH</h4>
										</div>
									</div>
								</td>
								<td className='second-part-container-content-second-td'>
									<div className='second-part-container-content-second-td-div'>
										<h4 className='second-part-container-content-second-td-h4'>GHS&nbsp;7,097.00</h4>
										<h4 className='second-part-container-content-second-td-h3'>-6.82%</h4>
									</div>
								</td>
							</tr>

							<tr className='second-part-tr' data-element-handle='asset-table-row' data-slug='litecoin'>
								<td className='second-part-td'>
									<div className='second-part-td-div'>
										<picture className='second-part-picture'>
											<source
												srcset='https://dynamic-assets.coinbase.com/f018870b721574ef7f269b9fd91b36042dc05ebed4ae9dcdc340a1bae5b359e8760a8c224bc99466db704d10a3e23cf1f4cd1ff6f647340c4c9c899a9e6595cd/asset_icons/984a4fe2ba5b2c325c06e4c2f3ba3f1c1fef1f157edb3b8ebbfe234340a157a5.png'
												type='image/webp'
												className='second-part-source'
											/>
											<img
												src='https://dynamic-assets.coinbase.com/f018870b721574ef7f269b9fd91b36042dc05ebed4ae9dcdc340a1bae5b359e8760a8c224bc99466db704d10a3e23cf1f4cd1ff6f647340c4c9c899a9e6595cd/asset_icons/984a4fe2ba5b2c325c06e4c2f3ba3f1c1fef1f157edb3b8ebbfe234340a157a5.png'
												alt='Litecoin logo'
												aria-label='Litecoin logo'
												loading='lazy'
												height='36'
												width='36'
												className='second-part-img'
											/>
										</picture>
										<div className='second-part-container-content'>
											<h4 className='second-part-container-content-h4'>Litecoin</h4>
											<h4 className='second-part-container-content-h3'>LTC</h4>
										</div>
									</div>
								</td>
								<td className='second-part-container-content-second-td'>
									<div className='second-part-container-content-second-td-div'>
										<h4 className='second-part-container-content-second-td-h4'>GHS&nbsp;1,790.26</h4>
										<h4 className='second-part-container-content-second-td-h3'>-5.80%</h4>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</div>
	);
};

export default SecondPart;
