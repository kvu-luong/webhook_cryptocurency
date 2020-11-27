'use strict'

let coreFetchPriceCryptoCurrency = require('./handlers/core/fetchPriceCryptoCurrency.js');

let handlers = {
	'fetchPriceCryptoCurrency': coreFetchPriceCryptoCurrency
}

const interactionHandler = interaction => {
	let handler = handlers[interaction.action];
	if(handler) return handler(interaction);
	else return Promise.reject(new Error(`Unhandled action ${interaction.action}`))
}

const requestHandler = (req, res) => {
	let body = req.body;

	let interaction = {
		action: body.action,
		parameters: body.parameters,
		response: {}
	}

	interactionHandler(interaction)
	.then( ()=> {
		res.json(interaction.response);
	})
	.catch( e => {
		console.log(e);
		res.json(interaction.response);
	})
}

module.exports = requestHandler;