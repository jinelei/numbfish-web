import React, { useEffect, useState } from 'react';
import styles from './style/index.module.less';
import {
  Button,
  Form,
  Grid,
  Input,
  Message,
  Modal,
  Popconfirm,
  Select,
  Space,
  Table,
  Tag,
  Tooltip,
  Typography,
} from '@arco-design/web-react';
import Row from '@arco-design/web-react/es/Grid/row';
import Col from '@arco-design/web-react/es/Grid/col';
import { permission } from '@/apis';
import {
  PageRequestPermissionQueryRequest,
  PermissionCreateRequest,
  PermissionDeleteRequest,
  PermissionQueryRequest,
  PermissionResponse,
  PermissionUpdateRequest,
} from '@/apis/api/data-contracts';
import {
  IconCopy,
  IconDelete,
  IconDoubleDown,
  IconDoubleUp,
  IconEdit,
  IconPlus,
} from '@arco-design/web-react/icon';
import { dayjs } from '@arco-design/web-react/es/_util/dayjs';

const PERMISSION_LABEL_MAP = [
  { key: 'DIRECTORY', value: '目录', color: 'arcoblue' },
  { key: 'MENU', value: '菜单', color: 'gold' },
  { key: 'ACTION', value: '按钮', color: 'magenta' },
];

