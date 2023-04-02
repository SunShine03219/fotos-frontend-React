import { apiClient } from "./apiClient";

const getFileData = async () => {
  const { data } = await apiClient.get("pictures");
  return data;
};

const uploadAPI = async (url, selectedFiles) => {
  const formData = new FormData();
  selectedFiles.forEach((file) => {
    formData.append("file", file);
  });
  const { data } = await apiClient.post(`pictures/upload${url}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

const deleteAPI = async (url) => {
  const { data } = await apiClient.delete(`pictures/delete${url}`);
  return data;
};

const createFolderAPI = async (folderPath) => {
  const { data } = await apiClient.post(`pictures/folder/create${folderPath}`);
  return data;
};

const downloadFiles = async (url) => {
  const response = await apiClient.get(`pictures/download${url}`, { responseType: "blob" });

  // Create a Blob from the response data
  const blob = new Blob([response.data], { type: response.headers["content-type"] });

  // Create an anchor element with a download attribute
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = url.split("/").pop();

  // Append the link to the document and simulate a click event
  document.body.appendChild(link);
  link.click();

  // Remove the link from the document and revoke the object URL
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }, 100);
};

export { getFileData, uploadAPI, deleteAPI, downloadFiles, createFolderAPI };
