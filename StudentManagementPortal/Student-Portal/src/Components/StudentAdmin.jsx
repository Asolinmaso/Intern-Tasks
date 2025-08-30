import React from 'react'
import Header from './Student-Admin Section/Header'
import QuickActions from './Student-Admin Section/QuickActions'
import StudentSearch from './Student-Admin Section/StudentSearch'
import StudentTable from './Student-Admin Section/StudentTable'
import ExportFooter from './Student-Admin Section/ExportFooter'
const StudentAdmin = () => {
  return (
    <>
    <Header />
    <QuickActions />
    <StudentSearch />
    <StudentTable/>
    <ExportFooter />
    </>
  )
}

export default StudentAdmin