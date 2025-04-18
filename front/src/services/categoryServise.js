import http from "./httpService";

export function getCategoriesApi() {
  return http.get("/category/list").then((res) => res.data);
}

export function getSingleCategoryApi(id) {
  return http.get(`/category/${id}`).then((res) => res.data);
}
export function changeCategoryApi({ id, data }) {
  return http
    .patch(`/admin/category/update/${id}`, data)
    .then((res) => res.data);
}
export function deleteCategoryApi(id) {
  return http.delete(`/admin/category/remove/${id}`).then((res) => res.data);
}
export function addCategoryApi(data) {
  return http.post(`/admin/category/add`, data).then((res) => res.data);
}
