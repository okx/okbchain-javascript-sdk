import "babel-polyfill"
import * as client from "./client"
import * as crypto from "./crypto"
import * as wallet from "./wallet"
import {OKBSecp256k1Wallet} from "./secp256k1/secp256k1wallet";

const { OKBChainClient }  = client
module.exports = OKBChainClient
module.exports.crypto = crypto;
module.exports.wallet = wallet;
module.exports.OKBSecp256k1Wallet = OKBSecp256k1Wallet


