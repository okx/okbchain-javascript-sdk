import {OKBSecp256k1Wallet} from "../lib";
import * as crypto from "../src/crypto";
import {Buffer} from "buffer";


describe("okc wasm test", function () {
    it("test wallet", async () => {
        const mnemonic = "giggle sibling fun arrow elevator spoon blood grocery laugh tortoise culture tool"
        const privateKey = crypto.getPrivateKeyFromMnemonic(mnemonic, '60')
        console.log(privateKey)
        const wallet = await OKBSecp256k1Wallet.fromKey(privateKey)
        const accounts = await wallet.getAccounts()
        console.log(accounts[0]);
        expect(accounts[0].address).toBe("0x945cC9CFFe7E16040b3f3ad267BBBdcab13a9Ed0")
    })
})