const Permission = () => {
  const [searchForm] = Form.useForm();
  const [dataSource, setDataSource] = useState([]);
  const [total, setTotal] = useState<number>(0);
  const [pageNo, setPageNo] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
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
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [searchValues, setSearchValues] = useState<
    Partial<PageRequestPermissionQueryRequest>
  >({
    page: pageNo,
    size: pageSize,
  });
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: '权限名称',
      dataIndex: 'name',
      render: (text, record) => <Tooltip content={record.id}>{text}</Tooltip>,
    },
    {
      title: '权限编码',
      dataIndex: 'code',
    },
    {
      title: '权限类型',
      dataIndex: 'type',
      render: (text, _) => {
        return PERMISSION_LABEL_MAP.filter((i) => i.key === text).map((i) => (
          <Tag color={i.color} key={i.value}>
            {i.value}
          </Tag>
        ));
      },
    },
    {
      title: '排序值',
      dataIndex: 'sortValue',
    },
    {
      title: '更新时间',
      dataIndex: 'updatedTime',
      render: (text, record) => {
        return (
          <Tooltip
            content={
              <Row>
                <Col span={8}>创建人：</Col>
                <Col span={16}>{record.createdUserId}</Col>
                <Col span={8}>创建时间：</Col>
                <Col span={16}>
                  {record.createdTime
                    ? dayjs(record.createdTime).format('YYYY-MM-DD HH:mm:ss')
                    : '-'}
                </Col>
                <Col span={8}>更新人：</Col>
                <Col span={16}>{record.updatedUserId}</Col>
                <Col span={8}>更新时间：</Col>
                <Col span={16}>
                  {record.updatedTime
                    ? dayjs(record.updatedTime).format('YYYY-MM-DD HH:mm:ss')
                    : '-'}
                </Col>
              </Row>
            }
          >
            {text ? dayjs(text).format('YYYY-MM-DD HH:mm:ss') : '-'}
          </Tooltip>
        );
      },
    },
    {
      title: '备注',
      dataIndex: 'remark',
    },
    {
      title: '操作',
      width: 120,
      render: (_, record) => (
        <Space size="small">
          <Button
            icon={<IconPlus />}
            type="primary"
            size="small"
            onClick={() => {
              setFormMode('create_with_parent');
              form.setFieldsValue({
                parentId: record.id,
              });
              setVisible(true);
            }}
          ></Button>
          <Button
            icon={<IconEdit />}
            size="small"
            onClick={() => {
              setFormMode(!!record.parentId ? 'update_with_parent' : 'update');
              form.setFieldsValue(record);
              setVisible(true);
            }}
          ></Button>
          <Popconfirm
            title={'确定删除吗？'}
            onOk={() => handleDelete([record.id])}
          >
            <Tooltip
              content={'删除后，该权限下的所有子权限也会被删除，无法恢复。'}
            >
              <Button
                icon={<IconDelete />}
                status="danger"
                size="small"
              ></Button>
            </Tooltip>
          </Popconfirm>
          <Tooltip
            content={
              '复制后，会自动生成一个新的权限，名称为原权限名称+copy，code为原权限code+_copy'
            }
          >
            <Button
              icon={<IconCopy />}
              size="small"
              onClick={() => {
                setFormMode(
                  !!record.parentId ? 'create_with_parent' : 'create'
                );
                form.setFieldsValue({
                  name: record.name + ' copy',
                  code: record.code + '_copy',
                  type: record.type,
                  parentId: record.parentId,
                  remark: record.remark + ' copy',
                  sortValue: record.sortValue + 1,
                });
                setVisible(true);
              }}
            ></Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const fetchData = () => {
    setLoading(true);
    permission
      .page2(searchValues as PageRequestPermissionQueryRequest)
      .then((res) => {
        if (res.data.code === 200) {
          setDataSource(res.data.data);
          setPageNo(res.data.page);
          setPageSize(res.data.size);
          setTotal(res.data.total);
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
    fetchData();
  }, [searchValues]);

  const handleFormSubmit = () => {
    form
      .validate()
      .then((res) => {
        formMode.startsWith('create')
          ? permission
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
                form.resetFields();
                setVisible(false);
              })
          : permission
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
                form.resetFields();
                setVisible(false);
              });
      })
      .catch((err) => {
        console.log(err.errors);
        Message.error(err.errors);
      });
  };

  const handleDelete = (ids: number[]) => {
    permission
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
          <Col span={24} style={{ width: '100%' }}>
            <Form
              form={searchForm}
              autoComplete="false"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              colon={true}
              style={{ maxWidth: '100%' }}
            >
              <Grid
                collapsed={collapsed}
                cols={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
                colGap={12}
                rowGap={16}
                className={styles.searchForm}
              >
                <Grid.GridItem>
                  <Form.Item
                    className={styles.searchFormItem}
                    labelAlign={'right'}
                    label="权限id"
                    field="id"
                  >
                    <Input type={'number'} />
                  </Form.Item>
                </Grid.GridItem>
                <Grid.GridItem>
                  <Form.Item
                    className={styles.searchFormItem}
                    labelAlign={'right'}
                    label="权限名称"
                    field="name"
                  >
                    <Input type={'text'} />
                  </Form.Item>
                </Grid.GridItem>
                <Grid.GridItem>
                  <Form.Item
                    className={styles.searchFormItem}
                    labelAlign={'right'}
                    label="权限代码"
                    field="code"
                  >
                    <Input type={'text'} />
                  </Form.Item>
                </Grid.GridItem>
                <Grid.GridItem>
                  <Form.Item
                    className={styles.searchFormItem}
                    labelAlign={'right'}
                    label="权限类型"
                    field="type"
                  >
                    <Select style={{ minWidth: '12rem' }}>
                      {PERMISSION_LABEL_MAP.map((i) => (
                        <Select.Option key={i.key} value={i.key}>
                          {i.value}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Grid.GridItem>
                <Grid.GridItem className={styles.action} suffix>
                  <Space size="small">
                    <Button onClick={() => setCollapsed(!collapsed)}>
                      {collapsed ? (
                        <Space>
                          <IconDoubleDown />
                          展开
                        </Space>
                      ) : (
                        <Space>
                          <IconDoubleUp />
                          收起
                        </Space>
                      )}
                    </Button>
                    <Button
                      type="primary"
                      onClick={() =>
                        setSearchValues({
                          ...searchValues,
                          params: { ...searchForm.getFieldsValue() },
                        })
                      }
                    >
                      搜索
                    </Button>
                    <Button
                      status={'warning'}
                      onClick={() => {
                        searchForm.resetFields();
                        setSearchValues({
                          ...searchValues,
                          params: {},
                        });
                      }}
                    >
                      重置
                    </Button>
                  </Space>
                </Grid.GridItem>
              </Grid>
            </Form>
          </Col>
        </Col>

        <Col span={24} className={styles.operationBar}>
          <Typography.Paragraph className={styles.title}>
            权限列表
          </Typography.Paragraph>
          <Space>
            <Button
              icon={<IconPlus />}
              type="primary"
              onClick={() => {
                setFormMode('create');
                setVisible(true);
              }}
            >
              添加
            </Button>
            {selectedRowKeys.length > 0 && (
              <Tooltip
                content={'删除后，该权限下的所有子权限也会被删除，无法恢复。'}
              >
                <Button
                  icon={<IconDelete />}
                  type="primary"
                  onClick={() => {
                    if (selectedRowKeys.length === 0) {
                      Message.error('请选择要删除的项');
                      return;
                    }
                    handleDelete(selectedRowKeys);
                  }}
                >
                  批量删除
                </Button>
              </Tooltip>
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
            pagination={{
              total: total,
              current: pageNo,
              pageSize: pageSize,
              showTotal: (total, range) =>
                `共 ${total} 条记录，当前显示 ${range[0]}-${range[1]} 条`,
              onChange: (page, pageSize) => {
                setSearchValues({
                  ...searchValues,
                  page: page,
                  size: pageSize,
                });
              },
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
                rules={[
                  {
                    required: !formMode.startsWith('create'),
                    message: '请输入权限id',
                  },
                ]}
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
                  {PERMISSION_LABEL_MAP.map((i) => (
                    <Select.Option key={i.key} value={i.key}>
                      {i.value}
                    </Select.Option>
                  ))}
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
                rules={[
                  {
                    required: formMode.endsWith('with_parent'),
                    message: '请输入父权限id',
                  },
                ]}
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
