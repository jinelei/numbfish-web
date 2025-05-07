import { PermissionResponse } from '@/apis/api/data-contracts';
import {
  Button,
  Form,
  Input,
  Select,
  FormInstance,
} from '@arco-design/web-react';
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  form?: Partial<PermissionResponse>;
};

const FormComponent = (props: Props) => {
  const formRef = useRef<FormInstance>(null);

  // 添加验证表单的方法
  const validateForm = async () => {
    try {
      const values = await formRef.current?.validate();
      return { isValid: true, values };
    } catch (error) {
      return { isValid: false, error };
    }
  };

  return (
    <Form ref={formRef} layout="vertical" initialValues={props.form}>
      <Form.Item
        label="权限名称"
        field="name"
        rules={[{ required: true, message: '请输入权限名称' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="权限代码"
        field="code"
        rules={[{ required: true, message: '请输入权限代码' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="权限类型"
        field="type"
        rules={[{ required: true, message: '请选择权限类型' }]}
      >
        <Select>
          <Select.Option value="DIRECTORY">目录</Select.Option>
          <Select.Option value="MENU">菜单</Select.Option>
          <Select.Option value="ACTION">操作</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="权限排序值" field="sortValue">
        <Input type="number" />
      </Form.Item>
      <Form.Item label="父权限 ID" field="parentId">
        <Input type="number" />
      </Form.Item>
      <Form.Item label="权限备注信息" field="remark">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={validateForm}>
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
