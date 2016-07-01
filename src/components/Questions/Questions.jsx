import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Spin, Input, Select, Button, Table} from 'antd';
import Todo from './Question';
import styles from './Questions.less';

const Option = Select.Option;

const columns = [
  {
    title: '编号',
    dataIndex: 'key',
    key: 'key'
  }, {
    title: '所属分类',
    dataIndex: 'parent_id',
    key: 'parent_id'
  }, {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '排序号',
    dataIndex: 'queue',
    key: 'queue'
  }, {
    title: '状态',
    dataIndex: 'status',
    key: 'status'
  }, {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt'
  }, {
    title: '最后修改时间',
    dataIndex: 'updateAt',
    key: 'updateAt'
  }, {
    title: '操作',
    key: 'operation',
    render: () => {
      return (
        <div>
          <Button type="primary" size="small">编辑</Button>
          &nbsp;&nbsp;
          <Button size="small" className={styles.warning}>删除</Button>
        </div>
      )
    }
  }
];

const data = [];
for (let i = 0; i < 102; i++) {
  data.push({
    key: i + 1,
    parent_id: 0,
    level: 1,
    name: `劳动人事法律事务${i}`,
    description: `劳动人事法律事务${i}`,
    queue: i + 1,
    status: "正常",
    createdAt: "2016-05-14 10:00:00",
    updateAt: "2016-05-14 10:00:00"
  });
}

const pagination = {
  total: data.length,
  showSizeChanger: true,
  onShowSizeChange(current, pageSize) {
    console.log('Current: ', current, '; PageSize: ', pageSize);
  },
  onChange(current) {
    console.log('Current: ', current);
  }
};

const Todos = ({todos, dispatch}) => {
  const handleChange = (id) => {
    // dispatch({type: 'todos/toggleComplete', payload: id});
    console.log(id);
  };

  const renderList = () => {
    const {list, loading} = todos;
    if (loading) {
      return <Spin/>;
    }

    return (
      <div>
        <div>
          <label>标题</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Input style={{
            width: 100
          }} placeholder="输入标题"/>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label>所属分类</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Select size="large" defaultValue="全部" style={{
            width: 200
          }} onChange={handleChange.bind(this)}>
            <Option value="0">全部</Option>
            <Option value="1">分类1</Option>
            <Option value="2">分类2</Option>
            <Option value="3">分类3</Option>
          </Select>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label>状态</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Select size="large" defaultValue="全部" style={{
            width: 200
          }} onChange={handleChange.bind(this)}>
            <Option value="0">全部</Option>
            <Option value="1">正常显示</Option>
            <Option value="2">软删除</Option>
          </Select>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="primary">检索</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="primary">新增分类</Button>
        </div>
        <div>
          <Table columns={columns} dataSource={data} pagination={pagination}/>
        </div>
        <div></div>
      </div>
    );
  };

  return (
    <div className={styles.normal}>
      {renderList()}
    </div>
  );
};

Todos.propTypes = {};

function filter(todos, pathname) {
  const newList = todos.list.filter(todo => {
    if (pathname === '/questions') {
      return !todo.isComplete;
    }
    if (pathname === '/completed') {
      return todo.cases;
    }
    return true;
  });
  return {
    ...todos,
    list: newList
  };
}

function mapStateToProps({
  todos
}, {location}) {
  return {
    todos: filter(todos, location.pathname)
  };
}

export default connect(mapStateToProps)(Todos);
