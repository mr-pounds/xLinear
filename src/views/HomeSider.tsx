/*
 * @Name         :
 * @Version      : 1.0.1
 * @Author       : zzz
 * @Date         : 2023-04-06 15:51:48
 * @LastEditors  : zzz
 * @LastEditTime : 2023-04-06 17:34:22
 */
import React from "react";
import { Layout, Button, Dropdown, Avatar, Col, Row } from "antd";
import type { MenuProps } from "antd";

const { Header, Content, Footer } = Layout;

const workspaceMenu: MenuProps["items"] = [
  {
    label: "740870608@qq.com",
    key: "account",
  },
  {
    type: "divider",
  },
  {
    label: "Workspace settings",
    key: "settings",
  },
  {
    label: "Create or join a workspace",
    key: "create",
  },
  {
    label: "Add an account",
    key: "addAccount",
  },
  {
    type: "divider",
  },
  {
    label: "Log out",
    key: "logout",
  },
];

export default function HomeSider() {
  return (
    <Layout className="flex h-full flex-col">
      <Header className="h-24 flex-initial bg-white pb-3 pl-4 pr-4 pt-3">
        <Row justify="start" align="top" gutter={8}>
          <Col span={20} className="h-8 leading-8">
            <Dropdown
              menu={{ items: workspaceMenu }}
              placement="bottomLeft"
              trigger={["click"]}
            >
              <Button
                type="text"
                className="w-40 border-0 pb-1.5 pl-2 pr-2 pt-1.5"
                icon={
                  <Avatar shape="square" size={18} className="relative -top-2">
                    ZH
                  </Avatar>
                }
              >
                <span className="ml-2 inline-block w-28 overflow-hidden">
                  zhengzhizhan-mes
                </span>
              </Button>
            </Dropdown>
          </Col>
          <Col span={4} className="h-8 leading-8">
            <Dropdown
              menu={{ items: workspaceMenu }}
              placement="bottomLeft"
              trigger={["click"]}
            >
              <Button
                type="text"
                className="border-0 pb-1.5 pl-2 pr-2 pt-1.5"
                icon={
                  <Avatar
                    shape="circle"
                    size={18}
                    className="relative -top-0.5"
                  >
                    郑
                  </Avatar>
                }
              ></Button>
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <Content className="flex-1">This is Content</Content>
      <Footer className="flex-initial">This is Footer</Footer>
    </Layout>
  );
}
