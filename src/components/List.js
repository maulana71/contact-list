import React from "react";

function List({ data, handleDelete, handleEdit }) {
  return (
    <div className="list-group">
      {data.map((kontak) => {
        return (
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h4 mb-1>{kontak.name}</h4>
              <div>
                <button
                  onClick={() => handleEdit(kontak.id)}
                  className="bg-blue-500 rounded-md px-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(kontak.id)}
                  className="bg-red-500 ml-4 rounded-md px-2"
                >
                  Delete
                </button>
              </div>
            </div>
            <p mb-1>{kontak.telp}</p>
          </div>
        );
      })}
    </div>
  );
}

export default List;
