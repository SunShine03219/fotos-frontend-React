import { DeleteModal } from "../DeleteModal";
import { EditModal } from "../EditModal";

export function TableModals({ showDeleteModal, showEditUserModal, titleToDelete, onConfirmDelete, onCancelDelete, onConfirmEdit, onCancelEdit }) {
    return (
        <>
            {showDeleteModal && (
                <td>
                    <DeleteModal title={titleToDelete} onDelete={onConfirmDelete} onCancel={onCancelDelete} />
                </td>
            )}
            {showEditUserModal && (
                <td>
                    <EditModal title={titleToDelete} onDelete={onConfirmEdit} onCancel={onCancelEdit} />
                </td>
            )}
        </>
    );
}