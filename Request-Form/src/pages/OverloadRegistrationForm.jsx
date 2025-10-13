import React from 'react'
import './OverloadRegistrationForm.css';

const OverloadRegistrationForm = () => {
  return (
    <>

    <div className='container'>
      <h2>ใบคำร้องขอลงทะเบียนเรียนเกินกว่าหน่วยกิตที่กำหนด</h2>

      <form>

        <div className='form-head'>
          <label>เรื่อง/Subject</label>
          <label>ขอลงทะเบียนเรียนเกินกว่าหน่วยกิตที่กำหนด</label>
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
            <label>ชั้นปีที่/Year</label>
            <input type="text" />
          </div>
          
          <div className='form-info'>
            <label>นักศึกษาภาค/Student Program</label>
          </div>

          <div className='form-info'>
            <label>
              <input type="checkbox" />ปกติ/Full-Time Program Student
            </label>
          </div>
          
          <div className='form-info'>        
            <label>
              <input type="checkbox"/>นอกเวลาราชการ/Part Time Program Student
            </label>
          </div>

        </div>  

          <div className='form-info'>
            <label>คณะ/สถาบัน/สำนัก/Faculty/Institution</label>
            <input type="text" />
          </div>
          
          <div className='form-info'>
            <label>สาขาวิชา/แขนงวิชา/วิชาเอก/Major</label>
            <input type="text" />
          </div>
          
        <div className='grid-container'>

          <div className='form-info'>
            <label>โทรศัพท์มือถือ/Tel</label>
            <input type="tel" />
          </div>

          <div className='form-info'>
            <label>LINE ID</label>
            <input type="text" />
          </div>

          <div className='form-info'>
            <label>E-mail</label>
            <input type="email" />
          </div>

        </div>

        <div className='flex-container'>

          <div className='form-info'>
            <div className='body-closing'>
              <label>
                มีความประสงค์ ขอลงทะเบียนเรียนเกินกว่าหน่วยกิตที่กำหนด จำนวน <input className='short-input' type="text" />หน่วยกิต 
              </label>
            </div>
          </div>
          
          <div className='form-info'>
            <label>
              ในภาคการศึกษาที่
            </label>

            <select name="term" id="term">
              <option value="term-1">1</option>
              <option value="term-2">2</option>
            </select>
            
          </div>
          
          <div className='form-info'>
            <label>
              ปีการศึกษา <input className='short-input' type="text" />
            </label>
          </div>
          
          <div className='form-info'>
            <label>
              รวมหน่วยกิตที่ลงทะเบียนในภาคการศึกษานี้ทั้งสิ้น <input className='short-input' type="text" />หน่วยกิต
            </label>
          </div>
          
          <div className='form-info'>
            <label>
              เกรดเฉลี่ยสะสม (GPA) <input className='short-input' type="text" />หน่วยกิต
            </label>
          </div>
          
        </div>
          
        
        <div className='grid-container-checkbox'>

            <div>เนื่องจาก</div>
            <div>
              <div>
                <label><input type="checkbox" />ภาคการศึกษาสุดท้ายที่สำเร็จการศึกษาตามหลักสูตร</label>
              </div>

              <div>
                <label><input type="checkbox" />อื่น ๆ ระบุ</label>
                <input type="text" />
              </div>
            </div>

        </div>

        <div className='grid-container-checkbox'>

            <div>ซึ่งเป็นไปตามเงื่อนไข ดังนี้</div>
            
            <div className='condition-section'>
              <div>
                <label><input type="checkbox" />เคยลงทะเบียนเรียนเกินกว่าหน่วยกิตที่กำหนด ในภาคการศึกษาที่</label>

                <select name="term" id="term">
                  <option value="term-1">1</option>
                  <option value="term-2">2</option>
                </select>
                
                <label>ปีการศึกษา</label>
                <input type="text" />
              </div>

              <div>
                <label><input type="checkbox" />ไม่เคยลงทะเบียนเรียนเกินกว่าหน่วยกิตที่กำหนด</label>
              </div>           
            </div>

        </div>


        <div className='closing'>
          จึงเรียนมาเพื่อโปรดทราบ และพิจารณาดำเนินการต่อไป/For your consideration
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

export default OverloadRegistrationForm