<a name="module_client"></a>

## client

* [client](#module_client)
    * [.OKBChainClient](#module_client.OKBChainClient)
        * [new exports.OKBChainClient(url, config)](#new_module_client.OKBChainClient_new)
        * [.setMode(mode)](#module_client.OKBChainClient+setMode)
        * [.setChainId(id)](#module_client.OKBChainClient+setChainId)
        * [.setAddress(address)](#module_client.OKBChainClient+setAddress)
        * [.setAccountInfo(privateKey)](#module_client.OKBChainClient+setAccountInfo) ⇒ <code>OKBChainClient</code>
        * [.sendSendTransaction(to, amount, denom, memo, sequenceNumber)](#module_client.OKBChainClient+sendSendTransaction) ⇒ <code>Object</code>
        * [.sendCancelOrderTransaction(orderId, memo, sequenceNumber)](#module_client.OKBChainClient+sendCancelOrderTransaction) ⇒ <code>Object</code>
        * [.sendPlaceOrderTransaction(product, side, price, quantity, memo, sequence)](#module_client.OKBChainClient+sendPlaceOrderTransaction) ⇒ <code>Object</code>
        * [.buildTransaction(msg, signMsg, memo, fee, sequenceNumber)](#module_client.OKBChainClient+buildTransaction) ⇒ <code>Transaction</code>
        * [.sendTransaction(tx, mode)](#module_client.OKBChainClient+sendTransaction) ⇒ <code>Object</code>
        * [.getAccount(address)](#module_client.OKBChainClient+getAccount) ⇒ <code>Object</code>
        * [.getBalance(address)](#module_client.OKBChainClient+getBalance) ⇒ <code>Object</code>
        * [.getBalanceFromAccountInfo(accountInfo)](#module_client.OKBChainClient+getBalanceFromAccountInfo) ⇒ <code>Object</code>
        * [.getSequenceNumber(address)](#module_client.OKBChainClient+getSequenceNumber) ⇒ <code>Number</code>
        * [.getSequenceNumberFromAccountInfo(accountInfo)](#module_client.OKBChainClient+getSequenceNumberFromAccountInfo) ⇒ <code>Number</code>
        * [.getAccountNumberFromAccountInfo(accountInfo)](#module_client.OKBChainClient+getAccountNumberFromAccountInfo) ⇒ <code>Number</code>
        * [.sendTokenIssueTransaction(symbol, whole_name, total_supply, mintable, description, memo, sequenceNumber)](#module_client.OKBChainClient+sendTokenIssueTransaction) ⇒ <code>Object</code>
        * [.sendTokenBurnTransaction(token, amount, memo, sequenceNumber)](#module_client.OKBChainClient+sendTokenBurnTransaction) ⇒ <code>Object</code>
        * [.sendTokenMintTransaction(token, amount, memo, sequenceNumber)](#module_client.OKBChainClient+sendTokenMintTransaction) ⇒ <code>Object</code>
        * [.sendRegisterDexOperatorTransaction(website, handling_fee_address, memo, sequenceNumber)](#module_client.OKBChainClient+sendRegisterDexOperatorTransaction) ⇒ <code>Object</code>
        * [.sendListTokenPairTransaction(base_asset, quote_asset, init_price, memo, sequenceNumber)](#module_client.OKBChainClient+sendListTokenPairTransaction) ⇒ <code>Object</code>
        * [.sendAddProductDepositTransaction(amount, product, memo, sequenceNumber)](#module_client.OKBChainClient+sendAddProductDepositTransaction) ⇒ <code>Object</code>
        * [.sendWithdrawProductDepositTransaction(amount, product, memo, sequenceNumber)](#module_client.OKBChainClient+sendWithdrawProductDepositTransaction) ⇒ <code>Object</code>
        * [.sendAddLiquidityTransaction(min_liquidity, max_base_amount, base_token, quote_amount, quote_token, deadline, memo, sequenceNumber)](#module_client.OKBChainClient+sendAddLiquidityTransaction) ⇒ <code>Object</code>
        * [.sendRemoveLiquidityTransaction(liquidity, min_base_amount, base_token, min_quote_amount, quote_token, deadline, memo, sequenceNumber)](#module_client.OKBChainClient+sendRemoveLiquidityTransaction) ⇒ <code>Object</code>
        * [.sendCreateExchangeTransaction(Token0Name, Token1Name, memo, sequenceNumber)](#module_client.OKBChainClient+sendCreateExchangeTransaction) ⇒ <code>Object</code>
        * [.sendSwapTokenTransaction(sold_token_amount, sold_token, min_bought_token_amount, bought_token, deadline, recipient, memo, sequenceNumber)](#module_client.OKBChainClient+sendSwapTokenTransaction) ⇒ <code>Object</code>
        * [.sendFarmCreatePoolTransaction(pool_name, min_lock_denom, min_lock_amount, yield_symbol, memo, sequenceNumber)](#module_client.OKBChainClient+sendFarmCreatePoolTransaction) ⇒ <code>Object</code>
        * [.sendFarmDestroyPoolTransaction(pool_name, memo, sequenceNumber)](#module_client.OKBChainClient+sendFarmDestroyPoolTransaction) ⇒ <code>Object</code>
        * [.sendFarmProvideTransaction(pool_name, provide_denom, provide_amount, yielded_per_block, start_height, memo, sequenceNumber)](#module_client.OKBChainClient+sendFarmProvideTransaction) ⇒ <code>Object</code>
        * [.sendFarmLockTransaction(pool_name, lock_denom, lock_amount, memo, sequenceNumber)](#module_client.OKBChainClient+sendFarmLockTransaction) ⇒ <code>Object</code>
        * [.sendFarmUnLockTransaction(pool_name, unlock_denom, unlock_amount, memo, sequenceNumber)](#module_client.OKBChainClient+sendFarmUnLockTransaction) ⇒ <code>Object</code>
        * [.sendFarmClaimTransaction(pool_name, memo, sequenceNumber)](#module_client.OKBChainClient+sendFarmClaimTransaction) ⇒ <code>Object</code>
        * [.ibcTransfer(to, amount, denom, memo , sequenceNumber, isPrivatekeyOldAddress)](#module_client.OKBChainClient+ibcTransfer) ⇒  <code>  Object</code>

<a name="module_client.OKBChainClient"></a>

### client.OKBChainClient
The OKBChain client.

**Kind**: static class of [<code>client</code>](#module_client)  

* [.OKBChainClient](#module_client.OKBChainClient)
    * [new exports.OKBChainClient(url, config)](#new_module_client.OKBChainClient_new)
    * [.setMode(mode)](#module_client.OKBChainClient+setMode)
    * [.setChainId(id)](#module_client.OKBChainClient+setChainId)
    * [.setAddress(address)](#module_client.OKBChainClient+setAddress)
    * [.setAccountInfo(privateKey)](#module_client.OKBChainClient+setAccountInfo) ⇒ <code>OKBChainClient</code>
    * [.sendSendTransaction(to, amount, denom, memo, sequenceNumber)](#module_client.OKBChainClient+sendSendTransaction) ⇒ <code>Object</code>
    * [.sendCancelOrderTransaction(orderId, memo, sequenceNumber)](#module_client.OKBChainClient+sendCancelOrderTransaction) ⇒ <code>Object</code>
    * [.sendPlaceOrderTransaction(product, side, price, quantity, memo, sequence)](#module_client.OKBChainClient+sendPlaceOrderTransaction) ⇒ <code>Object</code>
    * [.buildTransaction(msg, signMsg, memo, fee, sequenceNumber)](#module_client.OKBChainClient+buildTransaction) ⇒ <code>Transaction</code>
    * [.sendTransaction(tx, mode)](#module_client.OKBChainClient+sendTransaction) ⇒ <code>Object</code>
    * [.getAccount(address)](#module_client.OKBChainClient+getAccount) ⇒ <code>Object</code>
    * [.getBalance(address)](#module_client.OKBChainClient+getBalance) ⇒ <code>Object</code>
    * [.getBalanceFromAccountInfo(accountInfo)](#module_client.OKBChainClient+getBalanceFromAccountInfo) ⇒ <code>Object</code>
    * [.getSequenceNumber(address)](#module_client.OKBChainClient+getSequenceNumber) ⇒ <code>Number</code>
    * [.getSequenceNumberFromAccountInfo(accountInfo)](#module_client.OKBChainClient+getSequenceNumberFromAccountInfo) ⇒ <code>Number</code>
    * [.getAccountNumberFromAccountInfo(accountInfo)](#module_client.OKBChainClient+getAccountNumberFromAccountInfo) ⇒ <code>Number</code>
    * [.sendTokenIssueTransaction(symbol, whole_name, total_supply, mintable, description, memo, sequenceNumber)](#module_client.OKBChainClient+sendTokenIssueTransaction) ⇒ <code>Object</code>
    * [.sendTokenBurnTransaction(token, amount, memo, sequenceNumber)](#module_client.OKBChainClient+sendTokenBurnTransaction) ⇒ <code>Object</code>
    * [.sendTokenMintTransaction(token, amount, memo, sequenceNumber)](#module_client.OKBChainClient+sendTokenMintTransaction) ⇒ <code>Object</code>
    * [.sendRegisterDexOperatorTransaction(website, handling_fee_address, memo, sequenceNumber)](#module_client.OKBChainClient+sendRegisterDexOperatorTransaction) ⇒ <code>Object</code>
    * [.sendListTokenPairTransaction(base_asset, quote_asset, init_price, memo, sequenceNumber)](#module_client.OKBChainClient+sendListTokenPairTransaction) ⇒ <code>Object</code>
    * [.sendAddProductDepositTransaction(amount, product, memo, sequenceNumber)](#module_client.OKBChainClient+sendAddProductDepositTransaction) ⇒ <code>Object</code>
    * [.sendWithdrawProductDepositTransaction(amount, product, memo, sequenceNumber)](#module_client.OKBChainClient+sendWithdrawProductDepositTransaction) ⇒ <code>Object</code>
    * [.sendAddLiquidityTransaction(min_liquidity, max_base_amount, base_token, quote_amount, quote_token, deadline, memo, sequenceNumber)](#module_client.OKBChainClient+sendAddLiquidityTransaction) ⇒ <code>Object</code>
    * [.sendRemoveLiquidityTransaction(liquidity, min_base_amount, base_token, min_quote_amount, quote_token, deadline, memo, sequenceNumber)](#module_client.OKBChainClient+sendRemoveLiquidityTransaction) ⇒ <code>Object</code>
    * [.sendCreateExchangeTransaction(Token0Name, Token1Name, memo, sequenceNumber)](#module_client.OKBChainClient+sendCreateExchangeTransaction) ⇒ <code>Object</code>
    * [.sendSwapTokenTransaction(sold_token_amount, sold_token, min_bought_token_amount, bought_token, deadline, recipient, memo, sequenceNumber)](#module_client.OKBChainClient+sendSwapTokenTransaction) ⇒ <code>Object</code>
    * [.sendFarmCreatePoolTransaction(pool_name, min_lock_denom, min_lock_amount, yield_symbol, memo, sequenceNumber)](#module_client.OKBChainClient+sendFarmCreatePoolTransaction) ⇒ <code>Object</code>
    * [.sendFarmDestroyPoolTransaction(pool_name, memo, sequenceNumber)](#module_client.OKBChainClient+sendFarmDestroyPoolTransaction) ⇒ <code>Object</code>
    * [.sendFarmProvideTransaction(pool_name, provide_denom, provide_amount, yielded_per_block, start_height, memo, sequenceNumber)](#module_client.OKBChainClient+sendFarmProvideTransaction) ⇒ <code>Object</code>
    * [.sendFarmLockTransaction(pool_name, lock_denom, lock_amount, memo, sequenceNumber)](#module_client.OKBChainClient+sendFarmLockTransaction) ⇒ <code>Object</code>
    * [.sendFarmUnLockTransaction(pool_name, unlock_denom, unlock_amount, memo, sequenceNumber)](#module_client.OKBChainClient+sendFarmUnLockTransaction) ⇒ <code>Object</code>
    * [.sendFarmClaimTransaction(pool_name, memo, sequenceNumber)](#module_client.OKBChainClient+sendFarmClaimTransaction) ⇒ <code>Object</code>
    [.ibcTransfer(receiver, token, memo, sourceChannel, revisionNumber, revisionHeight, isPrivatekeyOldAddress)]((#module_client.OKBChainClient+ibcTransfer))⇒ <code>Object</code>



<a name="new_module_client.OKBChainClient_new"></a>

#### new exports.OKBChainClient(url, config)

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> |  |
| config | <code>Object</code> | {     chainId: "okbchain-196" (mainnet, default) / "okbchaintest-195" (testnet)     relativePath: "v1" (mainnet / testnet)     isMainnet: true (mainnet) / false (other, default)     signer: external signer object, Object / null (default) } |

<a name="module_client.OKBChainClient+setMode"></a>

#### OKBChainClient.setMode(mode)
set the mode when send transaction

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  

| Param | Type | Description |
| --- | --- | --- |
| mode | <code>string</code> | block|sync|async |

<a name="module_client.OKBChainClient+setChainId"></a>

#### OKBChainClient.setChainId(id)
set the chainId when send transaction

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="module_client.OKBChainClient+setAddress"></a>

#### OKBChainClient.setAddress(address)
set the address

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  

| Param | Type |
| --- | --- |
| address | <code>string</code> | 

<a name="module_client.OKBChainClient+setAccountInfo"></a>

#### OKBChainClient.setAccountInfo(privateKey) ⇒ <code>OKBChainClient</code>
**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  

| Param | Type |
| --- | --- |
| privateKey | <code>string</code> | 

<a name="module_client.OKBChainClient+sendSendTransaction"></a>

#### OKBChainClient.sendSendTransaction(to, amount, denom, memo, sequenceNumber) ⇒ <code>Object</code>
Send SendTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| to | <code>String</code> |  | To Address |
| amount | <code>Number</code> |  | Coin Quantity |
| denom | <code>String</code> |  | Coin Name |
| memo | <code>String</code> |  |  |
| sequenceNumber | <code>Number</code> | <code></code> |  |

<a name="module_client.OKBChainClient+sendCancelOrderTransaction"></a>

#### OKBChainClient.sendCancelOrderTransaction(orderId, memo, sequenceNumber) ⇒ <code>Object</code>
Send CancelOrderTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| orderId | <code>String</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendPlaceOrderTransaction"></a>

#### OKBChainClient.sendPlaceOrderTransaction(product, side, price, quantity, memo, sequence) ⇒ <code>Object</code>
Send PlaceOrderTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| product | <code>String</code> |  | 
| side | <code>String</code> |  | 
| price | <code>Number</code> |  | 
| quantity | <code>Number</code> |  | 
| memo | <code>Number</code> |  | 
| sequence | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+buildTransaction"></a>

#### OKBChainClient.buildTransaction(msg, signMsg, memo, fee, sequenceNumber) ⇒ <code>Transaction</code>
Build Transaction for sending to okbchain.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Transaction</code> - Transaction object  

| Param | Type | Default |
| --- | --- | --- |
| msg | <code>Object</code> |  | 
| signMsg | <code>Object</code> |  | 
| memo | <code>String</code> |  | 
| fee | <code>String</code> | <code></code> | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendTransaction"></a>

#### OKBChainClient.sendTransaction(tx, mode) ⇒ <code>Object</code>
send transaction to OKBChain.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response (success or fail)  

| Param | Type | Description |
| --- | --- | --- |
| tx | <code>signedTx</code> | signed Transaction object |
| mode | <code>Boolean</code> | use synchronous mode, optional |

<a name="module_client.OKBChainClient+getAccount"></a>

#### OKBChainClient.getAccount(address) ⇒ <code>Object</code>
get account

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - result  

| Param | Type |
| --- | --- |
| address | <code>String</code> | 

<a name="module_client.OKBChainClient+getBalance"></a>

#### OKBChainClient.getBalance(address) ⇒ <code>Object</code>
get balances from OKBChain

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - result  

| Param | Type |
| --- | --- |
| address | <code>String</code> | 

<a name="module_client.OKBChainClient+getBalanceFromAccountInfo"></a>

#### OKBChainClient.getBalanceFromAccountInfo(accountInfo) ⇒ <code>Object</code>
get balances from accountInfo Object

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - result  

| Param | Type | Description |
| --- | --- | --- |
| accountInfo | <code>Object</code> | optional address |

<a name="module_client.OKBChainClient+getSequenceNumber"></a>

#### OKBChainClient.getSequenceNumber(address) ⇒ <code>Number</code>
get SequenceNumber from OKBChain

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Number</code> - sequenceNumber  

| Param | Type |
| --- | --- |
| address | <code>String</code> | 

<a name="module_client.OKBChainClient+getSequenceNumberFromAccountInfo"></a>

#### OKBChainClient.getSequenceNumberFromAccountInfo(accountInfo) ⇒ <code>Number</code>
get SequenceNumber from accountInfo Object

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Number</code> - sequenceNumber  

| Param | Type |
| --- | --- |
| accountInfo | <code>String</code> | 

<a name="module_client.OKBChainClient+getAccountNumberFromAccountInfo"></a>

#### OKBChainClient.getAccountNumberFromAccountInfo(accountInfo) ⇒ <code>Number</code>
get accountNumber from accountInfo Object

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Number</code> - accountNumber  

| Param | Type |
| --- | --- |
| accountInfo | <code>String</code> | 

<a name="module_client.OKBChainClient+sendTokenIssueTransaction"></a>

#### OKBChainClient.sendTokenIssueTransaction(symbol, whole_name, total_supply, mintable, description, memo, sequenceNumber) ⇒ <code>Object</code>
Send TokenIssueTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| symbol | <code>String</code> |  | 
| whole_name | <code>String</code> |  | 
| total_supply | <code>String</code> |  | 
| mintable | <code>Boolean</code> | <code>false</code> | 
| description | <code>String</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendTokenBurnTransaction"></a>

#### OKBChainClient.sendTokenBurnTransaction(token, amount, memo, sequenceNumber) ⇒ <code>Object</code>
Send TokenBurnTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| token | <code>String</code> |  | 
| amount | <code>String</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendTokenMintTransaction"></a>

#### OKBChainClient.sendTokenMintTransaction(token, amount, memo, sequenceNumber) ⇒ <code>Object</code>
Send TokenMintTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| token | <code>String</code> |  | 
| amount | <code>String</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendRegisterDexOperatorTransaction"></a>

#### OKBChainClient.sendRegisterDexOperatorTransaction(website, handling_fee_address, memo, sequenceNumber) ⇒ <code>Object</code>
Send RegisterDexOperatorTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| website | <code>String</code> |  | 
| handling_fee_address | <code>String</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendListTokenPairTransaction"></a>

#### OKBChainClient.sendListTokenPairTransaction(base_asset, quote_asset, init_price, memo, sequenceNumber) ⇒ <code>Object</code>
Send ListTokenPairTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| base_asset | <code>String</code> |  | 
| quote_asset | <code>String</code> |  | 
| init_price | <code>String</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendAddProductDepositTransaction"></a>

#### OKBChainClient.sendAddProductDepositTransaction(amount, product, memo, sequenceNumber) ⇒ <code>Object</code>
Send AddProductDepositTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| amount | <code>String</code> |  | 
| product | <code>String</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendWithdrawProductDepositTransaction"></a>

#### OKBChainClient.sendWithdrawProductDepositTransaction(amount, product, memo, sequenceNumber) ⇒ <code>Object</code>
Send WithdrawProductDepositTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| amount | <code>String</code> |  | 
| product | <code>String</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendAddLiquidityTransaction"></a>

#### OKBChainClient.sendAddLiquidityTransaction(min_liquidity, max_base_amount, base_token, quote_amount, quote_token, deadline, memo, sequenceNumber) ⇒ <code>Object</code>
Send AddLiquidityTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| min_liquidity | <code>Number</code> |  | 
| max_base_amount | <code>Number</code> |  | 
| base_token | <code>String</code> |  | 
| quote_amount | <code>Number</code> |  | 
| quote_token | <code>String</code> |  | 
| deadline | <code>String</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendRemoveLiquidityTransaction"></a>

#### OKBChainClient.sendRemoveLiquidityTransaction(liquidity, min_base_amount, base_token, min_quote_amount, quote_token, deadline, memo, sequenceNumber) ⇒ <code>Object</code>
Send RemoveLiquidityTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| liquidity | <code>Number</code> |  | 
| min_base_amount | <code>Number</code> |  | 
| base_token | <code>String</code> |  | 
| min_quote_amount | <code>Number</code> |  | 
| quote_token | <code>String</code> |  | 
| deadline | <code>String</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendCreateExchangeTransaction"></a>

#### OKBChainClient.sendCreateExchangeTransaction(Token0Name, Token1Name, memo, sequenceNumber) ⇒ <code>Object</code>
Send CreateExchangeTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| Token0Name | <code>String</code> |  | 
| Token1Name | <code>String</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendSwapTokenTransaction"></a>

#### OKBChainClient.sendSwapTokenTransaction(sold_token_amount, sold_token, min_bought_token_amount, bought_token, deadline, recipient, memo, sequenceNumber) ⇒ <code>Object</code>
Send SwapTokenTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| sold_token_amount | <code>Number</code> |  | 
| sold_token | <code>String</code> |  | 
| min_bought_token_amount | <code>Number</code> |  | 
| bought_token | <code>String</code> |  | 
| deadline | <code>String</code> |  | 
| recipient | <code>String</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendFarmCreatePoolTransaction"></a>

#### OKBChainClient.sendFarmCreatePoolTransaction(pool_name, min_lock_denom, min_lock_amount, yield_symbol, memo, sequenceNumber) ⇒ <code>Object</code>
Send FarmCreatePoolTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| pool_name | <code>String</code> |  | 
| min_lock_denom | <code>String</code> |  | 
| min_lock_amount | <code>Number</code> |  | 
| yield_symbol | <code>String</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendFarmDestroyPoolTransaction"></a>

#### OKBChainClient.sendFarmDestroyPoolTransaction(pool_name, memo, sequenceNumber) ⇒ <code>Object</code>
Send FarmDestroyPoolTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| pool_name | <code>String</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendFarmProvideTransaction"></a>

#### OKBChainClient.sendFarmProvideTransaction(pool_name, provide_denom, provide_amount, yielded_per_block, start_height, memo, sequenceNumber) ⇒ <code>Object</code>
Send FarmProvideTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| pool_name | <code>String</code> |  | 
| provide_denom | <code>String</code> |  | 
| provide_amount | <code>Number</code> |  | 
| yielded_per_block | <code>Number</code> |  | 
| start_height | <code>String</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendFarmLockTransaction"></a>

#### OKBChainClient.sendFarmLockTransaction(pool_name, lock_denom, lock_amount, memo, sequenceNumber) ⇒ <code>Object</code>
Send FarmLockTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| pool_name | <code>String</code> |  | 
| lock_denom | <code>String</code> |  | 
| lock_amount | <code>Number</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendFarmUnLockTransaction"></a>

#### OKBChainClient.sendFarmUnLockTransaction(pool_name, unlock_denom, unlock_amount, memo, sequenceNumber) ⇒ <code>Object</code>
Send FarmUnLockTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| pool_name | <code>String</code> |  | 
| unlock_denom | <code>String</code> |  | 
| unlock_amount | <code>Number</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 

<a name="module_client.OKBChainClient+sendFarmClaimTransaction"></a>

#### OKBChainClient.sendFarmClaimTransaction(pool_name, memo, sequenceNumber) ⇒ <code>Object</code>
Send FarmClaimTransaction.

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default |
| --- | --- | --- |
| pool_name | <code>String</code> |  | 
| memo | <code>String</code> |  | 
| sequenceNumber | <code>Number</code> | <code></code> | 
#### OKBChainClient.ibcTransfer(receiver, token, memo, sourceChannel, revisionNumber, revisionHeight, isPrivatekeyOldAddress)⇒ <code>Object</code>
ibcTransfer

**Kind**: instance method of [<code>OKBChainClient</code>](#module_client.OKBChainClient)  
**Returns**: <code>Object</code> - response  

| Param | Type | Default | Remark |
| --- | --- | --- | --- |
| receiver | <code>String</code> |  |  |
| Token | <code>String</code> |  |  |
| sourceChannel | <code>String</code> | <code></code> |  |
| revisionNumber | <code>String</code> |  | The target chain-id, like "okbchain-196", typing "100" |
| revisionHeight | <code>String</code> |  | Timeout Height |
| isPrivatekeyOldAddress | <code>Number</code> | 0 |  |
| memo | <code>String</code> |  |  |
|  |  |  |  |

