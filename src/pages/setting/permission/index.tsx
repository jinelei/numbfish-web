import { useEffect, useRef, useState } from 'react';
import styles from './style/index.module.less';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Message,
  Modal,
  Select,
  Space,
  Table,
  Typography,
} from '@arco-design/web-react';
import Row from '@arco-design/web-react/es/Grid/row';
import Col from '@arco-design/web-react/es/Grid/col';
import { permissions } from '@/apis';
import {
  PermissionCreateRequest,
  PermissionDeleteRequest,
  PermissionQueryRequest,
  PermissionResponse,
  PermissionUpdateRequest,
} from '@/apis/api/data-contracts';
import { useSelector } from 'react-redux';

const Permission = () => {
  const [searchForm] = Form.useForm();
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm<
    | PermissionResponse
    | PermissionCreateRequest
    | PermissionUpdateRequest
    | PermissionDeleteRequest
    | PermissionQueryRequest
  >();
  const [formMode, setFormMode] = useState<
    'create' | 'create_with_parent' | 'update' | 'update_with_parent'
  >('create');
  const [visible, setVisible] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [searchValues, setSearchValues] = useState<
    Partial<PermissionQueryRequest>
  >({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

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
              setFormMode('create_with_parent');
              form.setFieldsValue({
                parentId: record.id,
              });
              setVisible(true);
            }}
          >
            Add
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={() => {
              setFormMode(!!record.parentId ? 'update_with_parent' : 'update');
              form.setFieldsValue(record);
              setVisible(true);
            }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={() => handleDelete([record.id])}
          >
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

  const fetchData = () => {
    console.log('请求参数：', searchValues);
    setLoading(true);
    permissions
      .tree1(searchValues as PermissionQueryRequest)
      .then((res) => {
        if (res.data.code === 200) {
          setDataSource(res.data.data);
        } else {
          Message.error(res.data.message);
        }
      })
      .catch((err) => {
        Message.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    document.body.setAttribute('arco-theme', 'light');
  });

  useEffect(() => {
    fetchData();
  }, [searchValues]);

  const handleFormSubmit = () => {
    console.log('ok', form.getFieldsValue());
    form
      .validate()
      .then((res) => {
        formMode.startsWith('create')
          ? permissions
              .create2(res as PermissionCreateRequest)
              .then((res) => {
                if (res.data.code === 200) {
                  Message.success(res.data.message);
                } else {
                  Message.error(res.data.message);
                }
              })
              .finally(() => {
                fetchData();
                setVisible(false);
              })
          : permissions
              .update2(res as PermissionUpdateRequest)
              .then((res) => {
                if (res.data.code === 200) {
                  Message.success(res.data.message);
                } else {
                  Message.error(res.data.message);
                }
              })
              .finally(() => {
                fetchData();
                setVisible(false);
              });
      })
      .catch((err) => {
        Message.error(err.errors);
      });
  };

  const handleDelete = (ids: number[]) => {
    permissions
      .delete2({ ids: ids })
      .then((res) => {
        if (res.data.code === 200) {
          Message.success(res.data.message);
        } else {
          Message.error(res.data.message);
        }
      })
      .catch((err) => {
        Message.error(err.errors);
      })
      .finally(() => {
        fetchData();
      });
  };

  return (
    <Row className={styles.container}>
      <Col span={24} className={styles.content}>
        <Col span={24}>
          <Form
            form={searchForm}
            layout="inline"
            autoComplete="false"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 20 }}
            colon={true}
            className={styles.searchForm}
            style={{ maxWidth: 'none' }}
          >
            <Row
              gutter={16}
              justify={'space-between'}
              style={{ width: '100%' }}
            >
              <Col span={6}>
                <Form.Item label="权限id" field="id">
                  <InputNumber style={{ minWidth: '20rem' }} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="权限名称" field="name">
                  <Input type={'text'} style={{ minWidth: '20rem' }} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="权限代码" field="code">
                  <Input type={'text'} style={{ minWidth: '20rem' }} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="权限类型" field="type">
                  <Select style={{ minWidth: '20rem' }}>
                    <Select.Option value="">全部</Select.Option>
                    <Select.Option value="DIRECTORY">目录</Select.Option>
                    <Select.Option value="MENU">菜单</Select.Option>
                    <Select.Option value="ACTION">操作</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16} style={{ width: '100%', marginTop: '1rem' }}>
              <Col flex={'auto'} style={{ textAlign: 'right' }}>
                <Space size="small">
                  <Button
                    onClick={() => {
                      setCollapsed(!collapsed);
                    }}
                  >
                    {collapsed ? '展开' : '收起'}
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => {
                      console.log('提交成功', searchForm.getFieldsValue());
                      setSearchValues(
                        searchForm.getFieldsValue() as PermissionQueryRequest
                      );
                    }}
                  >
                    {' '}
                    搜索{' '}
                  </Button>
                  <Button
                    onClick={() => {
                      searchForm.resetFields();
                      setSearchValues({});
                    }}
                  >
                    重置
                  </Button>
                </Space>
              </Col>
            </Row>
          </Form>
        </Col>

        <Col span={24} className={styles.operationBar}>
          <Typography.Paragraph className={styles.title}>
            权限列表
          </Typography.Paragraph>
          <Space>
            <Button
              type="primary"
              onClick={() => {
                form.resetFields();
                setFormMode('create');
                setVisible(true);
              }}
            >
              {' '}
              添加{' '}
            </Button>
            {selectedRowKeys.length > 0 && (
              <Button
                type="primary"
                onClick={() => {
                  if (selectedRowKeys.length === 0) {
                    Message.error('请选择要删除的项');
                    return;
                  }
                  handleDelete(selectedRowKeys);
                }}
              >
                {' '}
                批量删除{' '}
              </Button>
            )}
          </Space>
        </Col>

        <Col span={24} className={styles.tableWrapper}>
          <Table
            loading={loading}
            rowSelection={{
              checkStrictly: false,
              type: 'checkbox',
              onChange: (keys) => setSelectedRowKeys(keys),
            }}
            stripe
            rowKey={'id'}
            columns={columns}
            data={dataSource}
          />
        </Col>

        <Col span={24} className={styles.modalForm}>
          <Modal
            title={formMode.startsWith('create') ? '添加权限' : '编辑权限'}
            visible={visible}
            onOk={handleFormSubmit}
            onCancel={() => {
              form.resetFields();
              setVisible(false);
            }}
            autoFocus={false}
            focusLock={true}
          >
            <Form form={form} className={styles.modalForm} layout="vertical">
              <Form.Item
                label="权限id"
                field="id"
                disabled={formMode.startsWith('update')}
                style={{
                  display: formMode.startsWith('create') ? 'none' : 'block',
                }}
                rules={
                  formMode.startsWith('create')
                    ? []
                    : [{ required: true, message: '请输入权限id' }]
                }
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
              <Form.Item
                label="父权限 ID"
                field="parentId"
                disabled
                style={{
                  display: formMode.endsWith('with_parent') ? 'block' : 'none',
                }}
                rules={
                  formMode.endsWith('with_parent')
                    ? []
                    : [
                        {
                          required: true,
                          message: '请输入父权限id',
                        },
                      ]
                }
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item label="权限备注信息" field="remark">
                <Input.TextArea />
              </Form.Item>
            </Form>
          </Modal>
        </Col>
      </Col>
    </Row>
  );
};

Permission.displayName = 'PermissionPage';

export default Permission;
