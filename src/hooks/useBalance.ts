import {useApi} from "./API";

export type Balance = {
  token: string,
  balance: number
  value: string
}

export const useBalance = () => {

  const api = useApi();

  const getBalance = async (address: string) => {
    const url = `https://api.covalenthq.com/v1/eth-mainnet/address/${address}/balances_v2/`
    const response = await api.fetcher("GET", url);
    if (!response) return [];
    if (response.data && response.data.items)
      return response.data.items.map((it: any) => {
        return {
          token: it.contract_ticker_symbol,
          balance: it.balance,
          value: it.pretty_quote
        } as Balance;
      });
    return [];

  }

  return { getBalance }
}