import {Table} from "antd";
import {useEffect, useState} from "react";
import {Transaction, useHistory} from "../hooks/useHistory";

export type Props = {
  chainId: number;
  address: string;
}

const columns = [
  {
    title: 'Hash',
    dataIndex: 'hash',
    key: 'hash',
  },
  {
    title: 'From',
    dataIndex: 'from',
    key: 'from',
  },
  {
    title: 'To',
    dataIndex: 'to',
    key: 'to',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Risk',
    dataIndex: 'risk',
    key: 'risk',
  },
]

export const TheHistory = ({chainId, address}: Props) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const history = useHistory();

  useEffect(() => {
    history.getHistory(chainId, address)
      .then((txns) => setTransactions(txns));
  }, [transactions])

  return <div>
    <Table columns={columns} dataSource={transactions} />
  </div>
}