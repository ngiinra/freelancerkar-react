import http from "./httpService";

export async function getOwnerProjectsApi() {
  const a = await http.get("/project/owner-projects");
  return a.data.data;
}

export async function getProjectsListApi(searchParamsString = "") {
  const a = await http.get(`/project/list?${searchParamsString}`);
  return a.data.data;
}

export async function getSingleProjectApi(projectId) {
  const res = await http.get(`/project/${projectId}`);
  return res.data.data;
}

export async function deleteProjectApi(projectId) {
  const res = await http.delete(`/project/${projectId}`);
  return res.data.data;
}

export async function addProjectApi(dataObj) {
  const res = await http.post(`/project/add`, dataObj);
  return res.data.data;
}

export async function editProjectApi(dataObj) {
  const res = await http.patch(
    `/project/update/${dataObj._id}`,
    dataObj.editedData
  );
  return res.data.data;
}

export async function changeProjectStatusApi(idAndStatusObj) {
  const res = await http.patch(
    `/project/${idAndStatusObj._id}`,
    idAndStatusObj.data
  );
  return res.data.data;
}
