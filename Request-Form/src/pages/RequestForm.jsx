import React from 'react'
import './RequestForm.css';

const RequestForm = () => {
  return (

    <>

    <div className='container-RequsetSelector'>
        <div className='top-title'>All Student Request Forms</div>
        <div className='title'>แบบคำร้องทั้งหมด</div>
        <hr className='underline-title' />
        <ul className='request-selector'>
            <li><a href="general-request-form">ใบคำร้องทั่วไป</a></li>
            <li><a href="overload-registration-form">ใบคำร้องขอลงทะเบียนเรียนเกินกว่าหน่วยกิตที่กำหนด</a></li>
            <li><a href="underload-registration-form">ใบคำร้องขอลงทะเบียนเรียนต่ำกว่าหน่วยกิตที่กำหนด</a></li>
            <li><a href="retake-registration-form">ทบ.13 ใบคำร้องขอลงทะเบียนเรียนซ้ำ</a></li>
            <li><a href="elective-change-request-form">ทบ.16 ใบคำร้องขอเปลี่ยนวิชาเลือก</a></li>
            <li><a href="course-section-change-form">ใบคำร้องขอเปลี่ยนกลุ่มเรียน</a></li>
            <li><a href="course-withdrawal-with-w-form">ใบคำร้องขอถอนรายวิชาโดยได้รับอักษร W</a></li>
            <li><a href="late-add-drop-form">ใบคำร้องขอเพิ่ม - ถอนรายวิชาล่าช้า</a></li>
            <li><a href="late-registration-form">ใบคำร้องขอลงทะเบียนเรียนล่าช้า</a></li>
            <li><a href="course-cancellation-form">ใบคำร้องขอยกเลิกการลงทะเบียนเรียน</a></li>
            <li><a href="confirm-registration-form">ใบคำร้องขอยืนยันการลงทะเบียนเรียน</a></li>
        </ul>
    </div>
    
    </>
  )
}

export default RequestForm