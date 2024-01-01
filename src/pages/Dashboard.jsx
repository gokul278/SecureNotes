import React, { useState } from "react";
import { DashboardMenu } from "./components/DashboardMenu";
import { DashboardContent } from "./components/DashboardContent";

export const Dashboard = () => {
  document.title = "Notes";
  const [pagecontent,SetPagecontent] = useState("none");

  const updatePageContent = (newContent) => {
    SetPagecontent(newContent);
  };
  
  return (
    <div className="dashboard flex w-[100vw] h-[100vh]">
      <div className="w-[100%] lg:w-[25%] bg-[#4B4453]">
        <DashboardMenu updatePageContent={updatePageContent} />
      </div>
      <div className="w-[100%] lg:w-[75%] bg-[#B0A8B9]">
        <DashboardContent pagecontent={pagecontent} />
      </div>
    </div>
  );
};
