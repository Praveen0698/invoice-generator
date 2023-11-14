import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const TableForm = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !quantity || !price) {
      alert("Fill all details!!");
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount,
      };

      setDescription("");
      setQuantity("");
      setPrice("");
      setAmount("");
      setList([...list, newItems]);
      setIsEditing(false);
    }
  };

  //   delete code

  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
  };

  //   editing code

  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
    setAmount(editingRow.amount);
  };

  useEffect(() => {
    const rows = document.querySelectorAll(".amount");
    let sum = 0;
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  });

  useEffect(() => {
    const calculateAmt = (amount) => {
      setAmount(quantity * price);
    };

    calculateAmt(amount);
  }, [amount, quantity, price, setAmount]);

  // calculate total amount code

  return (
    <div className="tableform">
      <form onSubmit={handleSubmit}>
        <div className="desc">
          <label htmlFor="description">Enter product description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Enter product description"
            autoComplete="off"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="quan">
          <div>
            <label htmlFor="quantity">Enter product quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Enter product quantity"
              autoComplete="off"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="price">Enter product price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Enter product price"
              autoComplete="off"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="amount">Enter product amount</label>
            <p>{amount}</p>
          </div>
        </div>

        <button
          type="submit"
          className=" my-3 font-bold bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          {isEditing ? "Editing Table Item" : "Add Table Item"}
        </button>
      </form>

      <table width="100%" className="my-10">
        <thead>
          <tr className="bg-gray-100">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr className="my-2" key={item.id}>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td className="amount">{item.amount}</td>
                <td>
                  <button
                    className=" font-bold bg-red-500 text-white p-1 rounded shadow border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300"
                    onClick={() => deleteRow(item.id)}
                  >
                    <AiOutlineDelete />
                  </button>
                </td>
                <td>
                  <button
                    className=" font-bold bg-green-500 text-white p-1 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300"
                    onClick={() => editRow(item.id)}
                  >
                    <AiOutlineEdit />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <h2 className="text-gray-800 text-2xl font-bold flex justify-end my-2">
          Rs. {total.toLocaleString()}
        </h2>
      </div>
    </div>
  );
};

export default TableForm;
