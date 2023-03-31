import { useUsers } from "../context/usersContext"
import { useFiles } from "../context/filesContext";


export function useTableData(tableName) {

    const { users } = useUsers()
    const { files, originalFiles, optimizedFiles } = useFiles()

    const tableDataLookup = {
        Original: {
            rowAction: 'Download',
            mockedData: originalFiles,
            buttonTitle: 'Upload File Here',
            buttonLink: '/upload'
        },
        Optimized: {
            rowAction: 'Download',
            mockedData: optimizedFiles
        },
        Users: {
            rowAction: 'Edit',
            mockedData: users,
            buttonTitle: 'Add User',
            buttonLink: '/add-user' },
    };

    return tableDataLookup[tableName]
}
