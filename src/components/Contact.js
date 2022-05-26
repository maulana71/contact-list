import React, { useState } from "react";
import List from "./List";
import { uid } from "uid";
import { message } from "antd";

function Contact() {
  const [kontaks, setKontaks] = useState([
    {
      id: 1,
      name: "Maulana Hafid",
      telp: "08818046231",
    },
    {
      id: 2,
      name: "Mas Ryan",
      telp: "08787843242",
    },
  ]);
  const success = () => {
    message.success("contact posted successfully");
  };

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [formData, setFormData] = useState({
    name: "",
    telp: "",
  });

  function handleChange(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let data = [...kontaks];

    if (formData.name === "") {
      return false;
    }
    if (formData.telp === "") {
      return false;
    }
    if (isUpdate.status) {
      data.forEach((kontak) => {
        if (kontak.id === isUpdate.id) {
          kontak.name = formData.name;
          kontak.telp = formData.telp;
        }
      });
    } else {
      data.push({ id: uid(), name: formData.name, telp: formData.telp });
    }
    //   menambahkan kontak
    setIsUpdate({ id: null, status: false });
    setKontaks(data);
    setFormData({ name: "", telp: "" });
  }

  function handleEdit(id) {
    setIsUpdate({ id: id, status: true });
    let data = [...kontaks];
    let foundData = data.find((kontak) => kontak.id === id);
    setFormData({ ...data, name: foundData.name, telp: foundData.telp });
  }

  function handleDelete(id) {
    let data = [...kontaks];
    let filteredData = data.filter((kontak) => kontak.id !== id);
    setKontaks(filteredData);
  }

  return (
    <div className="text-center bg-gray-200">
      <div className="bg-neutral-400 min-h-screen lg:w-7/12 mx-auto px-2">
        <h1 className="text-2xl px-3 py-3">My Contact List</h1>

        <form className="px-3 py-4 " onSubmit={handleSubmit}>
          <div className=" space-x-4 ml-3">
            <label>Name</label>
            <input
              value={formData.name}
              onChange={handleChange}
              className=" border border-black "
              type="text"
              name="name"
            />
          </div>
          <div className=" space-x-4 py-4">
            <label>No. Telp</label>
            <input
              onChange={handleChange}
              value={formData.telp}
              className="border border-black "
              type="text"
              name="telp"
            />
          </div>
          <div>
            <button
              onClick={success}
              type="submit"
              className="mb-4 bg-blue-500 shadow-lg shadow-blue-500/50 text-white px-6 py-1 rounded-md"
            >
              Save
            </button>
          </div>
        </form>

        <List
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          data={kontaks}
        />
      </div>
    </div>
  );
}

Contact.propTypes = {};

export default Contact;
