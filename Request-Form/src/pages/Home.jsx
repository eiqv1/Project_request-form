import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [selectedPetition, setSelectedPetition] = useState(null);
  const [suggestion, setSuggestion] = useState(""); // ช่องข้อเสนอแนะ

  const petitions = [
    {
      id: 1,
      title: "คำร้องขอเพิ่มรายวิชา",
      studentName: "ณัฐวุฒิ ใจดี",
      studentId: "65310123",
      faculty: "คณะวิทยาศาสตร์",
      major: "สถิติประยุกต์",
      program: "หลักสูตรปริญญาตรี 4 ปี",
      reason: "ต้องการเพิ่มรายวิชาเพื่อให้ครบหน่วยกิต",
    },
    {
      id: 2,
      title: "คำร้องขอถอนรายวิชา",
      studentName: "ปิยวรรณ ศรีสุข",
      studentId: "65310045",
      faculty: "คณะครุศาสตร์",
      major: "คอมพิวเตอร์ศึกษา",
      program: "หลักสูตรครุศาสตรบัณฑิต",
      reason: "ไม่สามารถเข้าเรียนได้ตามตาราง",
    },
    {
      id: 3,
      title: "คำร้องขอเพิ่มและถอนรายวิชาล่าช้า",
      studentName: "ศุภชัย พรหมดี",
      studentId: "65310088",
      faculty: "คณะวิศวกรรมศาสตร์",
      major: "วิศวกรรมคอมพิวเตอร์",
      program: "หลักสูตรปริญญาตรี 4 ปี",
      reason: "มีปัญหาทางสุขภาพในช่วงลงทะเบียน",
    },
    {
      id: 4,
      title: "คำร้องทั่วไป",
      studentName: "สุขใจ สบายดี",
      studentId: "65310100",
      faculty: "คณะบริหารธุรกิจและเทคโนโลยีสารสนเทศ",
      major: "วิทยาการคอมพิวเตอร์",
      program: "หลักสูตรปริญญาตรี 4 ปี",
      reason: "มีปัญหาทางสุขภาพในช่วงลงทะเบียน",
    },
    {
      id: 5,
      title: "คำร้องขอเปลี่ยนกลุ่มเรียน",
      studentName: "สมชาย ชาตรี",
      studentId: "65310177",
      faculty: "คณะบริหารธุรกิจและเทคโนโลยีสารสนเทศ",
      major: "วิทยาการคอมพิวเตอร์",
      program: "หลักสูตรปริญญาตรี 4 ปี",
      reason: "ลงทะเบียนผิดกลุ่มโดยไม่ได้ตั้งใจ",
    },
  ];

  const handleOpenModal = (petition) => {
    setSelectedPetition(petition);
    setSuggestion("");
  };

  const handleCloseModal = () => {
    setSelectedPetition(null);
    setSuggestion("");
  };

  const handleApprove = () => {
    alert(
      `✅ อนุมัติคำร้อง: ${selectedPetition.title}\nข้อเสนอแนะ: ${
        suggestion || "-"
      }`
    );
    handleCloseModal();
  };

  const handleReject = () => {
    alert(
      `❌ ไม่อนุมัติคำร้อง: ${selectedPetition.title}\nข้อเสนอแนะ: ${
        suggestion || "-"
      }`
    );
    handleCloseModal();
  };
  return (
    <>
      <>
        <div className="container">
          <h2 className="page-title">ระบบพิจารณาคำร้อง - ผู้อนุมัติคำร้อง</h2>

          <div className="petition-list">
            {petitions.map((petition) => (
              <div
                key={petition.id}
                className="petition-card"
                onClick={() => handleOpenModal(petition)}
              >
                <div className="petition-title">{petition.title}</div>
                <div className="petition-info">
                  ชื่อนักศึกษา: {petition.studentName}
                </div>
                <div className="petition-info">
                  รหัสนักศึกษา: {petition.studentId}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedPetition && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>{selectedPetition.title}</h3>
              <div className="modal-details">
                <p>
                  <strong>ชื่อนักศึกษา:</strong> {selectedPetition.studentName}
                </p>
                <p>
                  <strong>รหัสนักศึกษา:</strong> {selectedPetition.studentId}
                </p>
                <p>
                  <strong>คณะ:</strong> {selectedPetition.faculty}
                </p>
                <p>
                  <strong>สาขา:</strong> {selectedPetition.major}
                </p>
                <p>
                  <strong>หลักสูตร:</strong> {selectedPetition.program}
                </p>
                <p>
                  <strong>เหตุผล:</strong> {selectedPetition.reason}
                </p>
              </div>

              <div className="modal-suggestion">
                <label htmlFor="suggestion">
                  <strong>ข้อเสนอแนะของผู้อนุมัติ:</strong>
                </label>
                <textarea
                  id="suggestion"
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  placeholder="พิมพ์ข้อเสนอแนะที่นี่..."
                ></textarea>
              </div>

              <div className="modal-actions">
                <button className="btn approve" onClick={handleApprove}>
                  อนุมัติ
                </button>
                <button className="btn reject" onClick={handleReject}>
                  ไม่อนุมัติ
                </button>
                <button className="btn close" onClick={handleCloseModal}>
                  ปิด
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Home;
