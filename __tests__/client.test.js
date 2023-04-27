import OKBChainClient from "../src"
import * as crypto from "../src/crypto"



// const mnemonic = "total lottery arena when pudding best candy until army spoil drill pool"
// const privateKey_996 = "29892b64003fc5c8c89dc795a2ae82aa84353bb4352f28707c2ed32aa1011884"
// const privateKey = "828e61f969a7369f3340b07dd2080740d8445d7f802899ddacf9bc4db8608997"
// const from_996 = "ex1jjvpmgwwgs99nhlje3aag0lackunqgj7pcgnd4"
// const from = "ex1ya7dn2rr8nx07tx9ksq8gvz5utvarrh0knjnjn"

const serverUrl = "https://okbtestrpc.okbchain.org"
const toAddress = "ex1ya7dn2rr8nx07tx9ksq8gvz5utvarrh0knjnjn"
const chainId = "okbchaintest-195"
const baseCoin = "okb"
const testCoin = "xxb-781"
const testProduct = testCoin + "_" + baseCoin
const testPoolName = "aaa-882_okb"


const mnemonic = "bamboo dismiss pitch mass strategy advice example critic vapor series simple kitten"
const privateKey = "828e61f969a7369f3340b07dd2080740d8445d7f802899ddacf9bc4db8608997"
const from = "ex1vegcudd5ypa6j025w4tf6hspt0vr27ty5sy3l9"


