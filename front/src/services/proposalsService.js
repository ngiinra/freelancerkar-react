import http from "./httpService";

export function changeProposalStatusApi(obj) {
  return http.patch(`/proposal/${obj._id}`, obj.data).then((res) => {
    return res.data.data;
  });
}

export async function getProposalApi(id) {
  const res = await http.get(`/proposal/${id}`);
  return res.data.data;
}

export async function getProposalsListApi() {
  const res = await http.get(`/proposal/list`);
  return res.data.data;
}

export async function addProposalApi(objOfData) {
  const res = await http.post(`/proposal/add`, objOfData);
  return res.data.data;
}
