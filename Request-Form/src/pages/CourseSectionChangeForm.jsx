import React from "react";
import "./CourseSectionChangeForm.css";

const CourseSectionChangeForm = () => {
  return (
    <>
      <div className="container">
        <h2>ใบคำร้องขอเปลี่ยนกลุ่มเรียน</h2>

        <form>
          <div className="grid-container">
            <div></div>

            <div className="form-info">
              <label>ข้าพเจ้า (นาย/นาง/นางสาว)/(Mr./Mrs./Miss)</label>
              <input type="text" />
            </div>

            <div className="form-info">
              <label>รหัสนักศึกษา/Student ID</label>
              <input type="number" />
            </div>
          </div>

          <div className="flex-container">
            <div className="form-info">
              <div>นักศึกษาภาค</div>
              <input
                type="radio"
                defaultChecked
                id="studentType-regular"
                name="studentType"
              />
              <label>ปกติ</label>
              <input type="radio" id="studentType-special" name="studentType" />
              <label>สมทบ</label>
            </div>

            <div className="form-info">
              <label>ชั้นปีที่</label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="form-info">
              <div>คณะ</div>
              <input className="medium-input" type="text" />
            </div>

            <div className="form-info">
              <div>สาขาวิชา</div>
              <input className="medium-input" type="text" />
            </div>

            <div className="form-info">
              <div>โทรศัพท์ที่ติดต่อได้</div>
              <input className="medium-input" type="text" />
            </div>

            <div className="form-info">
              <label>มีความประสงค์ขอย้ายกลุ่มเรียน ในภาคการศึกษาที่</label>
              <label>
                <input
                  type="radio"
                  id="semester1"
                  name="semester"
                  value="1"
                  defaultChecked
                />
                1
              </label>

              <label>
                <input type="radio" id="semester2" name="semester" value="2" />2
              </label>

              <label>
                <input
                  type="radio"
                  id="semesterSummer"
                  name="semester"
                  value="summer"
                />
                ฤดูร้อน
              </label>
            </div>

            <div className="form-info">
              <div>ปีการศึกษา</div>
              <input className="short-input" type="text" />
            </div>
          </div>

          <div className="form-info">
            <label>เนื่องจาก (กรุณาระบุเหตุผลในการขอเปลี่ยนกลุ่มเรียน)</label>
            <textarea name="#" id="#"></textarea>
          </div>

          <div className="form-info">
            <div>ดังรายวิชาต่อไปนี้</div>
          </div>

          <table className="course-table">
            <thead>
              <tr>
                <th>ลำดับที่</th>
                <th>รหัสวิชา</th>
                <th>ชื่อรายวิชา</th>
                <th>กลุ่มเรียนเดิม</th>
                <th>ลายเซ็น อ.ผู้สอน</th>
                <th>กลุ่มเรียนใหม่</th>
                <th>ลายเซ็น อ.ผู้สอน</th>
                <th>หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((row) => (
                <tr key={row}>
                  <td>{row}</td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="left_student_signature">
            <div className='student-signature'>
            <p>ขอแสดงความนับถือ/Kind regards</p>
            <p>ลงลายมือชื่อ/Student's signature</p>
            </div>
          </div>

          <div className="submit-btn">
            <button type="submit">ส่งคำร้อง</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CourseSectionChangeForm;
