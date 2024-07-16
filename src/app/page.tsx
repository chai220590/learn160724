"use client";
import React, { useState } from "react";
import "./styles.css";

const MyButton = ({ children }: any) => {
  return (
    <div
      style={{
        cursor: "pointer",
        backgroundColor: "#ff000099",
        borderRadius: 10,
        padding: 10,
        textAlign: "center",
        margin: 10,
        width: 120,
        color: "white",
      }}
    >
      {children}
    </div>
  );
};

type DienThoaiProps = {
  name: string;
};

const DienThoai = ({ name }: any) => {
  return <div>{name}</div>;
};

function page() {
  return (
    <div>
      <DienThoai name="nokia" />
      <DienThoai name={"apple"} />
      <MyButton>Click me</MyButton>
      <h1
        style={{
          color: "red",
          backgroundColor: "#ff000010",
          fontSize: 20,
        }}
      >
        Components
      </h1>
      <h1 className="the-h1">Props</h1>
      <h1 className="bg-abc">State</h1>

      <StudentInfo name="Hải" old="12" />
      <StudentInfo name="Y" old="14" />
      <StudentInfo name="Tèo" old="21" />

      <div>bong de</div>
      <BongDen />

      <HinhHoc />
    </div>
  );
}

export default page;

const HinhHoc = () => {
  // state color
  const [color, setColor] = useState("yellow");
  let mauSac = "blue";

  const onChangeColor = () => {
    setColor("green");
  };

  // viet ham
  function HamSo1() {}

  //
  const HamSo2 = () => {};

  // Object

  const hinhVuong = {
    chieuDai: 10,
    chieuRong: 20,
  };

  console.log({ hinhVuong });

  return (
    <div>
      <p>Hinh hoc</p>

      <button
        onClick={() => {
          mauSac = "red";
        }}
      >
        aaaa
      </button>

      <HinhTron color={color} />
      <HinhVuong color={color} onClick={onChangeColor} />
      <button onClick={onChangeColor}>Doi Mau Xanh La</button>
    </div>
  );
};

const HinhTron = ({ color }: any) => {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: color,
      }}
    ></div>
  );
};

const HinhVuong = ({ color, onClick }: any) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: 50,
        height: 50,
        backgroundColor: color,
      }}
    ></div>
  );
};

const BongDen = () => {
  // khai báo một state màu
  const [color, setColor] = useState("white");

  console.log({ color });

  // xử lý khi nhấn vào mửo đèn
  const moDen = () => {
    setColor("yellow");
  };

  // xử lý tắt đèn
  const tatDen = () => {
    setColor("white");
  };

  return (
    <div>
      <div
        style={{
          height: 10,
          width: 200,
          backgroundColor: color,
        }}
      ></div>

      <div onClick={moDen}>Mở</div>
      <div onClick={tatDen}>Tắt</div>
    </div>
  );
};

const StudentInfo = ({ name, old }: any) => {
  return (
    <div style={{ marginBottom: 10 }}>
      <p>Tên:{name}</p>
      <p>Tuổi:{old}</p>
    </div>
  );
};
