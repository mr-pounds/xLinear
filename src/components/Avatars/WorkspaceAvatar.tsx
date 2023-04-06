/*
 * @Name         :
 * @Version      : 1.0.1
 * @Author       : zzz
 * @Date         : 2023-04-06 22:08:58
 * @LastEditors  : zzz
 * @LastEditTime : 2023-04-06 22:26:56
 */
import { Avatar } from "antd";

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
      className={props.calssName + " mr-2 bg-violet-500"}
    >
      {props.imgUrl ? (
        <img alt="WorkspaceAvatar" src={props.imgUrl} />
      ) : (
        props.text
      )}
    </Avatar>
  );
}
