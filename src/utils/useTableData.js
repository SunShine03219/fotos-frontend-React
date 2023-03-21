const mockedDataFile = [
    {
        id: 1,
        title: "filename_a.jpg",
        type: "file",
        size: "2.1 MB",
        date: "2022-03-16",
    },
    {
        id: 2,
        title: "folder_lvl1",
        type: "folder",
        size: "1.8 MB",
        date: "2022-03-15",
        content: [
            {
                id: 10,
                title: "filename_on_folder_a.jpg",
                type: "file",
                size: "2.1 MB",
                date: "2022-03-16",
            },
            {
                id: 11,
                title: "filename_on_folder_b.jpg",
                type: "file",
                size: "2.1 MB",
                date: "2022-03-16",
            },
            {
                id: 14,
                title: "folder_level2.jpg",
                type: "folder",
                size: "2.1 MB",
                date: "2022-03-16",
                content: [
                    {
                        id: 14,
                        title: "filename_on_folder_ccc.jpg",
                        type: "file",
                        size: "2.1 MB",
                        date: "2022-03-16",
                    },
                    {
                        id: 15,
                        title: "filename_on_folder_ccc.jpg",
                        type: "file",
                        size: "2.1 MB",
                        date: "2022-03-16",
                    },
                    {
                        id: 16,
                        title: "filename_on_folder_ccc.jpg",
                        type: "file",
                        size: "2.1 MB",
                        date: "2022-03-16",
                    },
                    {
                        id: 17,
                        title: "filename_on_folder_ccc.jpg",
                        type: "file",
                        size: "2.1 MB",
                        date: "2022-03-16",
                    },
                    {
                        id: 18,
                        title: "folder_lvl3.jpg",
                        type: "folder",
                        size: "2.1 MB",
                        date: "2022-03-16",
                        content: [{
                            id: 20,
                            title: "file_lvl3.jpg",
                            type: "file",
                            size: "2.1 MB",
                            date: "2022-03-16",
                        },
                            {
                                id: 23,
                                title: "file_lvl3.jpg",
                                type: "file",
                                size: "2.1 MB",
                                date: "2022-03-16"
                            }
                        ]
                    },
                ]
            },
        ]
    },
    {
        id: 3,
        title: "filename_c.jpg",
        type: "file",
        size: "3.2 MB",
        date: "2022-03-14",
    },
    {
        id: 4,
        title: "filename_d.jpg",
        type: "file",
        size: "3.2 MB",
        date: "2022-03-14",
    },
    {
        id: 5,
        title: "filename_e.jpg",
        type: "file",
        size: "3.2 MB",
        date: "2022-03-14",
    },
    {
        id: 6,
        title: "filename_f.jpg",
        type: "file",
        size: "3.2 MB",
        date: "2022-03-14",
    }
]
const mockedDataUser = [
    {
        id: 1,
        name: "User 1",
    },
    {
        id: 2,
        name: "User 2",
    },
    {
        id: 3,
        name: "User 3",
    },
    {
        id: 4,
        name: "User 4",
    },
    {
        id: 5,
        name: "User 5",
    },
    {
        id: 6,
        name: "User 6",
    },
]

export function useTableData(tableName) {
    const tableDataLookup = {
        Original: { rowAction: 'Download', mockedData: mockedDataFile, buttonTitle: 'Update File', buttonLink: '/upload' },
        Optimized: { rowAction: 'Download', mockedData: mockedDataFile },
        Users: { rowAction: 'Edit', mockedData: mockedDataUser, buttonTitle: 'Add User', buttonLink: '/add-user' },
    };

    return tableDataLookup[tableName]
}
