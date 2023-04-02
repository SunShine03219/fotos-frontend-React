import { useState } from "react";

import { TabButton } from "../UI/TabButton";
import { MainContent } from "../UI/MainContent";

export function Tabs({ isAdmin }) {
  const [activeTab, setActiveTab] = useState("original");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="px-5 mt-12 flex flex-col items-center flex-1 h-full">
      <nav className="flex justify-start">
        <TabButton
          active={activeTab === "original"}
          label="Original Pictures"
          onClick={() => handleTabClick("original")}
        />
        <TabButton
          active={activeTab === "optimized"}
          label="Optimized Pictures"
          onClick={() => handleTabClick("optimized")}
        />
        <TabButton active={activeTab === "videos"} label="Videos" onClick={() => handleTabClick("videos")} />
        {isAdmin && <TabButton active={activeTab === "users"} label="Users" onClick={() => handleTabClick("users")} />}
      </nav>
      <div className="mt-0 max-w-[960px] border border-gray-300 p-10 rounded">
        {activeTab === "original" && <MainContent tableName="Original" />}
        {activeTab === "optimized" && <MainContent tableName="Optimized" />}
        {activeTab === "videos" && <MainContent tableName="Videos" />}
        {isAdmin && activeTab === "users" && <MainContent tableName="Users" />}
      </div>
    </div>
  );
}
