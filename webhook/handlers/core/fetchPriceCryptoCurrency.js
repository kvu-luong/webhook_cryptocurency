'use strict'

let axios = require('axios');

const handler = (interaction) => {
	return new Promise( (resolve, reject) => {
		if(!interaction.parameters.hasOwnProperty('symbol')){
			reject(new Error('Missing symbol parameter for action fetchPriceCryptoCurrency'));
		}

		let symbol = interaction.parameters['symbol'];

		axios
		.get(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD,EUR`)
		.then(axiosResponse => {
			let prices = axiosResponse.data;
			console.log(prices);
			if(prices.Response && prices.response === 'Error'){
				interaction.response.followupEvent = {
					name: 'prices-not-found',
					data: {}
				}
			}else{
				interaction.response.followupEvent = {
					name: 'prices-found',
					data: {
						USD: prices.USD, 
						EUR: prices.EUR
					}
				}
			}
			resolve();
		})
		.catch( e => {
			reject(e);
		})
	})
}

module.exports = handler;