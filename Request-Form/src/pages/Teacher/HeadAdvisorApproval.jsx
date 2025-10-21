import React from "react";

const HeadAdvisorApproval = () => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-xl">
      <div className="text-center text-xl font-bold mb-6">
        อนุมัตินักศึกษาและเลือกอาจารย์ที่ปรึกษา
      </div>

      <form className="space-y-8">
        {/* ส่วนที่ 1: ข้อมูลนักศึกษา */}
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">รหัสนักศึกษา</label>
              <input
                className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
                type="text"
                name="studentId"
                value="6530400001"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium">ชื่อ</label>
              <input
                className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
                type="text"
                name="firstName"
                value="พลังบวก"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium">นามสกุล</label>
              <input
                className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
                type="text"
                name="lastName"
                value="เชิงลบ"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium">สาขาวิชา</label>
              <input
                className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
                type="text"
                name="major"
                value="เทคโนโลยีสารสนเทศ"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* ส่วนที่ 2: ข้อมูลที่อยู่และการติดต่อ */}
        <div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">เลขที่/Address No.</label>
              <input
                className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
                type="text"
                name="addressNo"
                value="123"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium">หมู่ที่/Moo</label>
              <input
                className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
                type="text"
                name="moo"
                value="5"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium">ซอย/Soi</label>
              <input
                className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
                type="text"
                name="soi"
                value="-"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium">ถนน/Street</label>
              <input
                className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
                type="text"
                name="street"
                value="ประชาสงเคราะห์"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium">ตำบล/Tumbol</label>
              <input
                className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
                type="text"
                name="tumbol"
                value="ดินแดง"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium">อำเภอ/Amphoe</label>
              <input
                className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
                type="text"
                name="amphoe"
                value="ดินแดง"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium">จังหวัด/Province</label>
              <input
                className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
                type="text"
                name="province"
                value="กรุงเทพมหานคร"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium">รหัสไปรษณีย์/Postcode</label>
              <input
                className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
                type="text"
                name="postcode"
                value="10400"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium">เบอร์โทรศัพท์/Phone</label>
              <input
                className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
                type="text"
                name="phone"
                value="0812345678"
                readOnly
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Facebook</label>
              <input
                className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
                type="text"
                name="facebook"
                value="parang+"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* ส่วนที่ 3: เลือกอาจารย์ที่ปรึกษา */}
        <div>
          <select
            className="mt-1 block w-full border-gray-500 rounded-md shadow-md bg-gray-100 px-2 py-1"
            name="advisor"
            required
          >
            <option value="">-- โปรดเลือกอาจารย์ที่ปรึกษา --</option>
            <option value="อ.สมชาย ใจดี">อ.สมชาย ใจดี</option>
            <option value="อ.กานดา ศรีสุข">อ.กานดา ศรีสุข</option>
            <option value="อ.ณัฐพล ทองคำ">อ.ณัฐพล ทองคำ</option>
          </select>
        </div>

        {/* ปุ่มอนุมัติ */}
        <div className="flex justify-center gap-4 pt-4">
          <button
            type="button"
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600"
          >
            อนุมัติ
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
          >
            ไม่อนุมัติ
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeadAdvisorApproval;