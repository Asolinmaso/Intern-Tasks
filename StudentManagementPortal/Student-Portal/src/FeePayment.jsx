import React from 'react'
import Header from './Components/Fee and Payment/Header'
import StudentDetailCard from './Components/Fee and Payment/StudentDetailCard'
import FeeStructure from './Components/Fee and Payment/FeeStructure'
import PastPayments from './Components/Fee and Payment/PastPayments'
const FeePayment = () => {
  return (
    <>
    <Header />
    <StudentDetailCard />
    <FeeStructure />
    <PastPayments />
    </>
  )
}

export default FeePayment