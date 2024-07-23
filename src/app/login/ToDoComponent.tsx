import React, { useState } from "react";

function ToDoComponent() {
  const [todoList, setTodoList] = useState<any>([]);
  const [newTodo, setNewToDo] = useState("");

  // khai báo giá trị cần được thay đổi
  const [editTodo, setEditTodo] = useState({
    index: "",
    value: "",
  });

  console.log("EDIT TODO", editTodo);

  console.log("TODO LIST", todoList);

  return (
    <div>
      <div>
        <input
          style={{
            backgroundColor: "#cccccc30",
            padding: 10,
          }}
          placeholder="Nhập tên công việc mới"
          value={newTodo}
          onChange={(event) => {
            setNewToDo(event.target.value);
          }}
        />
        <button
          onClick={() => {
            // set giá trị trong ô input vào TodoList
            // ... truớc array
            // trải dài dữ liệu trong array
            // ví dụ const arrayVidu = ["abc","123"];
            // ...arrayVidu => "abc","123"
            setTodoList([...todoList, newTodo]);
            setNewToDo("");
          }}
        >
          Thêm mới
        </button>
      </div>
      <div>
        <input
          style={{
            backgroundColor: "#cccccc30",
            padding: 10,
          }}
          placeholder="Sữa dữ liệu"
          value={editTodo.value}
          onChange={(event) => {
            setEditTodo({
              ...editTodo,
              value: event.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            const newArrary = todoList.map((phanTu, index) => {
              if (index === editTodo.index) {
                return editTodo.value;
              } else {
                return phanTu;
              }
            });

            setTodoList(newArrary);
            setEditTodo({
              index: "",
              value: "",
            });
          }}
        >
          Save
        </button>
      </div>
      <table>
        <tr>
          <td
            style={{
              padding: 10,
            }}
          >
            STT
          </td>
          <td
            style={{
              padding: 10,
            }}
          >
            Công việc
          </td>
          <td
            style={{
              padding: 10,
            }}
          >
            Xóa
          </td>
          <td
            style={{
              padding: 10,
            }}
          >
            Edit
          </td>
        </tr>
        {todoList.map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{item}</td>
              <td>
                <button
                  onClick={() => {
                    // thuộc tính filter của array

                    // biến array sau khi filter

                    // filter chính là 1 hàm có sẳn của array
                    // nhiệm vụ trả về đúng điều kiện lọc
                    const filtered = todoList.filter((motPhanTuCuaArray) => {
                      return motPhanTuCuaArray !== item;
                    });

                    // set lại lại mãng đã đc lọc
                    setTodoList(filtered);
                  }}
                >
                  delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    setEditTodo({
                      index: index,
                      value: item,
                    });
                  }}
                >
                  Sữa
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ToDoComponent;
