import React from "react";

export const DashboardContent = (props) => {
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

  return (
    <div>
      {props.pagecontent === "none" ? (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <div
            align="center"
            className="w-[90%] p-[10px] bg-[#845EC2] rounded-md"
          >
            <h1 className="text-white text-[20px]">None</h1>
          </div>
        </div>
      ) : (
        <div className="w-[100%] flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center w-[90%] bg-[#845EC2] mt-[20px] mb-[20px] rounded-md">
            <div
              align="center"
              className="w-[100%] text-white text-[20px] p-[10px]"
            >
              {data.map((item) => {
                return item.id === props.pagecontent ? (
                  <div>{item.title}</div>
                ) : null;
              })}
            </div>
          </div>
          <div className="bg-white w-[90%] h-[85vh] rounded-md flex flex-row">
            <div className="w-[2%]"></div>
            <div
              className="menucenter w-[96%] mt-[10px] mb-[10px] overflow-y-auto  focus-visible:outline-none"
              contentEditable="true"
            >
              {data.map((item) => {
                return item.id === props.pagecontent ? (
                  <div key={item.id}>{item.content}</div>
                ) : null;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
