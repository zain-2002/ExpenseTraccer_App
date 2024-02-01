'use client'
import React from 'react'
import { Card, Col, Row } from 'antd';
import { useFormContext } from '@/context/FormContext';

const Stats = () => {
  const {formData}= useFormContext()
  let totalIncome=0;
  const incomeType=formData.filter((val)=>{
    return val.type==='Income'
  })
    incomeType.forEach(val => {
      
      totalIncome+=val.amount
    });
    let totalExpense=0;
    const expenseType=formData.filter((val)=>{
      return val.type==='Expense'
    })
    expenseType.forEach(val => {
        
        totalExpense+=val.amount
      });
  
 

  return (
    <div className='mt-8 w-full flex justify-center h-full' >
    <Row gutter={16} className='gap-y-3 w-9/12 md:w-7/12' style={{marginBottom:'50px'}}>
      <Col xs={24} sm={12} md={8} lg={8} xl={8} >
        <Card title="INCOME" bordered={false} className='flex  flex-col items-center'>
          {totalIncome}
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} lg={8} xl={8}>
        <Card title="EXPENSE" bordered={false} className='flex  flex-col items-center '>
          {totalExpense}
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} lg={8} xl={8}>
        <Card title="CURRENT" bordered={false} className='flex  flex-col items-center'>
          {totalIncome-totalExpense}
        </Card>
      </Col>
    </Row>
  
   </div>
  )
}

export default Stats