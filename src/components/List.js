import React from "react";
import { message } from "antd";

const error = () => {
  message.error("contact deleted succsessfully");
};

function List({ data, handleDelete, handleEdit }) {
  return (
    <div className="list-group text-center">
      {data.map((kontak) => {
        return (
          <div>
            <div>
              <h4 mb-1>{kontak.name}</h4>
              <div className="-mt-2">
                <p mb-1>{kontak.telp}</p>
              </div>
            </div>
            <div className="-mt-2 mb-4">
              <button
                onClick={() => {
                  handleEdit(kontak.id);
                }}
                className="bg-stone-200 rounded-md px-4"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  handleDelete(kontak.id);
                  error();
                }}
                className="text-white bg-red-600 ml-4 rounded-md px-2"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
