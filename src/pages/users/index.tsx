import React, {Component} from 'react';
// import { PageHeaderWrapper, GridContent } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { Table, Tag, Space } from 'antd';
import { connect } from 'umi';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Create Time',
    dataIndex: 'create_time',
    key: 'create_time',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Edit</a>&nbsp;&nbsp;&nbsp;
        <a>Delete</a>
      </Space>
    ),
  },
];

const index = ({ users }) =>{
  return (
      <Card>
          <Table columns={columns} dataSource={users.data} />
      </Card>
  );
}


const mapStateToProps = ({users})=>{
  console.log("mapStateToProps users");
  console.log(users);
  return {
    users
  };
}

export default connect(mapStateToProps)(index);