import React from 'react'
import Coin from './Coin';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const COINS_QUERY = gql`
  {
    coins {
      symbol
      cap
      coinInfo {
        price
        coinheat
        amountInPounds
      }
    }
  }
  `;

const CoinList = () => (
  <Query query={COINS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return data.coins.map(coin => <Coin key={coin.symbol} coin={coin} />)
    }}
  </Query>
);

export default CoinList;
