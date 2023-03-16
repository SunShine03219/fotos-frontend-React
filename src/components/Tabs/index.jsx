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
        <div className="mt-8 px-5">
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
            <div className="mt-10">
                {activeTab === "original" && <OriginalPictures tableName='Filenames'/>}
                {activeTab === "optimized" && <OptimizedPictures tableName='Filenames' /> }
                {isAdmin && activeTab === "users" && <UsersList tableName='Users'/>}
            </div>
        </div>
    );
}
