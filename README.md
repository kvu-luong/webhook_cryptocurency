# I. Setup
After clone project
```bash
	npm install
```
to run project
```bash
	npm start
```
[Reference](https://www.sipios.com/blog-tech/webhook-example-how-to-build-a-chatbot-from-scratch)
[Api](https://min-api.cryptocompare.com/documentation?api_key=2854a5c3399c288c9183d204216c9c5d706e7d55bb64cd5a67eda10db684a574)
[Winston](https://github.com/winstonjs/winston)

# II. Workflow
1. Create post route to listening event of webhook
```bash
let webhook = require("./webhook");
app.post('/webhook', webhook);
```
2. In webhook/index.js
Handle request and update data to response with function ```requestHandler```

In function ```requestHandler``` call to function handle each action of webhook. In this example, we will handle action ```fetchPriceCryptoCurrency```.
```bash
let coreFetchPriceCryptoCurrency = require('./handlers/core/fetchPriceCryptoCurrency.js');

let handlers = {
	'fetchPriceCryptoCurrency': coreFetchPriceCryptoCurrency
}
```
Sample input:
```bash
{
	"action": "fetchPriceCryptoCurrency",
	"parameters": {
		"symbol": "BTC"
	}
}
```
