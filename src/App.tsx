/*
 * @Name         :
 * @Version      : 1.0.1
 * @Author       : zzz
 * @Date         : 2023-03-29 16:12:16
 * @LastEditors  : zzz
 * @LastEditTime : 2023-03-30 15:12:25
 */
// import { useState } from "react";
import { Layout } from "@arco-design/web-react";
import classes from "./App.module.css";
import HomeSider from "./views/HomeSider";

const Sider = Layout.Sider;
const Content = Layout.Content;

function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider className={classes.sider} width={220}>
        <HomeSider />
      </Sider>
      <Content>111</Content>
    </Layout>
  );
}

export default App;
