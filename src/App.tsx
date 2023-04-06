/*
 * @Name         :
 * @Version      : 1.0.1
 * @Author       : zzz
 * @Date         : 2023-03-29 16:12:16
 * @LastEditors  : zzz
 * @LastEditTime : 2023-04-06 16:02:13
 */
// import { useState } from "react";
import { Layout, ConfigProvider } from "antd";
import HomeSider from "./views/HomeSider";

const { Sider, Content } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "rgb(94, 15, 201)",
          fontSize: 13,
          borderRadius: 4,
          wireframe: false,
        },
      }}
    >
      <Layout style={{ height: "100%" }}>
        <Sider
          theme="light"
          width={220}
          className="border-r border-solid border-inherit"
        >
          <HomeSider />
        </Sider>
        <Content className="bg-white">Content</Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
