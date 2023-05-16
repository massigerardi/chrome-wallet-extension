import {Table} from "antd";
import {useEffect, useState} from "react";
import {Balance, useBalance} from "../hooks/useBalance";
import {Props} from "./History";

const columns = [
  {
    title: 'Token',
    dataIndex: 'token',
    key: 'token',
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
]

export const TheBalance = ({chainId, address}: Props) => {
  const [balances, setBalances] = useState<Balance[]>([])

  const balance = useBalance();

  useEffect(() => {
    balance.getBalance(address)
      .then((b) => setBalances(b));
  }, [balances])

  return <div>
    <Table columns={columns} dataSource={balances} />
  </div>
}