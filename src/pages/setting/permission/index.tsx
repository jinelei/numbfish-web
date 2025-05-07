import React, { useEffect, useRef, useState } from 'react';
import Footer from '@/components/Footer';
import styles from './style/index.module.less';
import {
  Button,
  FormInstance,
  Modal,
  Space,
  Switch,
  Table,
} from '@arco-design/web-react';
import Row from '@arco-design/web-react/es/Grid/row';
import Col from '@arco-design/web-react/es/Grid/col';
import { permissions } from '@/apis';
import Form from './form';
import FormComponent from './form';

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
          console.log('onOk', formRef.current);
          formRef.current
            ?.validateForm()
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
        onCancel={() => setVisible(false)}
        autoFocus={false}
        focusLock={true}
      >
        <FormComponent ref={formRef} form={form} />
      </Modal>
    </div>
  );
};

Permission.displayName = 'PermissionPage';

export default Permission;
