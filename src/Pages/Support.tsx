import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Copy } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GradientButton from "../UIComponents/GradientButton";
import { IoPerson } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
const Support = () => {
  const [tickets, setTickets] = useState<
    { id: string; category: string; description: string; file?: string }[]
  >([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

  const [messages, setMessages] = useState<
    Record<string, { text: string; time: string }[]>
  >({});
  const [messageInputs, setMessageInputs] = useState<Record<string, string>>(
    {}
  );

  const handleSendMessage = (ticketId: string) => {
    if (!messageInputs[ticketId]?.trim()) return; 

    setMessages((prev) => ({
      ...prev,
      [ticketId]: [
        ...(prev[ticketId] || []),
        { text: messageInputs[ticketId], time: new Date().toLocaleString() },
      ],
    }));

    setMessageInputs((prev) => ({
      ...prev,
      [ticketId]: "",
    }));
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  const handleCopy = (ticketId: string) => {
    navigator.clipboard.writeText(ticketId);
    toast.success("Ticket ID Copied!");
  };

  const handleSubmit = () => {
    if (!category || !description) {
      toast.error("Please fill all required fields.");
      return;
    }

    const newTicket = {
      id: `TICKET-${Date.now()}`,
      category,
      description,
      file: fileName || "",
    };
    setTickets([...tickets, newTicket]);

    // Reset form fields
    setCategory("");
    setDescription("");
    setFileName(null);
  };

  return (
    <div>
      <ToastContainer />
      <div className="">
        <div
          className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-4 relative rounded-3xl mt-4"
          style={{
            background:
              "linear-gradient(105.95deg, rgba(102, 177, 230, 0.2) 24.79%, rgba(41, 84, 163, 0.2) 71.87%)",
            border: "1px solid #2954A3",
            boxShadow: "0px 10.01px 20.03px 0px #07071A26",
          }}
        >
          {/* Form */}
          <div className="p-4 rounded-lg" style={{ background: "#FFFFFF33" }}>
            <p className="text-themeBlue text-lg font-bold">Submit a Request</p>
            <div className="mt-5">
              <div className="deposit-detail mb-4">
                <label className="dark:text-white">Ticket For</label>
                <select
                  className="border border-gray-300 rounded-lg p-2 text-gray-700 w-full mt-2 h-11 dark:bg-transparent dark:text-white"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="" className="dark:bg-black">Select Category</option>
                  <option className="dark:bg-black">Login Issue</option>
                  <option className="dark:bg-black">Deposit Issue</option>
                  <option className="dark:bg-black">Withdraw Issue</option>
                  <option className="dark:bg-black">2FA</option>
                  <option className="dark:bg-black">Register Issue</option>
                  <option className="dark:bg-black">Credit Application</option>
                </select>

                <div className="mt-3">
                  <label className="dark:text-white">Description</label>
                  <textarea
                    className="border border-gray-300 rounded-lg p-4 mt-2 text-gray-700 w-full dark:bg-transparent dark:text-white"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <p className="text-sm text-gray-500 dark:text-white">
                    Please enter the details of your request. A member of our
                    support staff will respond as soon as possible.
                  </p>
                </div>

                {/* File Upload */}
                <div className="mt-4">
                  <div className="flex flex-col items-start space-y-2">
                    <label className="font-semibold dark:text-white">
                      Upload Document (Optional)
                    </label>
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      id="fileInput"
                    />
                    <label
                      htmlFor="fileInput"
                      className="relative px-4 py-2 w-40 text-center cursor-pointer rounded-lg bg-white text-white font-semibold bg-gradient-to-r from-[#01D3FF] to-[#2954A3] transition-all duration-300 ease-in-out"
                    >
                      Upload
                    </label>

                    {fileName && (
                      <p className="text-sm text-themeBlue mt-1">
                        Selected file: {fileName}
                      </p>
                    )}
                  </div>
                  <div className="mt-7">
                    <GradientButton
                      text="Submit"
                      className="w-full p-3 hover:!bg-white"
                      onClick={handleSubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Details */}
          <div>
            <p className="text-themeBlue text-lg font-bold">
              Support Ticket Details
            </p>
            <div className="mt-5">
            <input
              placeholder="Search"
              className="p-2 rounded-md w-full focus-visible:outline-none shadow-[0px_39.87px_39.87px_0px_rgba(69,42,124,0.15)] bg-white dark:text-white dark:bg-inputBg"
            />
            </div>
            {tickets.length === 0 ? (
              <p className="text-gray-500 mt-3">No tickets created yet.</p>
            ) : (
              tickets.map((ticket, index) => (
                <div key={index} className="mt-4">
                  <div
                    className="p-4 flex justify-between items-center cursor-pointer rounded-t-lg"
                    onClick={() =>
                      setAccordionOpen(accordionOpen === index ? null : index)
                    }
                  >
                    <p className="font-semibold text-sm dark:text-white">
                      Sub: {ticket.category}
                    </p>
                    <p className="text-sm dark:text-white">
                      <span className="font-semibold">Ticket ID:</span>{" "}
                      {ticket.id}
                      <button
                        className="ml-2 p-1 bg-white-700 text-sm rounded hover:bg-gray-600 dark:text-white"
                        onClick={() => handleCopy(ticket.id)}
                      >
                        <Copy size={16} />
                      </button>
                    </p>
                    {accordionOpen === index ? (
                      <FaChevronUp className="dark:text-white"  />
                    ) : (
                      <FaChevronDown className="dark:text-white" />
                    )}
                  </div>

                  {accordionOpen === index && (
                    <div className="p-4 rounded-b-lg">
                        <div className="min-h-[50vh] overflow-auto">
                      <div className="inbox-chat bg-white border border-gray-300 p-5 rounded-lg w-full dark:bg-transparent dark:text-white">
                        <div className="flex gap-2">
                          <IoPerson />
                        </div>
                        <p className="mt-2">{ticket.description}</p>
                      </div>
                      <div className="mt-4 space-y-2">
                        {messages[ticket.id]?.map((msg, i) => (
                            
                          <div
                            key={i}
                            className="bg-white border-gray-300 p-5 rounded-lg w-full dark:bg-transparent border dark:text-white"
                          >
                            <div className="flex gap-2">
                              <IoPerson />
                              <span className="text-xs text-gray-500 dark:text-white">
                                {msg.time}
                              </span>
                            </div>
                            <p className="mt-5">{msg.text}</p>
                            
                          </div>
                        ))}
                      </div>
                      </div>
                      <div className="mt-4">
                        <input
                          className="border rounded-lg p-4 w-full h-11 dark:bg-transparent dark:text-white" 
                          placeholder="Type a message..."
                          value={messageInputs[ticket.id] || ""}
                          onChange={(e) =>
                            setMessageInputs({
                              ...messageInputs,
                              [ticket.id]: e.target.value,
                            })
                          }
                        />
                        <div className="text-end relative bottom-7 right-4 dark:text-white">
                        <button onClick={() => handleSendMessage(ticket.id)}>
                        <IoIosSend />
                        </button>
                        </div>
                       
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
