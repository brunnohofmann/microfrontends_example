import React from "react";
import {Button} from '@antd'

export default function Root(props) {
  return <Button>{props.name} is mounted!</Button>;
}
