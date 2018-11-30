import React from 'react'

const Coin = ({ coin }) =>
  <ul>
    <li className="symbol">{coin.symbol}</li>
    <li>{coin.cap}</li>
    <li>{coin.coinInfo.price}</li>
    <li>{coin.coinInfo.coinheat}</li>
    <li>{coin.coinInfo.amountInPounds}</li>
  </ul>;

export default Coin;
