import {AiOutlineCloudDownload, AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";

export function TableActionButtons({ rowTitle, item, onEditClick, onDeleteClick, onDownloadClick }) {

    const shouldShowDeleteButton =
        item.title !== "fotos-originais" && item.title !== "fotos-otimizadas";

    return (
        <td className="py-2 px-2">
            <div className="inline-flex space-x-2"> {/* or you can use "space-x-2" */}
                {rowTitle === 'Download' ? (
                    <AiOutlineCloudDownload
                        size="1.5em"
                        className="cursor-pointer hover:text-primary"
                        onClick={() => onDownloadClick(item)}
                    />
                ) : (
                    <AiOutlineEdit
                        size="1.5em"
                        className="cursor-pointer"
                        onClick={() => onEditClick(item.name)}
                    />
                )}
                {shouldShowDeleteButton && (
                    <AiOutlineDelete
                        size="1.5em"
                        className="cursor-pointer hover:text-red-500"
                        onClick={() => onDeleteClick(item.title ? item.title : item.name)}
                    />
                )}
            </div>
        </td>
    )
}