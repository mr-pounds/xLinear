/*
 * @Name         :
 * @Version      : 1.0.1
 * @Author       : zzz
 * @Date         : 2023-04-01 15:57:47
 * @LastEditors  : zzz
 * @LastEditTime : 2023-04-04 15:25:25
 */
import { Avatar } from "@arco-design/web-react";
import classes from "./AccountAvatar.module.css";

import React from "react";

interface IAccountAvatarProps {
  size: number;
  imgUrl?: string;
  text: string;
  calssName?: string;
}

export default function AccountAvatar(props: IAccountAvatarProps) {
  return (
    <Avatar
      size={props.size}
      shape="circle"
      className={props.calssName + " " + classes.avatar}
    >
      {props.imgUrl ? (
        <img alt="WorkspaceAvatar" src={props.imgUrl} />
      ) : (
        props.text
      )}
    </Avatar>
  );
}
