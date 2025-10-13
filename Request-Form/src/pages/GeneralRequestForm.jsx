import React from 'react'
import './GeneralRequestForm.css';

const GeneralRequestForm = () => {
  return (
    <>

    <div className='container'>
      <h2>ใบคำร้องทั่วไป</h2>

      <form>

        <div className='form-head'>
          <label>เรื่อง/Subject</label>
          <input type="text" />
        </div>

        <div className='form-head'>
          <label>เรียน/To</label>
          <input type="text" />
        </div>

        <div className='grid-container'>

          <div className='form-info'>
            <label>ข้าพเจ้า (นาย/นาง/นางสาว)/(Mr./Mrs./Miss)</label>
            <input type="text" />
          </div>

          <div className='form-info'>
            <label>รหัสนักศึกษา/Student ID</label>
            <input type='number' />
          </div>

          <div className='form-info'>
            <label>สาขาวิชา/Major</label>
            <input type="text" />
          </div>
          
          <div className='form-info'>
            <label>หลักสูตร/Course</label>
            <input type="number" />
            <span>ปี/year</span>
          </div>

          <div className='form-info'>
            <label>ที่อยู่ปัจจุบันเลขที่/Number</label>
            <input type="text" />
          </div>
          
          <div className='form-info'>
            <label>หมู่ที่/Moo</label>
            <input type="text" />
          </div>
          
          <div className='form-info'>
            <label>หมู่บ้าน/Mooban</label>
            <input type="text" />
          </div>
          
          <div className='form-info'>
            <label>ซอย/Soi</label>
            <input type="text" />
          </div>
          
          <div className='form-info'>
            <label>ถนน/Street</label>
            <input type="text" />
          </div>

          <div className='form-info'>
            <label>ตำบล/Tambon</label>
            <input type="text" />
          </div>

          <div className='form-info'>
            <label>อำเภอ/Amphoe</label>
            <input type="text" />
          </div>

          <div className='form-info'>
            <label>จังหวัด/Province</label>
            <input type="text" />
          </div>

          <div className='form-info'>
            <label>รหัสไปรษณีย์/Post Code</label>
            <input type="text" />
          </div>

          <div className='form-info'>
            <label>โทรศัพท์มือถือ/Mobile</label>
            <input type="tel" />
          </div>

          <div className='form-info'>
            <label>Facebook (ชื่อ)</label>
            <input type="text" />
          </div>

          <div className='form-info'>
            <label>LINE (ชื่อ)</label>
            <input type="text" />
          </div>

          <div className='form-info'>
            <label>E-mail</label>
            <input type="email" />
          </div>

        </div>

        <div className='form-info'>
          <label>มีความประสงค์/would like to</label>
          <textarea rows={3}></textarea>
        </div>

        <div className='form-info'>
          <p>จึงเรียนมาเพื่อโปรดทราบ และพิจารณาดำเนินการต่อไป/For your consideration</p>
        </div>

        <div className='student-signature'>
          <p>ขอแสดงความนับถือ/Kind regards</p>
          <p>ลงลายมือชื่อ/Student's signature</p>
        </div>

        <div className='submit-btn'>
          <button type='submit'>ส่งคำร้อง</button>
        </div>

      </form>
      
    </div>

    </>
  )
}

export default GeneralRequestForm