import { useUsers } from "../context/usersContext";
import { useFiles } from "../context/filesContext";

export function useTableData(tableName) {
  const { users } = useUsers();
  const { originalFiles, optimizedFiles, videoFiles } = useFiles();

  const tableDataLookup = {
    Original: {
      rowAction: "Download",
      data: originalFiles,
      buttons: [
        { buttonTitle: "New folder", buttonLink: "/new-folder" },
        { buttonTitle: "Upload File Here", buttonLink: "/upload" },
      ],
    },
    Optimized: {
      rowAction: "Download",
      data: optimizedFiles,
      buttons: [{ buttonTitle: "Refresh data", refreshData: true }],
    },
    Videos: {
      rowAction: "Download",
      data: videoFiles,
      buttons: [
        { buttonTitle: "New folder", buttonLink: "/new-folder" },
        { buttonTitle: "Upload File Here", buttonLink: "/upload" },
      ],
    },
    Users: {
      rowAction: "Edit",
      data: users,
      buttons: [{ buttonTitle: "Add User", buttonLink: "/add-user" }],
    },
  };

  return tableDataLookup[tableName];
}
