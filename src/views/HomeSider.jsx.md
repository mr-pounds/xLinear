/*
 * @Name         :
 * @Version      : 1.0.1
 * @Author       : zzz
 * @Date         : 2023-04-01 15:16:02
 * @LastEditors  : zzz
 * @LastEditTime : 2023-04-04 17:53:53
 */
import React from "react";
import { Dropdown, Menu, Button, Divider, Grid } from "@arco-design/web-react";
import classes from "./HomeSider.module.css";
import { IconPlus, IconSearch } from "@arco-design/web-react/icon";
import WorkspaceAvatar from "../components/Avatars/WorkspaceAvatar";
import AccountAvatar from "../components/Avatars/AccountAvatar";
import ShortcutTips from "../components/Shortcuts/ShortcutTips";

const Row = Grid.Row;
const Col = Grid.Col;

const accountDropdownList = (
  <Menu className={classes.dropdownMaxHeight}>
    <Menu.Item key="profile">
      View profile{" "}
      <ShortcutTips isGroup={false} keyList={["O", "M"]}></ShortcutTips>
    </Menu.Item>
    <Menu.Item key="Settings">
      Settings<ShortcutTips isGroup={false} keyList={["G", "S"]}></ShortcutTips>
    </Menu.Item>
    <Menu.Item key="DownloadApp">Download desktop app</Menu.Item>
    <Divider style={{ margin: "4px 0" }}></Divider>
    <Menu.Item key="Help">
      Help<ShortcutTips isGroup={false} keyList={["?"]}></ShortcutTips>
    </Menu.Item>
    <Menu.Item key="Changeloge">Changelog</Menu.Item>
    <Menu.Item key="Documentation">Documentationt</Menu.Item>
    <Menu.Item key="JoinSlack">Join Slack community</Menu.Item>
    <Divider style={{ margin: "4px 0" }}></Divider>
    <Menu.Item key="logout">
      Log out<ShortcutTips isGroup={true} keyList={["Alt", "Q"]}></ShortcutTips>
    </Menu.Item>
  </Menu>
);

const workspaceDropdownList = (
  <Menu className={classes.dropdownMaxHeight}>
    <Menu.ItemGroup title="740870608@qq.com">
      <Menu.Item key="WorkspaceName">
        <WorkspaceAvatar size={18} text="ZH" calssName="mx-2"></WorkspaceAvatar>
        zhengzhizhan-Mes
      </Menu.Item>
    </Menu.ItemGroup>
    <Divider style={{ margin: "4px 0" }}></Divider>
    <Menu.Item key="WorkspaceSetting">Workspace Settings</Menu.Item>
    <Menu.Item key="CreateWorkspace">Create or join a Workspace</Menu.Item>
    <Menu.Item key="AddAccount">Add an account</Menu.Item>
    <Divider style={{ margin: "4px 0" }}></Divider>
    <Menu.Item key="logout">Log out</Menu.Item>
  </Menu>
);

export default function HomeSider() {
  return (
    <div>
      <div className={classes.siderHeader}>
        {/* 头部的工作台及账户区 */}
        <Row align="center" justify="start">
          <Col span={20}>
            <Dropdown
              droplist={workspaceDropdownList}
              position="bl"
              trigger={"click"}
            >
              <Button
                type="text"
                className={classes.workspaceDropdownBtnBig}
                icon={
                  <WorkspaceAvatar size={18} text="ZH" calssName="-top-1" />
                }
              >
                zhengzhizhan-mes
              </Button>
            </Dropdown>
          </Col>
          <Col span={4}>
            <Dropdown
              droplist={accountDropdownList}
              position="bl"
              trigger={"click"}
            >
              <Button
                type="text"
                iconOnly={true}
                className={classes.dropdownBtn}
                icon={<AccountAvatar size={18} text="郑" />}
              ></Button>
            </Dropdown>
          </Col>
        </Row>
        {/* 头部的操作条 */}
        <Row align="center" justify="start">
          <Col span={20}>
            <Button
              icon={<IconPlus></IconPlus>}
              size="small"
              className={classes.dropdownBtn}
            >
              New issue
            </Button>
          </Col>
          <Col span={4}>
            <Button icon={<IconSearch />} size="small"></Button>
          </Col>
        </Row>
      </div>
      <div className="cursor-default">
        <Menu mode="vertical" defaultSelectedKeys={["Inbox"]}>
          <Menu.Item key="Inbox">Inbox</Menu.Item>
          <Menu.Item key="MyIssues">My issues</Menu.Item>
          <Menu.Item key="Views">Views</Menu.Item>
          <Menu.Item key="Roadmaps">Roadmaps</Menu.Item>
        </Menu>
      </div>
      <div className="Your teams">QuickViews</div>
    </div>
  );
}
