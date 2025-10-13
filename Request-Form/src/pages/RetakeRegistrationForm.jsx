import React from 'react'
import './RetakeRegistrationForm.css';

const RetakeRegistrationForm = () => {
  return (
    <>

    <div className='container'>
      <h2>ใบคำร้องขอลงทะเบียนเรียนซ้ำ</h2>

      <form>

        <div className='form-head'>
          <label>เรื่อง/Subject</label>
          <label>ขอลงทะเบียนเรียนซ้ำวิชา</label>
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
            <label>สาขาวิชา</label>
            <input type="text" />
          </div>
          
        </div>

        <div className='flex-container'>

          <div className='form-info'>

            <label>หลักสูตร</label>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <div>ปี</div>

          </div>

          <div className='form-info'>
          
            <div>ปัจจุบันมีแต้มระดับคะแนนเฉลี่ยสะสม(GPA)</div>
            <input type="text" />

          </div>

          <div className='form-info'>

            <div>มีความประสงค์ขอลงทะเบียนเรียนซ้ำวิชา</div>
            <label>ในภาคการศึกษาที่</label>
            <select name="term" id="term">
              <option value="term-1">1</option>
              <option value="term-2">2</option>
            </select>

          </div>

          <div className="form-info">

            <div>ปีการศึกษา</div>
            <input type="text" />

          </div>

        </div>

        <div className='body-closing'>ในรายวิชาดังนี้</div>

        <div className='flex-container-course'>
          
          <div className='form-info-course'>

            <div className='closing'>1. รหัสวิชา</div>
            <input type="text" />

            <div>วิชา (ชื่อภาษาอังกฤษ)</div>
            <input type="text" />

            <div>วิชา (ชื่อภาษาไทย)</div>
            <input type="text" />

            <label>กลุ่มเรียนที่</label>
            <input className='short-input' type="text" />

            <div>จำนวน</div>
            <input className='short-input' type="text" />
            <div>หน่วยกิต</div>

            <div>ซึ่งเคยลงทะเบียนในภาคการศึกษาที่</div>
            <select name="term" id="term">
              <option value="term-1">1</option>
              <option value="term-2">2</option>
            </select>

            <div>ปีการศึกษา</div>
            <input className='short-input' type="text" />

            <div>และได้รับระดับคะแนนตัวอักษร</div>
            <select id="letterGrade" name="letterGrade">
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>

          </div>

        </div>

        <div className='flex-container-course'>
          
          <div className='form-info-course'>

            <div className='closing'>2. รหัสวิชา</div>
            <input type="text" />

            <div>วิชา (ชื่อภาษาอังกฤษ)</div>
            <input type="text" />

            <div>วิชา (ชื่อภาษาไทย)</div>
            <input type="text" />

            <label>กลุ่มเรียนที่</label>
            <input className='short-input' type="text" />

            <div>จำนวน</div>
            <input className='short-input' type="text" />
            <div>หน่วยกิต</div>

            <div>ซึ่งเคยลงทะเบียนในภาคการศึกษาที่</div>
            <select name="term" id="term">
              <option value="term-1">1</option>
              <option value="term-2">2</option>
            </select>

            <div>ปีการศึกษา</div>
            <input className='short-input' type="text" />

            <div>และได้รับระดับคะแนนตัวอักษร</div>
            <select id="letterGrade" name="letterGrade">
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>

          </div>

        </div>
        
        <div className='flex-container-course'>
          
          <div className='form-info-course'>

            <div className='closing'>3. รหัสวิชา</div>
            <input type="text" />

            <div>วิชา (ชื่อภาษาอังกฤษ)</div>
            <input type="text" />

            <div>วิชา (ชื่อภาษาไทย)</div>
            <input type="text" />

            <label>กลุ่มเรียนที่</label>
            <input className='short-input' type="text" />

            <div>จำนวน</div>
            <input className='short-input' type="text" />
            <div>หน่วยกิต</div>

            <div>ซึ่งเคยลงทะเบียนในภาคการศึกษาที่</div>
            <select name="term" id="term">
              <option value="term-1">1</option>
              <option value="term-2">2</option>
            </select>

            <div>ปีการศึกษา</div>
            <input className='short-input' type="text" />

            <div>และได้รับระดับคะแนนตัวอักษร</div>
            <select id="letterGrade" name="letterGrade">
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>

          </div>

        </div>

        <div className='closing'>
          จึงเรียนมาเพื่อโปรดพิจารณา
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

export default RetakeRegistrationForm