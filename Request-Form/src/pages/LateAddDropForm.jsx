import React from "react";
import "./LateAddDropForm.css";

const LateAddDropForm = () => {
  return (
    <>
      <div className="container">
        <h2>ใบคำร้องขอเพิ่ม - ถอนรายวิชาล่าช้า</h2>

        <form>
          <div className="form-head">
            <label>เรื่อง/Subject</label>
            <label>ขอเพิ่ม - ถอนรายวิชาล่าช้า</label>
          </div>

          <div className="form-head">
            <label>เรียน/To</label>
            <input type="text" />
          </div>

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
              <div>คณะ</div>
              <input className="medium-input" type="text" />
            </div>

            <div className="form-info">
              <div>ที่อยู่ปัจจุบันเลขที่</div>
              <input className="short-input" type="text" />
            </div>

            <div className="form-info">
              <div>หมู่ที่</div>
              <input className="short-input" type="text" />
            </div>

            <div className="form-info">
              <div>หมู่บ้าน</div>
              <input className="medium-input" type="text" />
            </div>

            <div className="form-info">
              <div>ซอย</div>
              <input className="medium-input" type="text" />
            </div>

            <div className="form-info">
              <div>ถนน</div>
              <input className="medium-input" type="text" />
            </div>

            <div className="form-info">
              <div>ตำบล/แขวง</div>
              <input className="medium-input" type="text" />
            </div>

            <div className="form-info">
              <div>อำเภอ/เขต</div>
              <input className="medium-input" type="text" />
            </div>

            <div className="form-info">
              <div>จังหวัด</div>
              <input className="medium-input" type="text" />
            </div>

            <div className="form-info">
              <div>รหัสไปรษณีย์</div>
              <input className="short-input" type="text" />
            </div>

            <div className="form-info">
              <div>โทรศัพท์</div>
              <input className="medium-input" type="text" />
            </div>
          </div>

          <div className="flex-container">
            <div className="form-info">
              <div className="body-closing">
                <label>มีความประสงค์ขอ</label>
                <input type="radio" id="addCourse" name="requestType" value="add" />
                <label>เพิ่มรายวิชา</label>
                <input type="radio" id="withdrawCourse" name="requestType" value="withdraw" />
                <label>ถอนรายวิชา</label>
                <input type="radio" id="lateAddWithdraw" name="requestType" value="late" />
                <label>เพิ่มและถอนรายวิชาล่าช้า</label>
              </div>
            </div>

            <div className="form-info">
              <div>ในภาคการศึกษาที่</div>
              <select name="term" id="term">
                <option value="term-1">1</option>
                <option value="term-2">2</option>
              </select>
            </div>

            <div className="form-info">
              <label>ปีการศึกษา</label>
              <input className="short-input" type="text" />
            </div>
            
            <div className="form-info">
              <label>เนื่องจาก</label>
              <input className="long-input" type="text" />
            </div>

            <div className="form-info">
              <label>และอาจารย์ประจำวิชาได้รับรองว่านักศึกษาได้เข้าศึกษาเกิน 80% ของเวลาเรียนทั้งหมด</label>
            </div>

          </div>

          <div className="form-info">
            <div>โดยมีรายวิชาที่ต้องการเพิ่ม-ถอน ดังนี้</div>
          </div>

          <strong>วิชาที่ต้องการเพิ่ม</strong>

          <table className="course-table">
            <thead>
              <tr>
                <th>ลำดับที่</th>
                <th>รหัสวิชา</th>
                <th>ชื่อรายวิชา(ภาษาอังกฤษ)</th>
                <th>SEC.</th>
                <th>หน่วยกิต</th>
                <th>ลายเซ็นอาจารย์ประจำวิชา</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((row) => (
                <tr key={row}>
                  <td>{row}</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <strong>วิชาที่ต้องการถอน</strong>

          <table className="course-table">
            <thead>
              <tr>
                <th>ลำดับที่</th>
                <th>รหัสวิชา</th>
                <th>ชื่อรายวิชา(ภาษาอังกฤษ)</th>
                <th>SEC.</th>
                <th>หน่วยกิต</th>
                <th>ลายเซ็นอาจารย์ประจำวิชา</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((row) => (
                <tr key={row}>
                  <td>{row}</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="left_student_signature">
            <div className="student-signature">
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

export default LateAddDropForm;