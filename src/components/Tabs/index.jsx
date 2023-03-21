import { useState } from "react";

import { OriginalPictures } from '../OriginalPictures'
import { OptimizedPictures } from '../OptimizedPicures'
import { TabButton } from '../TabButton'
import { UsersList } from "../UsersList";

export function Tabs({ isAdmin }) {
    const [activeTab, setActiveTab] = useState("original");
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="px-5 flex flex-col justify-center items-center flex-1 h-full mt-[-60px]">
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
                {isAdmin && (
                    <TabButton
                        active={activeTab === "users"}
                        label="Users"
                        onClick={() => handleTabClick("users")}
                    />
                )}
            </nav>
            <div className="mt-0 max-w-[960px] border border-gray-300 p-10 rounded min-h-[450px]">
                {activeTab === "original" && <OriginalPictures tableName='Filenames'/>}
                {activeTab === "optimized" && <OptimizedPictures tableName='Filenames' /> }
                {isAdmin && activeTab === "users" && <UsersList tableName='Users'/>}
            </div>
        </div>
    );
}
