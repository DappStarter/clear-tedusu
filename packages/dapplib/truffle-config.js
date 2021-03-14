require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom glimpse flame tone struggle crawl mushroom purpose inside light army gesture'; 
let testAccounts = [
"0x459066753d5d8f483163c8503def066e9a91c4170c0531e544bc7c75f357cf8d",
"0x41560969eb265ad0d3dec4ab467c0a2aacada99a9ba4808a0b2d7e411311d1cb",
"0xf515abda2b377940b40e96389e90fe8486fe29e87c6817cf9ea8d3ced33b4f9a",
"0x11a98be9ed04d1dc9bc9604ef792f9eb92eaf4f31d8d5fb5d3d43087877fcbcc",
"0x0dd982e3ed16762637bda65426c3634a4b5280493a5f320b4ed8d0218d408dbf",
"0x23e89d61f91c315fee01a062e2c40c34570b4d932959be435f0b41c9ec4c5507",
"0xaac6f1244b1043e270d8d77c35c55a1fea59fd3175dfdd9dd22a0d2aa3ae4f65",
"0x58819b9e681090af48981c582590e6e9a9b7c4bc979aad0151706394a492d462",
"0x4f14b8ade72a111049195fd7b577e4e7f1262620a7f1e149f69a93baf14c7314",
"0x6d4984c5d25efed763dae9081ca3d20699471a72b094375fcd031799d9f2ddb9"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

