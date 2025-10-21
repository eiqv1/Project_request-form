import React from "react";

const AdminTeacherManagement = () => {
  return (
    <>
      <div className="container">
        <div className="text-center text-xl font-bold">เพิ่มข้อมูลอาจารย์</div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium">รหัสประจำตัว/ID</label>
            <input
              className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
              type="text"
              name="teacherId"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              รหัสผ่าน/Password
            </label>
            <input
              className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
              type="password"
              name="teacherPass"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">ชื่อ</label>
            <input
              className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
              type="text"
              name="firstName"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">นามสกุล</label>
            <input
              className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
              type="text"
              name="lastName"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">ตำแหน่ง</label>
            <select name="position" required>
              <option value="">-- โปรดเลือกตำแหน่ง --</option>
              <option value="อาจารย์">อาจารย์</option>
              <option value="หัวหน้าสาขา">หัวหน้าสาขา</option>
              <option value="รองคณะบดี">รองคณะบดี</option>
              <option value="คณะบดี">คณะบดี</option>
              <option value="งานทะเบียน">งานทะเบียน</option>
            </select>
          </div>

          <div className="text-center">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
              type="submit"
            >
              บันทึกข้อมูล
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminTeacherManagement;
