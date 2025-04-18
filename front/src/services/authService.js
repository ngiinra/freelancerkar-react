import http from "./httpService";

/**
 * send post request contains phone number to server.
 * send otp number to phone number.
 * @param {object} data contains {"phoneNumber" : "090000000"}
 */
export function getOtp(data) {
  return http.post("/user/get-otp", data).then((res) => res.data);
}

/**
 * send post request contains otp number to server.
 * @param {Promise<object>} data contains {"otp" : "123456"}
 */
export function checkOtp(data) {
  return http.post("/user/check-otp", data).then((res) => res.data);
}

/**
 * send post request contains name, email, role to server.
 * @param {Promise<object>} data contains {"name", "email", "role": FREELANCER||ADMIN||OWNER}
 */
export async function completeProfile(data) {
  const res = await http.post("/user/complete-profile", data);
  return res.data;
}

export async function getUserData() {
  const res = await http.get("/user/profile");
  return res.data;
}

export async function logoutApi() {
  const res = await http.post("/user/logout");
  return res.data;
}

export async function getUsersListApi() {
  const res = await http.get("/admin/user/list");
  return res.data;
}

export async function changeUserStatusApi(obj) {
  const res = await http.patch(`/admin/user/verify/${obj._id}`, obj.data);
  return res.data;
}

export async function editUserApi(obj) {
  const res = await http.patch(`/user/update`, obj);
  return res.data;
}
