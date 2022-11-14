const BASE_URL = 'https://api1.binance.com'
const ORDER_BOOK_API = '/api/v3/depth'
const KLINE_API = '/api/v3/klines'
const axios = require('axios')
async function main() {
    try {
        const data = await axios({
            url: BASE_URL + KLINE_API,
            params: {
                symbol: 'BTCUSDT',
                interval: '1d',
                limit: 5
            }
        }) 

        data.data.forEach(e => {
            let date = new Date(e[6])
            let total = Number(e[5])
            let buy = Number(e[9])
            let sell = Number(e[5]) - Number(e[9])
            console.log(
            "Date:", `${date.getFullYear()}-${date.getMonth()+1}-${date.getUTCDate()}`,
            "Vol: ", total, 
            "Buy Vol: ", (buy*100)/total, 
            "Sell Vol:", (sell*100)/total,
            "BUY-SELL:", Number(e[9]) - sell
            );
        });
    } catch (err) {
        console.log(err);
    }
}

main()