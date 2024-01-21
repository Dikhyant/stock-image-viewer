
/**
 * Generate HTTP headers
 */
export const getHeader = async (headers = new Headers(), hasFiles = false): Promise<Headers> => {
  const defaultHeaders = new Headers();
  defaultHeaders.append('Accept', 'application/json');
  defaultHeaders.append('Content-Type', 'application/json');

  if (headers) {
    headers.forEach((value: string, key: string) => defaultHeaders.append(key, value));
  }

  if (hasFiles) {
    defaultHeaders.delete('Content-Type');
  }

  return defaultHeaders;
};

/**
 * Generate HTTP body
 */
export const getBody = (body?: BodyInit, hasFiles = false) => (hasFiles ? body : JSON.stringify(body));

export class ApiResponseError extends Error {
  code: number = 400;

  constructor(message: string, code: number = 400) {
    super(message || 'Oops! Something went wrong');
    this.name = 'ApiResponseError';
    this.code = code;
  }
}

type ResponseError = {
  message?: string;
  code?: number;
};

/**
 * Handle HTTP error
 */
const handleError = (httpStatusCode: number, response: ResponseError) => {
  if (!/^(2|3)[0-9][0-9]$/.test(String(httpStatusCode))) {
    throw new ApiResponseError(response?.message || 'Something went wrong!', httpStatusCode ?? 501);
  }
};

/**
 * Generate Request URL
 */
export const getURL = (url: string, options: { baseURL?: string }) => {
  const baseURL = options?.baseURL ? options.baseURL : process.env.REACT_APP_BACKEND_URL;
  console.log("baseURL", baseURL);
  return baseURL + url;
};

type HTTPOptions = {
  baseURL?: string;
  isMockedURL?: boolean;
  headers?: Headers;
  hasFiles?: boolean;
};

/**
 * HTTP GET Request
 */
const fetchGet = async <T extends ResponseError>(url: string, options?: HTTPOptions) => {
  console.log("GET url ", getURL(url, { baseURL: options?.baseURL }))
  const result = await fetch(getURL(url, { baseURL: options?.baseURL }), {
    method: 'GET',
    headers: await getHeader(options?.headers),
  });

  const response: T = await result.json();
  handleError(result.status, response);
  return response;
};



const http = {
  get: fetchGet,
};

export default http;
