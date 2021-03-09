import React from 'react';
import { Drawer, Card, Button, Typography, Icon, Row, Col, Spin } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined, RiseOutlined, UpSquareOutlined } from '@ant-design/icons';
import GradeForm from './gradeForm'
import TeacherForm from './teacherForm'
import AdvisoryForm from './advisoryForm'
import AdvisorAction from './advisoryAction';

import GradeAction from './gradeAction'
import StudentGradeTable from '../userDetails/gradeTable'

import GradeTable from './gradeTable'
import TeacherAction from './teacherAction';

const GradePage = () => {


  let {
    addGrade,
    showGradeVisible,
    setShowGradeVisible,
    showGrade,
    grade2Details,
    selectedGrade,
    editGrade,
    selectedTeacher,
    selectedGradeUser,
    upgradeStudent,
    setSelectedListOfStudent,
    loading
  } = GradeAction({});

  let {
    showTeacherVisible,
    hideTeacher,
    showTeacher,
    add,
    selectedTeacherAssignedGrade2,
    selectedTeacherAssgined
  } = TeacherAction({});

  let {
    showAdvisorVisible,
    hideAdvisor,
    showAdvisor,
    addAdvisor,
    selectedAdvisoryAssignedGrade2,
    selectedAdvisoryAssgined
  } = AdvisorAction({});


  return (
    <Card className="h-82 p-70">
        <Spin spinning={loading} delay={0}>
    <Row className="mt-15">
      <Col lg={{ span: 13 }}>
        <Typography.Title level={3} className="ml-15">Grade2 Management</Typography.Title>
      </Col>
      <Col lg={{ span: 10 }}>
      {JSON.parse(sessionStorage.user).role === "Admin" ?       <Button className="right btn-add ml-10" type="save " onClick={() => showTeacher("2")}>
          <PlusCircleOutlined type="add-circle" /> Add teacher
             </Button>: null
             }
                           {JSON.parse(sessionStorage.user).role === "Admin" ?       <Button className="right ml-10 bg-gray text-white" type="save " onClick={() => showAdvisor("2")}>
          <PlusCircleOutlined type="add-circle" /> Add Advisor
             </Button> : null}
             {JSON.parse(sessionStorage.user).role === "Admin" ?   
        <Button className="right btn-save" onClick={() => upgradeStudent()}>
          < RiseOutlined type="minus-circle" /> Upgrade
             </Button>
        : null}
      </Col>
    </Row>
    <Row>
      <Col lg={{ span: "24" }}>
        <GradeTable setSelectedListOfStudent={setSelectedListOfStudent} details={grade2Details.list} />
      </Col>
    </Row>
    <Drawer
              title={
                  <Typography.Title level={4}>
                  Student Info
                  </Typography.Title>
              }
              width={700}
              visible={showGradeVisible}
              onClose={()=> { setShowGradeVisible(false)}}
              bodyStyle={{ paddingBottom: 80 }}
          >
             <GradeForm upgradeStudent={upgradeStudent} add={addGrade} update={editGrade} selectedTeacher={selectedTeacher} selectedGrade={selectedGrade} gradeLevel={"2"} selectedTeacherAssignedGrade={selectedTeacherAssignedGrade2}/>
             <StudentGradeTable details={selectedGradeUser ? selectedGradeUser: []}/>
          </Drawer>

          <Drawer
              title={
                  <Typography.Title level={4}>
                  Teachers for grade 2
                  </Typography.Title>
              }
              width={700}
              visible={showTeacherVisible}
              onClose={()=> hideTeacher()}
              bodyStyle={{ paddingBottom: 80 }}
          >
             <TeacherForm selectedTeacherAssgined={selectedTeacherAssgined} add={add} selectedTeacher={selectedTeacher} gradeLevel={"2"}/>
          </Drawer>

          <Drawer
              title={
                  <Typography.Title level={4}>
                  Advisor for grade 2
                  </Typography.Title>
              }
              width={700}
              visible={showAdvisorVisible}
              onClose={()=> hideAdvisor()}
              bodyStyle={{ paddingBottom: 80 }}
          >
             <AdvisoryForm selectedTeacherAssgined={selectedAdvisoryAssignedGrade2} selectedTeacher={selectedTeacher} add={addAdvisor} gradeLevel={"2"}/>
          </Drawer>
    </Spin>
  </Card>
	
      
  );
}

export default GradePage;

