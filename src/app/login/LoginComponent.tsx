import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
// rfce
// react functional component export
function LoginComponent({ setIsLogin }: any) {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("123");

  // mặc định giá trị là false = không hiển thị mật khẩu
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <Input
          label="tài khoản"
          onChange={(event) => {
            //set lại state
            setUsername(event.target.value);
          }}
          value={username}
          style={{
            backgroundColor: "#cccccc30",
          }}
        />
      </div>

      <div
        style={{
          marginBottom: 20,
        }}
      >
        <Input
          label="mật khẩu"
          type={showPassword === false ? "password" : "text"}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
          style={{
            backgroundColor: "#cccccc30",
          }}
        />
        <Button
          onClick={() => {
            console.log("showPassword", showPassword);
            console.log("!showPassword", !showPassword);

            // set lại giá trị đối lập với showPassword hiện tại
            setShowPassword(!showPassword);
          }}
        >
          Hiện-ẩn
        </Button>
      </div>

      <div>
        <Button
          onClick={() => {
            //
            console.log("username", username);
            console.log("password", password);

            // kiểm tra username và password
            if (username === "admin" && password === "123") {
              // xử lý login thành công
              setIsLogin(true);
            } else {
              // hiển thị lỗi
              alert("Tài khoản và mật khẩu không đúng");
            }
          }}
        >
          Đăng nhập
        </Button>
      </div>
    </div>
  );
}

export default LoginComponent;
