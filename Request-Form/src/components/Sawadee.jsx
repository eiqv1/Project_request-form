import { useState } from "react";
import './Sawadee.css';

function Sawadee () {
    const [data, setData] = useState ([
        {id: 1, name: "อิคคิว", gender:"ชาย"},
        {id: 2, name: "ลูกหมี", gender:"หญิง"},
        {id: 3, name: "โค้ก", gender:"ชาย"}
    ])

    const [age, setAge] = useState(20)

    

    return (
        <>
        <h1>ประชากรทั้งหมดมี {data.length} คน</h1>
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.name} | {item.gender}</li>
            ))}
        </ul>

        <h2>อายุ {age}</h2>
        <button onClick={()=>setAge(age+1)}>เพิ่ม</button>
        <button onClick={()=>setAge(age-1)}>ลด</button>
        <button onClick={()=>setAge(20)}>รีเซ็ต</button>
        <hr />
        <table border={2} cellPadding={30}>
            <thead>
                <tr>
                    <th>ชื่อ</th>
                    <th>อาจารย์</th>
                    <th>วิชา</th>
                </tr>
            </thead>
            <tbody align='center'>
                <tr>
                    <td>คือ</td>
                    <td>อะไร</td>
                    <td>got it</td>
                </tr>
                <tr>
                    <td>I</td>
                    <td>am</td>
                    <td>atomic</td>
                </tr>
            </tbody>
        </table>

        <hr />

        <p className="H1">Learn CSS</p>

        <div className="Test">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perspiciatis.</div>


        </>
    );
}

export default Sawadee;