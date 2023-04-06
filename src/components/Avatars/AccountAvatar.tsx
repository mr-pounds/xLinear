/*
 * @Name         :
 * @Version      : 1.0.1
 * @Author       : zzz
 * @Date         : 2023-04-01 15:57:47
 * @LastEditors  : zzz
 * @LastEditTime : 2023-04-06 22:21:05
 */
import { Avatar } from "antd";

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
      className={props.calssName + " bg-blue-500"}
    >
      {props.imgUrl ? (
        <img alt="AccountAvatar" src={props.imgUrl} />
      ) : (
        props.text
      )}
    </Avatar>
  );
}
