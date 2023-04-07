/*
 * @Name         :
 * @Version      : 1.0.1
 * @Author       : zzz
 * @Date         : 2023-04-06 15:51:48
 * @LastEditors  : zzz
 * @LastEditTime : 2023-04-07 10:24:17
 */
import { Layout, Button, Dropdown, Menu, Col, Row } from "antd";
import type { MenuProps } from "antd";
import AccountAvatar from "../components/Avatars/AccountAvatar";
import WorkspaceAvatar from "../components/Avatars/WorkspaceAvatar";
import {
  ExpandOutlined,
  FormOutlined,
  InboxOutlined,
  PullRequestOutlined,
  RadiusSettingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "./HomeSider.css";

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

const accountMenu: MenuProps["items"] = [
  {
    label: "View profile",
    key: "profile",
  },
  {
    label: "Settings",
    key: "settings",
  },
  {
    label: "Download desktop app",
    key: "app",
  },
  {
    type: "divider",
  },
  {
    label: "Help",
    key: "help",
  },
  {
    label: "Changelog",
    key: "changelog",
  },
  {
    label: "Documentation",
    key: "Documentation",
  },
  {
    label: "Join Slack community",
    key: "community",
  },
  {
    type: "divider",
  },
  {
    label: "Log out",
    key: "logout",
  },
];

const navMenu = [
  {
    label: "Inbox",
    key: "Inbox",
    icon: <InboxOutlined size={18} className="relative -top-1" />,
  },
  {
    label: "My issues",
    key: "issues",
    icon: <ExpandOutlined size={16} className="relative -top-1" />,
  },
  {
    label: "Views",
    key: "Views",
    icon: <RadiusSettingOutlined size={16} className="relative -top-1" />,
  },
  {
    label: "Roadmaps",
    key: "Roadmaps",
    icon: <PullRequestOutlined size={16} className="relative -top-1" />,
  },
];

export default function HomeSider() {
  return (
    <Layout className="flex h-full flex-col  bg-white">
      <Header className="h-24 flex-initial bg-white pb-3 pl-4 pr-4 pt-3">
        <Row justify="start" align="top" gutter={[12, 8]}>
          <Col span={19} className="h-8 leading-8">
            <Dropdown
              menu={{ items: workspaceMenu }}
              placement="bottomLeft"
              trigger={["click"]}
            >
              <Button
                type="text"
                className="w-full overflow-hidden border-0 pb-1.5 pl-2 pr-2 pt-1.5"
                icon={
                  <WorkspaceAvatar
                    size={18}
                    text="ZH"
                    calssName="relative -top-0.5"
                  />
                }
              >
                zhengzhizhan-mes
              </Button>
            </Dropdown>
          </Col>
          <Col span={5} className="h-8 leading-8">
            <Dropdown
              menu={{ items: accountMenu }}
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
          <Col span={19} className="h-8 leading-8">
            <Button
              block={true}
              className="border border-solid"
              icon={<FormOutlined className="relative -top-0.5" />}
            >
              New issue
            </Button>
          </Col>
          <Col span={5} className="h-8 leading-8">
            <Button
              className="border border-solid"
              icon={<SearchOutlined className="relative -top-0.5" />}
            ></Button>
          </Col>
        </Row>
      </Header>
      <Content className="flex-1 pl-4 pr-4">
        {navMenu?.map((item) => (
          <Button
            block={true}
            type="text"
            icon={item?.icon}
            key={item?.key}
            className="text-left"
          >
            {item.label}
          </Button>
        ))}
      </Content>
      <Footer className="flex-initial">This is Footer</Footer>
    </Layout>
  );
}
