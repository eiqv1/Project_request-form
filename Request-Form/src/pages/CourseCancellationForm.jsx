import React from "react";
import "./CourseCancellationForm.css";

const CourseCancellationForm = () => {
  return (
    <>
      <div className="container">
        <h2>ใบคำร้องขอยกเลิกการลงทะเบียนเรียน</h2>

        <form>
          <div className="form-head">
            <label>เรื่อง/Subject</label>
            <label>ขอยกเลิกการลงทะเบียนเรียน</label>
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
                มีความประสงค์ขอยกเลิกการลงทะเบียนเรียน ในภาคการศึกษาที่
              </div>
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
              <div>โดยมีรายวิชาที่ได้ลงทะเบียน ดังนี้</div>
            </div>
          </div>

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
              {[1, 2, 3, 4, 5].map((row) => (
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

export default CourseCancellationForm;