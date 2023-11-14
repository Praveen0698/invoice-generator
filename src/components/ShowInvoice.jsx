import React, { useRef } from "react";
import { useState } from "react";
import { useReactToPrint } from "react-to-print";

import Header from "./Header";
import MainDetails from "./MainDetails";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Table from "./Table";
import Notes from "./Notes";
import Footer from "./Footer";
import TableForm from "./TableForm";

const ShowInvoice = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankHolderName, setBankHolderName] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccNumber, setBankAccNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      {showInvoice ? (
        <>
          <button
            onClick={handlePrint}
            className=" font-bold bg-gray-500 text-white py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
          >
            Print/Download
          </button>

          <div ref={componentRef} className="p-5">
            <Header />
            <MainDetails name={name} address={address} />
            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />
            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />
            <Table
              description={description}
              quantity={quantity}
              price={price}
              amount={amount}
              list={list}
              total={total}
            />
            <Notes notes={notes} />
            <Footer
              name={name}
              email={email}
              phone={phone}
              bankName={bankName}
              bankHolderName={bankHolderName}
              bankAccNumber={bankAccNumber}
              website={website}
            />

            <button
              onClick={() => setShowInvoice(false)}
              className="mt-5 font-bold bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Preview Invoice
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center">
          <div className="form-input">
            <div>
              <label htmlFor="name">Enter your name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="address">Enter your address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email">Enter your email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="phone">Enter your phone number</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="bankName">Enter your bank name</label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Enter your bank name"
                autoComplete="off"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="bankHolderName">
                Enter your bank account holder name
              </label>
              <input
                type="text"
                name="bankHolderName"
                id="bankHolderName"
                placeholder="Enter your bank account holder name"
                autoComplete="off"
                value={bankHolderName}
                onChange={(e) => setBankHolderName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="bankAccNumber">
                Enter your bank account number
              </label>
              <input
                type="text"
                name="bankAccNumber"
                id="bankAccNumber"
                placeholder="Enter your bank account number"
                autoComplete="off"
                value={bankAccNumber}
                onChange={(e) => setBankAccNumber(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="website">Enter your website URL (optional)</label>
              <input
                type="text"
                name="website"
                id="website"
                placeholder="Enter your website URL (optional)"
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="clientName">Enter your client name</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter your Client Name"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="clientAddress">Enter your client address</label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Enter your client address"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="invoiceNumber">Enter your invoice number</label>
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Enter your invoice number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="invoiceDate">Enter your invoice date</label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Enter your invoice date"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="dueDate">Enter your due date</label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Enter your due date"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="notes">Enter your note</label>
              <input
                type="text"
                name="notes"
                id="notes"
                placeholder="Enter a note"
                autoComplete="off"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>

          {/* table form */}

          <TableForm
            description={description}
            setDescription={setDescription}
            quantity={quantity}
            setQuantity={setQuantity}
            price={price}
            setPrice={setPrice}
            setAmount={setAmount}
            amount={amount}
            list={list}
            setList={setList}
            total={total}
            setTotal={setTotal}
          />

          {/* end of table form */}

          <button
            onClick={() => setShowInvoice(true)}
            className="mt-5 font-bold bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Preview Invoice
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowInvoice;
