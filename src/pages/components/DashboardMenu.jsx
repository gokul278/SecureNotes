import React, { useState } from "react";
import { Link } from "react-router-dom";

export const DashboardMenu = (props) => {
  // date checking
  function checkDate(dateString) {
    const inputDate = new Date(dateString);
    const currentDate = new Date();

    // Function to compare dates without considering the time
    const isSameDate = (date1, date2) =>
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate();

    // Check if the input date is today, yesterday, or another day
    if (isSameDate(inputDate, currentDate)) {
      return "today";
    } else {
      // Calculate yesterday's date
      const yesterdayDate = new Date(currentDate);
      yesterdayDate.setDate(currentDate.getDate() - 1);

      if (isSameDate(inputDate, yesterdayDate)) {
        return "yesterday";
      } else {
        return "anotherday";
      }
    }
  }

  const [newcontent, setNewcontent] = useState(false);

  const [editcontent, setEditcontent] = useState({
    status: false,
    id: "",
    title: "",
  });

  const [deletecontent, setDeletecontent] = useState({
    status: false,
    id: "",
    title: "",
  });

  const [content, SetContent] = useState("none");

  const data = [
    {
      id: "1001",
      title: "A",
      content: "Hi Hello A",
      timestamp: "2023-12-30 8:50:11",
    },
    {
      id: "1002",
      title: "B",
      content: "Hi Hello B",
      timestamp: "2023-12-29 9:50:11",
    },
    {
      id: "1003",
      title: "C",
      content: "Hi Hello C",
      timestamp: "2023-12-29 8:50:11",
    },
    {
      id: "1004",
      title: "D",
      content: "Hi Hello D",
      timestamp: "2023-12-28 14:50:11",
    },
    {
      id: "1005",
      title: "E",
      content: "Hi Hello E",
      timestamp: "2023-12-28 13:50:11",
    },
    {
      id: "1006",
      title: "F",
      content: "Hi Hello F",
      timestamp: "2023-12-28 12:50:11",
    },
    {
      id: "1007",
      title: "G",
      content: "Hi Hello G",
      timestamp: "2023-12-28 11:50:11",
    },
    {
      id: "1008",
      title: "H",
      content: "Hi Hello H",
      timestamp: "2023-12-28 10:50:11",
    },
    {
      id: "1009",
      title: "I",
      content: "Hi Hello I",
      timestamp: "2023-12-28 9:50:11",
    },
    {
      id: "1010",
      title: "J",
      content: "Hi Hello J",
      timestamp: "2023-12-28 8:50:11",
    },
    {
      id: "1011",
      title: "K",
      content: "Hi Hello K",
      timestamp: "2023-12-27 9:50:11",
    },
    {
      id: "1012",
      title: "L",
      content: "Hi Hello L",
      timestamp: "2023-12-27 8:50:11",
    },
  ];

  const dateTimestamps = data.map((item) => item.timestamp.split(" ")[0]);
  const uniqueDateTimestamps = [...new Set(dateTimestamps)];

  return (
    <>
      <div className="w-full font-[Barlow] z-0" align="center">
        <div className="w-[90%] h-[13vh] flex items-center border-b-2 border-[#B0A8B9]">
          <div className="w-[20%]">
            <img className="w-full" src="./requiredfiles/logo.png" alt="" />
          </div>
          <div className="w-[65%]" align="start">
            <h1 className="pl-[6px] pt-[15px] text-white text-[30px] font-[Sevillana]">
              Secure Notes
            </h1>
          </div>
          <div className="w-[12%] h-full flex items-center">
            <i
              className="fa-solid fa-plus text-[20px] text-white mt-[6px] p-[10px] bg-[#845EC2] rounded-md cursor-pointer"
              onClick={() => {
                setNewcontent(true);
              }}
            ></i>
          </div>
        </div>
        <div className="menucenter mt-[10px] w-[98%] h-[70vh] flex flex-row overflow-y-auto">
          <div className="w-[5%]"></div>
          <div className="w-[90%] flex flex-col items-start">
            {uniqueDateTimestamps.map((date) => {
              return checkDate(date) === "today" ? (
                <React.Fragment key={date}>
                  <h1 className="text-white font-[12px] mt-[10px]">Today</h1>
                  {data.map((item) => {
                    return date === item.timestamp.split(" ")[0] ? (
                      content === item.id ? (
                        <button
                          key={item.id}
                          className="bg-[#845EC2] text-white w-full p-[10px] rounded-md flex flex-row items-center justify-center mt-[10px] mb-[10px]"
                          onClick={() => {
                            props.updatePageContent(item.id);
                            SetContent(item.id);
                          }}
                        >
                          <div className="w-[70%]">{item.title}</div>
                          <div className="w-[12%]">
                            <i
                              className="fa-solid fa-pen-to-square"
                              onClick={() => {
                                setEditcontent({
                                  status: true,
                                  id: item.id,
                                  title: item.title,
                                });
                              }}
                            ></i>
                          </div>
                          <div className="w-[12%]">
                            <i
                              className="fa-solid fa-trash"
                              onClick={() => {
                                setDeletecontent({
                                  status: true,
                                  id: item.id,
                                  title: item.title,
                                });
                              }}
                            ></i>
                          </div>
                        </button>
                      ) : (
                        <button
                          key={item.id}
                          className="bg-[#B0A8B9] w-full p-[10px] rounded-md flex flex-row items-center justify-center mt-[10px] mb-[10px]"
                          onClick={() => {
                            props.updatePageContent(item.id);
                            SetContent(item.id);
                          }}
                        >
                          <div className="w-[70%]">{item.title}</div>
                          <div className="w-[12%]">
                            <i
                              className="fa-solid fa-pen-to-square"
                              onClick={() => {
                                setEditcontent({
                                  status: true,
                                  id: item.id,
                                  title: item.title,
                                });
                              }}
                            ></i>
                          </div>
                          <div className="w-[12%]">
                            <i
                              className="fa-solid fa-trash"
                              onClick={() => {
                                setDeletecontent({
                                  status: true,
                                  id: item.id,
                                  title: item.title,
                                });
                              }}
                            ></i>
                          </div>
                        </button>
                      )
                    ) : null;
                  })}
                </React.Fragment>
              ) : checkDate(date) === "yesterday" ? (
                <React.Fragment key={date}>
                  <h1 key={date} className="text-white font-[12px] mt-[10px]">
                    Yesterday
                  </h1>
                  {data.map((item) => {
                    return date === item.timestamp.split(" ")[0] ? (
                      content === item.id ? (
                        <button
                          key={item.id}
                          className="bg-[#845EC2] text-white w-full p-[10px] rounded-md flex flex-row items-center justify-center mt-[10px] mb-[10px]"
                          onClick={() => {
                            props.updatePageContent(item.id);
                            SetContent(item.id);
                          }}
                        >
                          <div className="w-[70%]">{item.title}</div>
                          <div className="w-[12%]">
                            <i
                              className="fa-solid fa-pen-to-square"
                              onClick={() => {
                                setEditcontent({
                                  status: true,
                                  id: item.id,
                                  title: item.title,
                                });
                              }}
                            ></i>
                          </div>
                          <div className="w-[12%]">
                            <i
                              className="fa-solid fa-trash"
                              onClick={() => {
                                setDeletecontent({
                                  status: true,
                                  id: item.id,
                                  title: item.title,
                                });
                              }}
                            ></i>
                          </div>
                        </button>
                      ) : (
                        <button
                          key={item.id}
                          className="bg-[#B0A8B9] w-full p-[10px] rounded-md flex flex-row items-center justify-center mt-[10px] mb-[10px]"
                          onClick={() => {
                            props.updatePageContent(item.id);
                            SetContent(item.id);
                          }}
                        >
                          <div className="w-[70%]">{item.title}</div>
                          <div className="w-[12%]">
                            <i
                              className="fa-solid fa-pen-to-square"
                              onClick={() => {
                                setEditcontent({
                                  status: true,
                                  id: item.id,
                                  title: item.title,
                                });
                              }}
                            ></i>
                          </div>
                          <div className="w-[12%]">
                            <i
                              className="fa-solid fa-trash"
                              onClick={() => {
                                setDeletecontent({
                                  status: true,
                                  id: item.id,
                                  title: item.title,
                                });
                              }}
                            ></i>
                          </div>
                        </button>
                      )
                    ) : null;
                  })}
                </React.Fragment>
              ) : checkDate(date) === "anotherday" ? (
                <React.Fragment key={date}>
                  <h1 key={date} className="text-white font-[12px] mt-[10px]">
                    {date}
                  </h1>
                  {data.map((item) => {
                    return date === item.timestamp.split(" ")[0] ? (
                      content === item.id ? (
                        <button
                          key={item.id}
                          className="bg-[#845EC2] text-white w-full p-[10px] rounded-md flex flex-row items-center justify-center mt-[10px] mb-[10px]"
                          onClick={() => {
                            props.updatePageContent(item.id);
                            SetContent(item.id);
                          }}
                        >
                          <div className="w-[70%]">{item.title}</div>
                          <div className="w-[12%]">
                            <i
                              className="fa-solid fa-pen-to-square"
                              onClick={() => {
                                setEditcontent({
                                  status: true,
                                  id: item.id,
                                  title: item.title,
                                });
                              }}
                            ></i>
                          </div>
                          <div className="w-[12%]">
                            <i
                              className="fa-solid fa-trash"
                              onClick={() => {
                                setDeletecontent({
                                  status: true,
                                  id: item.id,
                                  title: item.title,
                                });
                              }}
                            ></i>
                          </div>
                        </button>
                      ) : (
                        <button
                          key={item.id}
                          className="bg-[#B0A8B9] w-full p-[10px] rounded-md flex flex-row items-center justify-center mt-[10px] mb-[10px]"
                          onClick={() => {
                            props.updatePageContent(item.id);
                            SetContent(item.id);
                          }}
                        >
                          <div className="w-[70%]">{item.title}</div>
                          <div className="w-[12%]">
                            <i
                              className="fa-solid fa-pen-to-square"
                              onClick={() => {
                                setEditcontent({
                                  status: true,
                                  id: item.id,
                                  title: item.title,
                                });
                              }}
                            ></i>
                          </div>
                          <div className="w-[12%]">
                            <i
                              className="fa-solid fa-trash"
                              onClick={() => {
                                setDeletecontent({
                                  status: true,
                                  id: item.id,
                                  title: item.title,
                                });
                              }}
                            ></i>
                          </div>
                        </button>
                      )
                    ) : null;
                  })}
                </React.Fragment>
              ) : null;
            })}
          </div>
        </div>
        <div className="w-[90%] h-[12vh] flex flex-col items-start border-t-2 border-[#B0A8B9]">
          <div className="mt-[10px] text-white text-[18px] font-thin">
            gokulhk278@gmail.com
          </div>
          <Link
            to="/"
            className="mt-[10px] h-[8vh] bg-[#FF8066] text-[18px] text-white w-[100%] flex justify-center items-center rounded-md"
          >
            Logout
          </Link>
        </div>
      </div>

      {newcontent ? (
        <>
          <div className="modal-overlay font-[Barlow] flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="w-[30%] h-[30%] bg-white rounded-md">
              <div className="w-[100%] text-[#845EC2] text-[30px] flex items-center justify-end">
                <div className="w-[80%]">
                  <h1 className="text-black text-[20px] m-[12px]">
                    Add a New Notes
                  </h1>
                </div>
                <div className="w-[20%] flex justify-end">
                  <i
                    class="m-[12px] hover:m-[10px] fa-solid fa-circle-xmark p-[2px] hover:border-2 hover:rounded-full hover:border-[#845EC2] cursor-pointer"
                    onClick={() => {
                      setNewcontent(false);
                    }}
                  ></i>
                </div>
              </div>
              <div className="w-[100%] mt-[7%] flex justify-center">
                <div className="w-[80%] flex items-center justify-end  border-2 border-[#845EC2] h-[40px] rounded-md">
                  <input
                    className="w-[96%] text-[13px] sm:text-[20px] text-[#845EC2] bg-transparent font-[Barlow]"
                    style={{ border: "none", outline: "none" }}
                    type="text"
                    placeholder="New Notes Name"
                  />
                </div>
              </div>
              <div className="w-[100%] mt-[7%] flex justify-center">
                <button
                  className="text-[17px] px-[10%] py-[10px] text-white bg-[#4B4453] font-bold rounded-md font-[Barlow]"
                  style={{ boxShadow: "2px 2px 20px 10px rgba(0, 0, 0, 0.25)" }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {editcontent.status ? (
        <>
          <div className="modal-overlay font-[Barlow] flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="w-[30%] h-[30%] bg-white rounded-md">
              <div className="w-[100%] text-[#845EC2] text-[30px] flex items-center justify-end">
                <div className="w-[80%]">
                  <h1 className="text-black text-[20px] m-[12px]">
                    Edit Notes Name
                  </h1>
                </div>
                <div className="w-[20%] flex justify-end">
                  <i
                    class="m-[12px] hover:m-[10px] fa-solid fa-circle-xmark p-[2px] hover:border-2 hover:rounded-full hover:border-[#845EC2] cursor-pointer"
                    onClick={() => {
                      setEditcontent({ status: false, id: "", title: "" });
                    }}
                  ></i>
                </div>
              </div>
              <div className="w-[100%] mt-[7%] flex justify-center">
                <div className="w-[80%] flex items-center justify-end  border-2 border-[#845EC2] h-[40px] rounded-md">
                  <input
                    className="w-[96%] text-[13px] sm:text-[20px] text-[#845EC2] bg-transparent font-[Barlow]"
                    style={{ border: "none", outline: "none" }}
                    type="text"
                    placeholder="Rename the Notes"
                    value={editcontent.title}
                  />
                </div>
              </div>
              <div className="w-[100%] mt-[7%] flex justify-center">
                <button
                  className="text-[17px] px-[10%] py-[10px] text-white bg-[#4B4453] font-bold rounded-md font-[Barlow]"
                  style={{ boxShadow: "2px 2px 20px 10px rgba(0, 0, 0, 0.25)" }}
                >
                  Rename
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {deletecontent.status ? (
        <>
          <div className="modal-overlay font-[Barlow] flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="w-[30%] h-[30%] bg-white rounded-md">
              <div className="w-[100%] text-[#845EC2] text-[30px] flex items-center justify-end">
                <div className="w-[80%]">
                  <h1 className="text-black text-[20px] m-[12px]">
                    Delete Notes
                  </h1>
                </div>
                <div className="w-[20%] flex justify-end">
                  <i
                    class="m-[12px] hover:m-[10px] fa-solid fa-circle-xmark p-[2px] hover:border-2 hover:rounded-full hover:border-[#845EC2] cursor-pointer"
                    onClick={() => {
                      setDeletecontent({ status: false, id: "", title: "" });
                    }}
                  ></i>
                </div>
              </div>
              <div className="w-[100%] mt-[7%] flex justify-center">
                <div className="w-[80%] flex items-center justify-end  border-2 border-[#845EC2] h-[40px] rounded-md">
                  <div
                    className="w-[96%] text-[13px] sm:text-[20px] text-[#845EC2] bg-transparent font-[Barlow]"
                    style={{ border: "none", outline: "none" }}
                  >
                    Title Name : {deletecontent.title}
                  </div>
                </div>
              </div>
              <div className="w-[100%] mt-[7%] flex justify-center">
                <button
                  className="text-[17px] px-[10%] py-[10px] text-white bg-[#C34A36] font-bold rounded-md font-[Barlow]"
                  style={{ boxShadow: "2px 2px 20px 10px rgba(0, 0, 0, 0.25)" }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
