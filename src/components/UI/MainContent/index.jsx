import { useEffect, useMemo, useState } from "react";

import { Table } from "../../Tables/Table";
import { SearchBar } from "../SearchBar";
import { Breadcrumb } from "../BreadCrumb";
import { useTableData } from "../../../utils/useTableData";
import { MainActionButtons } from "../MainActionButtons";
import { useFiles } from "../../../context/filesContext";

export function MainContent({ tableName }) {
  const [data, setData] = useState([]);
  const { folderPath, setFolderPath } = useFiles();
  const { rowAction, data: tableData, buttons } = useTableData(tableName);

  useEffect(() => {
    if (tableName === "Users") {
      setData(tableData);
      setFolderPath([]);
      return;
    }

    if (tableData && tableData[0]) {
      setData(tableData[0].content);
      setFolderPath(tableData);
    }
  }, [tableData]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(
    () =>
      data.filter((item) =>
        (item.title?.toLowerCase() ?? item.name?.toLowerCase() ?? "").includes(searchTerm.toLowerCase())
      ),
    [data, searchTerm]
  );

  const handleDataUpdate = (updatedData) => {
    setData(updatedData.content);
    const alreadyInPath = folderPath.some((folder) => folder.title === updatedData.title);
    if (!alreadyInPath) {
      const newFolderPath = [...folderPath, updatedData];
      setFolderPath(newFolderPath);
    }
  };

  const handleDataUpdateBreadCrumb = (updatedData) => {
    setData(updatedData.content);
    const clickedIndex = folderPath.findIndex((folder) => folder.title === updatedData.title);
    if (clickedIndex === -1) {
      return;
    }
    const newFolderPath = folderPath.slice(0, clickedIndex + 1);
    setFolderPath(newFolderPath);
  };

  return (
    <div className="w-full flex flex-col flex-1 h-full">
      <div className="flex justify-between">
        <SearchBar onValueChange={setSearchTerm} />

        <div className="flex flex-row gap-2">
          {buttons?.map((button) => {
            return (
              <MainActionButtons
                key={button.buttonTitle}
                tableName={tableName}
                buttonLink={button.buttonLink}
                buttonTitle={button.buttonTitle}
              />
            );
          })}
        </div>
      </div>

      {tableName !== "Users" && <Breadcrumb folder={folderPath} onFolderSelect={handleDataUpdateBreadCrumb} />}
      <Table action={rowAction} data={filteredData} tableName={tableName} onFolderClickTable={handleDataUpdate} />
    </div>
  );
}
