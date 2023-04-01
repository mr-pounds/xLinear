/*
 * @Name         :
 * @Version      : 1.0.1
 * @Author       : zzz
 * @Date         : 2023-04-01 16:56:04
 * @LastEditors  : zzz
 * @LastEditTime : 2023-04-01 17:08:12
 */
import React from "react";

interface IShortcutTipsProps {
  keyList: string[];
  isGroup: boolean;
}

export default function ShortcutTips(props: IShortcutTipsProps) {
  function getGroupShortcut() {
    let result = "";
    props.keyList.forEach((item, index) => {
      result += item;
      if (index < props.keyList.length - 1) {
        result += " + ";
      }
    });
    return result;
  }

  function getNotGroupShortcut() {
    let result = "";
    props.keyList.forEach((item, index) => {
      result += item;
      if (index < props.keyList.length - 1) {
        result += " then ";
      }
    });
    return result;
  }

  return (
    <span className="float-right text-zinc-400">
      {props.isGroup ? getGroupShortcut() : getNotGroupShortcut()}
    </span>
  );
}
