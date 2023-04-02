import React from "react";
import { formatText } from "../../../utils/helpers";

export function Breadcrumb({ folder, onFolderSelect }) {
  const breadcrumbItems = folder.map((folder, index) => (
    <React.Fragment key={folder.title}>
      {index !== 0 && <span className="mx-2">/</span>}
      {index === folder.length - 1 ? (
        <span>{formatText(folder.title)}</span>
      ) : (
        <a href="#" onClick={() => onFolderSelect(folder)}>
          {formatText(folder.title)}
        </a>
      )}
    </React.Fragment>
  ));

  return (
    <div className="flex items-center space-x-2 mb-4">
      <span>/</span>
      {breadcrumbItems}
    </div>
  );
}
