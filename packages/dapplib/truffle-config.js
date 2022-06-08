require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift recipe sister punch hunt crew equal gasp'; 
let testAccounts = [
"0x9b101c6cb28e559b4a79e534979f77ee84666ef813595e95831fc8fc7fab9521",
"0x2c26e14328c1e663c8b01d5f6c75604ed0938fae6391903144d432925197ea69",
"0x68e73908e151ebfb63027a46db0627fe996b5a80a4a7f55d2d6c2a1fe12e3dda",
"0x9142d8edd6ddfaa54054eafe5992ed036b144aabca04228764af1259558ec024",
"0x2feb848f5bd1c85bf1980026a1928b2c298b3046cc4bdf620586e5570cdc565b",
"0x3b5d6434547ddefda2b80e4ec90f1b7a8ee983834c5e1634ff7855e930b6508c",
"0xca80b3344354fc13b1d283ae147ccb08d402c05b8bf60d39de6264c6017bc7be",
"0x489304c659e262bdc4e2f7bb015db972c5d82a6234e7b3b61c5b15d182c792ae",
"0xe48e1e4fd2d5db0654ab201aa78f510c9a7d0bde71402e1b59df0a5473db505e",
"0x8db31f87a559df8d30d2be437f0327d54b19486d45bfa468ec16dd69d027cac4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

