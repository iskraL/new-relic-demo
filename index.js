require('newrelic');
const newrelic = require('newrelic');
const axios = require('axios');
const heapdump = require('heapdump');

async function execute() {
    const fn = async () => {
        for (let i = 0; i <= 1000; i++) {
            const requestOptions = {
                url: 'https://gorest.co.in/public-api/users',
                method: 'GET'
            };
            await axios.request(requestOptions);
            console.log(i);

        }
    };


    await newrelic.startBackgroundTransaction('transaction-name', async () => {
        await fn();
    });
}

execute()