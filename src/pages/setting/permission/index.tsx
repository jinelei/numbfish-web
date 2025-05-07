import { useEffect, useRef, useState } from 'react';
import styles from './style/index.module.less';
import {
  Button,
  Form,
  Input,
  Message,
  Modal,
  Select,
  Space,
  Table,
} from '@arco-design/web-react';
import Row from '@arco-design/web-react/es/Grid/row';
import Col from '@arco-design/web-react/es/Grid/col';
import { permissions } from '@/apis';

const Permission = () => {
  const formRef = useRef(null);
  const [dataSource, setDataSource] = useState([]);
  const [form, setForm] = useState({});
  const [visible, setVisible] = useState(false);

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'code',
      dataIndex: 'code',
    },
    {
      title: 'type',
      dataIndex: 'type',
    },
    {
      title: 'sortValue',
      dataIndex: 'sortValue',
    },
    // {
    //   title: 'createdUserId',
    //   dataIndex: 'createdUserId',
    // },
    // {
    //   title: 'updatedTime',
    //   dataIndex: 'updatedTime',
    // },
    // {
    //   title: 'updatedUserId',
    //   dataIndex: 'updatedUserId',
    // },
    // {
    //   title: 'createdTime',
    //   dataIndex: 'createdTime',
    // },
    {
      title: 'remark',
      dataIndex: 'remark',
    },
    {
      title: 'Operation',
      width: 120,
      render: (_, record) => (
        <Space size="small">
          <Button
            type="primary"
            size="small"
            onClick={() => {
              setForm(record);
              setVisible(true);
            }}
          >
            Add
          </Button>
          <Button type="primary" size="small">
            Edit
          </Button>
          <Button type="primary" size="small">
            Delete
          </Button>
          <Button type="primary" size="small">
            Copy
          </Button>
          <Button type="primary" size="small">
            View
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    document.body.setAttribute('arco-theme', 'light');
    permissions.tree1({}).then((res) => {
      console.log('permissions tree', res);
      if (res.data.code === 200) {
        setDataSource(
          res.data?.data?.map((i) => {
            return {
              ...i,
              key: i.id,
            };
          })
        );
      }
    });
  }, []);

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
    <div className={styles.container}>
      <div className={styles.content}>
        <Row>
          <Col span={24}>
            <Table
              rowSelection={{
                type: 'checkbox',
                onChange: (selectedRowKeys, selectedRows) => {
                  console.log(selectedRowKeys, selectedRows);
                },
              }}
              columns={columns}
              data={dataSource}
            />
          </Col>
        </Row>
      </div>
      <Modal
        title="Modal Title"
        visible={visible}
        onOk={() => {
          formRef.current
            ?.validate()
            .then((res) => {
              permissions
                .update2({ ...res })
                .then((res) => {
                  if (res.data.code === 200) {
                    Message.success(res.data.message);
                  } else {
                    Message.error(res.data.message);
                  }
                })
                .finally(() => {
                  setVisible(false);
                });
            })
            .catch((err) => {
              Message.error(err);
            });
        }}
        onCancel={() => setVisible(false)}
        autoFocus={false}
        focusLock={true}
      >
        <Form ref={formRef} layout="vertical" initialValues={form}>
          <Form.Item
            label="权限id"
            field="id"
            disabled={!!form.id}
            rules={[{ required: true, message: '请输入权限id' }]}
          >
            <Input />
          </Form.Item>
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
        </Form>
      </Modal>
    </div>
  );
};

Permission.displayName = 'PermissionPage';

export default Permission;
