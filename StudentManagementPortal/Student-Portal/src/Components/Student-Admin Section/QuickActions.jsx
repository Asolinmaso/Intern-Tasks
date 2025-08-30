import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { CiDollar } from "react-icons/ci";
import { FaMailBulk } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { MdDriveFolderUpload } from "react-icons/md";
import './QuickActions.css'; 

const QuickActions = () => {
  return (
    <Card className='p-3 my-3'>
      <Row>
        <Col md={3}>
          <Card className='actioncard text-center shadow-sm p-3'>
            <div className='icon-bg'><CiDollar size={24} /></div>
            <div>Fee Payment Status</div>
          </Card>
        </Col>

        <Col md={3}>
          <Card className='actioncard text-center shadow-sm p-3'>
            <div className='icon-bg'><FaMailBulk size={24} /></div>
            <div>Generate Bulk Registration Receipt</div>
          </Card>
        </Col>

        <Col md={3}>
          <Card className='actioncard text-center shadow-sm p-3 position-relative'>
            <div className='icon-bg'><MdOutlineVerifiedUser size={24} /></div>
            <div>Verification Request</div>
          </Card>
        </Col>

        <Col md={3}>
          <Card className='actioncard text-center shadow-sm p-3'>
            <div className='icon-bg'><MdDriveFolderUpload size={24} /></div>
            <div>Upload Result/Documents</div>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default QuickActions;
