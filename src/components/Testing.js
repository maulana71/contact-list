import React from "react";
import { Button, Form, Input, Radio } from "antd";

function Testing() {
  return (
    <div>
      <Form>
        <Form.Item label="Field A">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B">
          <Input placeholder="input placeholder" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default Testing;
