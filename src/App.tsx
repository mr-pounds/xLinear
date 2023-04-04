/*
 * @Name         :
 * @Version      : 1.0.1
 * @Author       : zzz
 * @Date         : 2023-03-29 16:12:16
 * @LastEditors  : zzz
 * @LastEditTime : 2023-04-04 18:08:13
 */
// import { useState } from "react";
import classes from "./App.module.css";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout style={{height:"100%"}}>
      <Sider>Sider</Sider>
        <Content>Content</Content>
    </Layout>
  );
}

export default App;
