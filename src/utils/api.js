const apiUrl = 'http://localhost:8081';

export const requestApi = async (url, body, options) => {
  let requestOptions = {};
  requestOptions.headers = {
    'content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem('tk')} `,
  };
  if (body) {
    requestOptions.body = body;
  }

  const response = await fetch(apiUrl + url, {
    ...requestOptions,
    ...options,
  });
  const resJson = await response.json();
  return resJson;
};

export const get = async (url, options) => {
  return requestApi(url, false, { method: 'GET', ...options });
};

export const post = async (url, body, options) => {
  const response = await requestApi(url, body, { method: 'POST', ...options });
  return response;
};
export const put = async (url, body, options) => {
  const response = await requestApi(url, body, { method: 'PUT', ...options });
  return response;
};
export const del = async (url, options) => {
  const response = await requestApi(url, false, {
    method: 'DELETE',
    ...options,
  });
  return response;
};

export const postJson = (url, body, options) => {
  return requestApi(url, body, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};
