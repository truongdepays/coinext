var abi = require('./abis/abi.json');
var address = '0xc00e94cb662c3520282e6f5717214004a7f26888';
const Web3 = require('web3');
const web3 = new Web3('wss://mainnet.infura.io/ws/v3/e4e22cecbbfd4eb8b839a95b15ba526d');
const myContract = new web3.eth.Contract(abi, address);
web3.eth.getTransactionReceipt('0x3f34cbac4b6c5695f2feb83d632413f4969d2df550e9223c9427c4650776a949', (a, b) => {
    // console.log(web3.utils.toUtf8(b.input));
    for (const bs of b.logs) {
        
        try {
            bs.topics.forEach((v) => {
                console.log(v);
                const dstAddress = web3.eth.abi
                .decodeParameter('address', v)
                .toLowerCase();
                console.log(dstAddress);
            })
            
        } catch (err) {
            console.log(err);
        }
        result = web3.eth.abi.decodeParameter(
            'uint256',
            bs.data,
        );
    }
})
