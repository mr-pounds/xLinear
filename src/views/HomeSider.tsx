/*
 * @Name         :
 * @Version      : 1.0.1
 * @Author       : zzz
 * @Date         : 2023-04-06 15:51:48
 * @LastEditors  : zzz
 * @LastEditTime : 2023-04-06 22:40:30
 */
import { Layout, Button, Dropdown, Avatar, Col, Row } from "antd";
import type { MenuProps } from "antd";
import AccountAvatar from "../components/Avatars/AccountAvatar";
import WorkspaceAvatar from "../components/Avatars/WorkspaceAvatar";
import { EditOutlined, SearchOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const workspaceMenu: MenuProps["items"] = [
  {
    label: (
      <>
        <WorkspaceAvatar size={18} text="ZH"></WorkspaceAvatar>
        zhengzhizhan-mes
      </>
    ),
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
        <Row justify="start" align="top" gutter={[12, 8]}>
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
                  <WorkspaceAvatar
                    size={18}
                    text="ZH"
                    calssName="relative -top-2"
                  />
                }
              >
                <span className=" inline-block w-28 overflow-hidden">
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
                  <AccountAvatar
                    size={18}
                    text="郑"
                    calssName="relative -top-0.5"
                  />
                }
              ></Button>
            </Dropdown>
          </Col>
          <Col span={20} className="h-8 leading-8">
            <Button
              className="w-40 border border-solid"
              icon={<EditOutlined className="relative -top-0.5" />}
            >
              New issue
            </Button>
          </Col>
          <Col span={4} className="h-8 leading-8">
            <Button
              className="border border-solid"
              icon={<SearchOutlined className="relative -top-0.5" />}
            ></Button>
          </Col>
        </Row>
      </Header>
      <Content className="flex-1">This is Content</Content>
      <Footer className="flex-initial">This is Footer</Footer>
    </Layout>
  );
}
