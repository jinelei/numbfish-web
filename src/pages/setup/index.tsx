import React, { useEffect, useState } from 'react';
import { setup } from '@/apis';

import Footer from '@/components/Footer';
import styles from './style/index.module.less';
import { Form, Input, Button, Space, Message } from '@arco-design/web-react';

function Setup() {
  useEffect(() => {
    document.body.setAttribute('arco-theme', 'light');
    setup
      .checkIsSetup()
      .then((res) => {
        if (res.data.code === 200) {
          if (!!res.data.data) {
            Message.success('系统已注册，即将跳转到首页');
            setTimeout(() => {
              window.location.href = '/';
            }, 2000);
          }
        } else {
          Message.success('系统已注册，即将跳转到首页');
        }
      })
      .catch((err) => {
        Message.error('检查是否需要注册失败:' + err);
      });
  }, []);

  const onFinish = async (values) => {
    setup
      .init(values)
      .then((res) => {
        Message.success('注册成功');
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      })
      .catch((err) => {
        Message.error('注册失败:' + err);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>系统注册页</h1>
        </div>
        <Form layout="vertical" onSubmit={onFinish} style={{ width: '100%' }}>
          <Form.Item
            label="超级管理员用户名"
            field="username"
            rules={[{ required: true, message: '请输入超级管理员用户名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            field="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="手机号"
            field="phone"
            rules={[{ required: true, message: '请输入手机号' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="邮箱"
            field="email"
            rules={[
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '请输入有效的邮箱地址' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="备注" field="remark">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Space size="large">
                <Button type="primary" htmlType="submit">
                  注册
                </Button>
              </Space>
            </div>
          </Form.Item>
        </Form>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

Setup.displayName = 'SetupPage';

export default Setup;
