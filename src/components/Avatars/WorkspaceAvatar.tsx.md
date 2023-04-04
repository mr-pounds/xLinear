import { Avatar } from "@arco-design/web-react";
import classes from "./WorkspaceAvatar.module.css";

import React from "react";

interface IWorkspaceAvatarProps {
  size: number;
  imgUrl?: string;
  text: string;
  calssName?: string;
}

export default function WorkspaceAvatar(props: IWorkspaceAvatarProps) {
  return (
    <Avatar
      size={props.size}
      shape="square"
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
