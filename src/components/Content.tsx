import {Tabs} from "antd";
import {TheBalance} from "./Balance";
import {TheHistory, Props} from "./History";

const { TabPane } = Tabs;
export const Content = ({chainId, address}: Props) => {
  return <>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Balance" key="1">
        <TheBalance chainId={chainId} address={address} />
      </TabPane>
      <TabPane tab="History" key="2">
        <TheHistory chainId={chainId} address={address} />
      </TabPane>
    </Tabs>

  </>
}