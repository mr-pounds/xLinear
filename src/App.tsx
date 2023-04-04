/*
 * @Name         :
 * @Version      : 1.0.1
 * @Author       : zzz
 * @Date         : 2023-03-29 16:12:16
 * @LastEditors  : zzz
 * @LastEditTime : 2023-03-31 21:57:18
 */
// import { useState } from "react";
import classes from "./App.module.css";
import { Container, Row, Col } from "@nextui-org/react";

function App() {
  return (
    <Container fluid className="m-0 p-0" style={{ height: "100vh" }}>
      <Row
        gap={1}
        fluid
        className={classes.viewContainer + " container "}
        style={{ height: "inherit" }}
      >
        <Col span={2}>Sider</Col>
        <Col span={12}>Content</Col>
      </Row>
    </Container>
  );
}

export default App;
