const send = async (method, endPoint, options, data, isAuthReq = false) => {
  if (!options) options = {};
  if (data) options.body = JSON.stringify(data);

  options.method = method;

  options.headers = {
    ...options.headers,
    "Content-Type": "application/json",
  };
  if (isAuthReq) {
    const token = localStorage.getItem("token");
    options.headers = {
      ...options.headers,
      accept: "true",
      authorization: `Bearer ${token}`,
    };
  }

  //   const haveAnyQuery = endPoint.split('?').length > 1;
  //   endPoint = `${endPoint}${haveAnyQuery ? '&' : '?'}lang=${getState().global.lang}`;

  const response = await fetch(endPoint, options);

  if (response.status === 401 && isAuthReq) {
    // // will logout
    // storeDispatch(setIsLogin(false));
  }

  if (response.status === 500) {
    return response;
  }

  return response;
};

class HttpService {
  get = (endPoint, options) => send("GET", endPoint, options);
  post = (endPoint, data, options) => send("POST", endPoint, options, data);
  put = (endPoint, data, options) => send("PUT", endPoint, options, data);
  del = (endPoint, options) => send("DELETE", endPoint, options);

  getWithAuth = (endPoint, options) => send("GET", endPoint, options, undefined, true);
  postWithAuth = (endPoint, data, options) => send("POST", endPoint, options, data, true);
  putWithAuth = (endPoint, data, options) => send("PUT", endPoint, options, data, true);
  delWithAuth = (endPoint, options) => send("DELETE", endPoint, options, undefined, true);
}
const httpService = new HttpService();

export default httpService;
