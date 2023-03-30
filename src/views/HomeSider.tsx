import React from "react";
import { Dropdown, Menu, Button, Avatar, Grid } from "@arco-design/web-react";
import classes from "./HomeSider.module.css";
import { IconPlus, IconDelete } from "@arco-design/web-react/icon";

const Row = Grid.Row;
const Col = Grid.Col;

const dropList = (
  <Menu>
    <Menu.Item key="1">Beijing</Menu.Item>
    <Menu.Item key="2">Shanghai</Menu.Item>
    <Menu.Item key="3">Guangzhou</Menu.Item>
  </Menu>
);

export default function HomeSider() {
  return (
    <div>
      <Row align="center" justify="start" className={classes.siderHeader}>
        <Col span={20} style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
          <Dropdown droplist={dropList} position="bl" trigger={"click"}>
            <Button
              type="text"
              className={classes.dropdownBtn}
              icon={
                <Avatar
                  size={18}
                  shape="square"
                  style={{
                    backgroundColor: "rgb(0, 156, 147)",
                    fontSize: "0.6875rem",
                  }}
                >
                  ZH
                </Avatar>
              }
            >
              <span
                style={{
                  marginLeft: "8px",
                  lineHeight: "normal",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  color: "rgb(60, 65, 73)",
                  fontWeight: "500",
                }}
              >
                zhengzhizhan-mes
              </span>
            </Button>
          </Dropdown>
        </Col>
        <Col span={4}>zzz</Col>
        <Col span={20}>New issue</Col>
        <Col span={4}>search</Col>
      </Row>
      <div className="cursor-default">Operate Bar</div>
    </div>
  );
}
