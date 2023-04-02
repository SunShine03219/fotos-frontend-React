import { useMemo } from "react";
import { hasFileExtension } from "../../../utils/helpers";
import { AiOutlineCloudDownload, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

export function TableActionButtons({ rowTitle, item, onEditClick, onDeleteClick, onDownloadClick }) {
  const isFolder = useMemo(() => !hasFileExtension(item.title), [item]);

  return (
    <>
      {rowTitle === "Download" ? (
        !isFolder ? (
          <td>
            <AiOutlineCloudDownload
              size="1.5em"
              className="cursor-pointer hover:text-primary"
              onClick={() => onDownloadClick(item)}
            />
          </td>
        ) : (
          <td></td>
        )
      ) : (
        <td>
          <AiOutlineEdit size="1.5em" className="cursor-pointer" onClick={() => onEditClick(item.name)} />
        </td>
      )}

      <td>
        <AiOutlineDelete
          size="1.5em"
          className="cursor-pointer hover:text-red-500"
          onClick={() => onDeleteClick(item.title ? item.title : item.name)}
        />
      </td>
    </>
  );
}
