import React from 'react';
import { Drawer, Card, Button, Typography, Icon, Row, Col, Input } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import UserForm from './userForm'

import UserAction from './userAction'
import TimeKeepingAction from '../timeKeeping/timeKeepingAction'

import UserTable from './userTable'

const EmployeePage = () => {


  let {
    addUser,
    showUserVisible,
    setShowUserVisible,
    showUser,
    studentList,
    selectedUser,
    editUser,
    selectedParent,
    filterStudent
  } = UserAction({});

  let{
    today
  } = TimeKeepingAction({});

  return (
    <Card className="h-82 p-70">
    <Row className="mt-15">
      <Col lg={{ span: 14 }}>
        <Typography.Title level={3} className="ml-15">Student List</Typography.Title>
      </Col>
      {JSON.parse(sessionStorage.user).role === "Admin" ?
      <>
        <Col lg={{ span: 6 }}>
          <Input placeholder="Search" onChange={(e)=> filterStudent(e.target.value)}/>
          {/* <Button className="right" type="danger " onClick={() => console.log("lol")}>
            <MinusCircleOutlined type="minus-circle" /> Delete User
          </Button> */}
        </Col>
        <Button  className="addUser btn-add" onClick={()=> showUser()}>
          <PlusCircleOutlined type="plus-circle" /> Add User
        </Button>
      </>
        : null}

    </Row>
    <Row>
      <Col lg={{ span: "24" }}>
        <UserTable details={studentList} />
      </Col>
    </Row>
    <Drawer
              title={
                  <Typography.Title level={4}>
                  {selectedUser && selectedUser._id ? "Update User" : "Add User"}
                  </Typography.Title>
              }
              width={550}
              visible={showUserVisible}
              onClose={()=> { setShowUserVisible(false)}}
              bodyStyle={{ paddingBottom: 80 }}
          >
             <UserForm add={addUser} update={editUser} selectedUser={selectedUser} selectedParent={selectedParent}/>
          </Drawer>
    
  </Card>
	
      
  );
}

export default EmployeePage;

