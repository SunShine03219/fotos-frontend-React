import React from 'react';

export function Breadcrumb({ folder, onFolderSelect, onReset }) {
    const breadcrumbItems = folder.map((folder, index) => (
        <React.Fragment key={folder.id}>
            {index !== 0 && <span className="mx-2">/</span>}
            {index === folder.length - 1 ? (
                <span>{folder.title}</span>
            ) : (
                <a href="#" onClick={() => onFolderSelect(folder)}>
                    {folder.title}
                </a>
            )}
        </React.Fragment>
    ));

    return (
        <div className="flex items-center space-x-2 mb-4">
            <span className=" cursor-pointer" onClick={onReset}>
                /
            </span>
            {breadcrumbItems}
        </div>
    );
}