describe("OKBChainClient test", async () => {


  it("get balance", async () => {
    const client = new OKBChainClient(serverUrl, {
      chainId: chainId,
      relativePath: "/v1",
      isMainnet: false
    })
    const privateKey = crypto.getPrivateKeyFromMnemonic(mnemonic, '60')
    await client.setAccountInfo(privateKey)
    const res = await client.getBalance(from)
    console.log(res)
    expect(res.length).toBeGreaterThanOrEqual(0)
  })



  it("send sendTransaction", async () => {
    jest.setTimeout(10000)
    const client = new OKBChainClient(serverUrl, {
      chainId: chainId,
      relativePath: "/v1",
      isMainnet: false
    })
    const privateKey = crypto.getPrivateKeyFromMnemonic(mnemonic, '118')
    await client.setAccountInfo(privateKey)
    //console.log(client)
    const addr = crypto.getAddressFromPrivateKey(client.privateKey)
    console.log(addr)
    const account = await client.getAccount(addr)
    const sequence = parseInt((await client.getSequenceNumberFromAccountInfo(account)))
    // console.log(account, sequence)
    const res = await client.sendSendTransaction(toAddress, "1.00000000", baseCoin, "hello world", sequence)
    console.log(JSON.stringify(res))
    // expect(res.status).toBe(200)
  })



  it("send sendTransaction on dev", async () => {
    jest.setTimeout(10000)
    const client = new OKBChainClient("http://127.0.0.1:36659", {
      chainId: "okbchain-101",
      relativePath: "/v1",
      isMainnet: false
    })
    const privateKey = crypto.getPrivateKeyFromMnemonic("giggle sibling fun arrow elevator spoon blood grocery laugh tortoise culture tool", '60')
    await client.setAccountInfo(privateKey)
    //console.log(client)
    const addr = crypto.getAddressFromPrivateKey(client.privateKey)
    const account = await client.getAccount(addr)
    const sequence = parseInt((await client.getSequenceNumberFromAccountInfo(account)))
    // console.log(account, sequence)
    const res = await client.sendSendTransaction(toAddress, "100", "okb", "hello world", sequence)
    console.log(JSON.stringify(res))
    // expect(res.status).toBe(200)
  })

  it("send placeOrderTransaction,cancelOrderTransaction", async () => {
    jest.setTimeout(20000)
    const symbol = testProduct
    const client = new OKBChainClient(serverUrl, {
      chainId: chainId
    })
    const privateKey = crypto.getPrivateKeyFromMnemonic(mnemonic)
    await client.setAccountInfo(privateKey)
    //console.log(client)
    const addr = crypto.getAddressFromPrivateKey(client.privateKey)
    //console.log(addr)
    const account = await client.getAccount(addr)
    const sequence = parseInt((await client.getSequenceNumberFromAccountInfo(account)))

    const res1 = await client.sendPlaceOrderTransaction(symbol, "BUY", "1.00000000", "1.10000000", "",sequence)
    console.log(JSON.stringify(res1))
    expect(res1.status).toBe(200)

    var patt = /ID[0-9]*-[0-9]*/
    const orderId = patt.exec(JSON.stringify(res1))[0].toString()
    //const orderId = res1.result.tags[1].value
    console.log(orderId)
    const res2 = await client.sendCancelOrderTransaction(orderId, "",sequence + 1)
    console.log(JSON.stringify(res2))
    expect(res2.status).toBe(200)

  })

   async function  prepareAccount() {
     const client = new OKBChainClient(serverUrl, {
       chainId: chainId
     })
    const privateKey = crypto.getPrivateKeyFromMnemonic(mnemonic)
    await client.setAccountInfo(privateKey)
    const addr = crypto.getAddressFromPrivateKey(client.privateKey)
    const account = await client.getAccount(addr)
    const sequence = parseInt((await client.getSequenceNumberFromAccountInfo(account)))
     return {
       okblient:client,
       sequence:sequence
     }
  }

  it("send sendTokenIssueTransaction", async () => {
    jest.setTimeout(10000)
    const data = await prepareAccount()
    const res = await data.okblient.sendTokenIssueTransaction("aa", "aa11", "10000.00000000", true, '', 'test')
    console.log(JSON.stringify(res))
    expect(res.status).toBe(200)
  })
  it("send sendTokenBurnTransaction", async () => {
    jest.setTimeout(10000)
    const data = await prepareAccount()
    const res = await data.okblient.sendTokenBurnTransaction("aa", "100.00000000", "burn")
    console.log(JSON.stringify(res))
    expect(res.status).toBe(200)
  })
  it("send sendTokenMintTransaction", async () => {
    jest.setTimeout(10000)
    const data = await prepareAccount()
    const res = await data.okblient.sendTokenMintTransaction("aa", "200.00000000", "mint")
    console.log(JSON.stringify(res))
    expect(res.status).toBe(200)
  })


  it("send sendRegisterDexOperatorTransaction", async () => {
    jest.setTimeout(10000)
    const data = await prepareAccount()
    const res = await data.okblient.sendRegisterDexOperatorTransaction("http://test.json", "ex1ya7dn2rr8nx07tx9ksq8gvz5utvarrh0knjnjn", "add deposit", data.sequence)
    console.log(JSON.stringify(res))
    expect(res.status).toBe(200)
  })

  it("send sendListTokenPairTransaction", async () => {
    jest.setTimeout(10000)
    const data = await prepareAccount()
    const res = await data.okblient.sendListTokenPairTransaction("tbtc-edc", "tusdk-d42","0.01000000", "list tokenpair", data.sequence)
    console.log(JSON.stringify(res))
    expect(res.status).toBe(200)
  })

  it("send sendAddProductDepositTransaction", async () => {
    jest.setTimeout(10000)
    const data = await prepareAccount()
    const res = await data.okblient.sendAddProductDepositTransaction("50.00000000", "tbtc-edc_tusdk-d42", "add deposit", data.sequence)
    console.log(JSON.stringify(res))
    expect(res.status).toBe(200)
  })

  it("send sendWithdrawProductDepositTransaction", async () => {
    jest.setTimeout(10000)
    const data = await prepareAccount()
    const res = await data.okblient.sendWithdrawProductDepositTransaction("40.00000000", "tbtc-edc_tusdk-d42", "withdraw deposit", data.sequence)
    console.log(JSON.stringify(res))
    expect(res.status).toBe(200)
  })

  // ammswap
  it("send AddLiquidityTransaction", async () => {
    jest.setTimeout(10000)
    const data = await prepareAccount()
    const res = await data.okblient.sendAddLiquidityTransaction("0.01001000", "100.00000000", "eth", "200.00000000", 'okb', "1619677667", 'AddLiquidityTransaction', data.sequence)
    console.log(JSON.stringify(res))
    expect(res.status).toBe(200)
  })
  it("send RemoveLiquidityTransaction", async () => {
    jest.setTimeout(10000)
    const data = await prepareAccount()
    const res = await data.okblient.sendRemoveLiquidityTransaction("0.01001000", "50.00000000", "eth", "100.00000000", 'okb', "1619677667", 'RemoveLiquidityTransaction', data.sequence)
    console.log(JSON.stringify(res))
    expect(res.status).toBe(200)
  })
  it("send CreateExchangeTransaction", async () => {
    jest.setTimeout(10000)
    const data = await prepareAccount()
    const res = await data.okblient.sendCreateExchangeTransaction("eth", "okb", "CreateExchangeTransaction", data.sequence)
    console.log(JSON.stringify(res))
    expect(res.status).toBe(200)
  })
  it("send SwapTokenTransaction", async () => {
    jest.setTimeout(10000)
    const data = await prepareAccount()
    const res = await data.okblient.sendSwapTokenTransaction("50.00000000", "aa11", "10.00000000", "okb", "1612781334", toAddress, '', data.sequence)
    console.log(JSON.stringify(res))
    expect(res.status).toBe(200)
  })

  // farm
  it("send sendFarmCreatePoolTransaction", async () => {
    jest.setTimeout(10000)
    const client = new OKBChainClient(serverUrl, {
      chainId: chainId
    })
    // const privateKey = crypto.getPrivateKeyFromMnemonic(mnemonic)
    await client.setAccountInfo(privateKey)
    //console.log(client)
    const addr = crypto.getAddressFromPrivateKey(client.privateKey)
    const account = await client.getAccount(addr)
    const sequence = parseInt((await client.getSequenceNumberFromAccountInfo(account)))
    const res = await client.sendFarmCreatePoolTransaction(testPoolName, baseCoin, 15, testCoin, "hello world", sequence)
    console.log(JSON.stringify(res))
    // expect(res.status).toBe(200)
  })

  it("send sendFarmDestroyPoolTransaction", async () => {
    jest.setTimeout(10000)
    const client = new OKBChainClient(serverUrl, {
      chainId: chainId
    })
    // const privateKey = crypto.getPrivateKeyFromMnemonic(mnemonic)
    await client.setAccountInfo(privateKey)
    //console.log(client)
    const addr = crypto.getAddressFromPrivateKey(client.privateKey)
    const account = await client.getAccount(addr)
    const sequence = parseInt((await client.getSequenceNumberFromAccountInfo(account)))
    const res = await client.sendFarmDestroyPoolTransaction(testPoolName, "hello world", sequence)
    console.log(JSON.stringify(res))
    // expect(res.status).toBe(200)
  })

  it("send sendFarmProvideTransaction", async () => {
    jest.setTimeout(10000)
    const client = new OKBChainClient(serverUrl, {
      chainId: chainId
    })
    // const privateKey = crypto.getPrivateKeyFromMnemonic(mnemonic)
    await client.setAccountInfo(privateKey)
    //console.log(client)
    const addr = crypto.getAddressFromPrivateKey(client.privateKey)
    const account = await client.getAccount(addr)
    const sequence = parseInt((await client.getSequenceNumberFromAccountInfo(account)))
    const res = await client.sendFarmProvideTransaction(testPoolName, testCoin, 100, 2, "11450", "hello world", sequence)
    console.log(JSON.stringify(res))
    // expect(res.status).toBe(200)
  })

  it("send sendFarmLockTransaction", async () => {
    jest.setTimeout(10000)
    const client = new OKBChainClient(serverUrl, {
      chainId: chainId
    })
    // const privateKey = crypto.getPrivateKeyFromMnemonic(mnemonic)
    await client.setAccountInfo(privateKey)
    //console.log(client)
    const addr = crypto.getAddressFromPrivateKey(client.privateKey)
    const account = await client.getAccount(addr)
    const sequence = parseInt((await client.getSequenceNumberFromAccountInfo(account)))
    const res = await client.sendFarmLockTransaction(testPoolName, baseCoin, 1000, "hello world", sequence)
    console.log(JSON.stringify(res))
    // expect(res.status).toBe(200)
  })

  it("send sendFarmUnLockTransaction", async () => {
    jest.setTimeout(10000)
    const client = new OKBChainClient(serverUrl, {
      chainId: chainId
    })
    // const privateKey = crypto.getPrivateKeyFromMnemonic(mnemonic)
    await client.setAccountInfo(privateKey)
    //console.log(client)
    const addr = crypto.getAddressFromPrivateKey(client.privateKey)
    const account = await client.getAccount(addr)
    const sequence = parseInt((await client.getSequenceNumberFromAccountInfo(account)))
    const res = await client.sendFarmUnLockTransaction(testPoolName, baseCoin, 500, "hello world", sequence)
    console.log(JSON.stringify(res))
    // expect(res.status).toBe(200)
  })

  it("send sendFarmClaimTransaction", async () => {
    jest.setTimeout(10000)
    const client = new OKBChainClient(serverUrl, {
      chainId: chainId
    })
    // const privateKey = crypto.getPrivateKeyFromMnemonic(mnemonic)
    await client.setAccountInfo(privateKey)
    //console.log(client)
    const addr = crypto.getAddressFromPrivateKey(client.privateKey)
    const account = await client.getAccount(addr)
    const sequence = parseInt((await client.getSequenceNumberFromAccountInfo(account)))
    const res = await client.sendFarmClaimTransaction(testPoolName , "hello world", sequence)
    console.log(JSON.stringify(res))
    // expect(res.status).toBe(200)
  })

})
