import {shorten} from "../utils";
import {useApi} from "./API";

export type Transaction = {
  hash: string,
  from: string,
  to: string,
  value: string
}

export const useHistory = () => {

  const api = useApi();
  const getHistory = async (chainId: number, address: string): Promise<Transaction[]> => {
    const url = `https://api.covalenthq.com/v1/${chainId}/address/${address}/transactions_v2/?page-size=10`;
    const response = await api.fetcher("GET", url);
    if (!response) return [];
    if (response.data && response.data.items)
      return response.data.items.map((it: any) => {
        return {
          hash: shorten(it.tx_hash),
          from: shorten(it.from_address),
          to: shorten(it.to_address),
          value: it.value,
          risk: 0
        } as Transaction;
      });
    return [];
  };

  return { getHistory }

};