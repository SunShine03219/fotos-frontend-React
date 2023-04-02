import React, { useMemo } from "react";
import { PictureRow } from "../TableRow";
import { useAlertModal } from "../../../hooks/useAlertModal";
import { AlertModal } from "../../Modals/AlertModal";
import { hasFileExtension } from "../../../utils/helpers";

export function Table({ data, action, onFolderClickTable, tableName }) {
  const { showModal, setShowModal, setMessage, setType, message, type } = useAlertModal();

  const sortedData = useMemo(() => {
    if (tableName === "Users") return data;

    const sortedData = data.sort((a, b) => {
      const aHasExtension = hasFileExtension(a.title);
      const bHasExtension = hasFileExtension(b.title);

      if (aHasExtension && !bHasExtension) {
        return 1;
      } else if (!aHasExtension && bHasExtension) {
        return -1;
      } else {
        return a.title.localeCompare(b.title);
      }
    });

    return sortedData;
  }, [data]);

  const handleAlert = (message, type) => {
    setMessage(message);
    setType(type);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 1500);
  };

  const handleFolderClick = async (item) => {
    onFolderClickTable(item);
  };

  return (
    <>
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="w-[90%] py-2"></th>
            <th className="w-[5%] py-2"></th>
            <th className="w-[5%] py-2"></th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <PictureRow
              key={item.title ? item.title : item.id}
              item={item}
              index={index}
              rowTitle={action}
              onFolderClick={handleFolderClick}
              tableName={tableName}
              onAlert={handleAlert}
            />
          ))}
        </tbody>
      </table>
      {showModal && <AlertModal message={message} type={type} />}
    </>
  );
}
