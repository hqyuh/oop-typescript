export function removeTrailingEndSlash(url: string) {
  if (url.endsWith("/")) return url.slice(0, url.length - 1);

  return url;
}

export function formatURL(baseURL = "", url: string) {
  if (url.startsWith("http")) return removeTrailingEndSlash(url);

  let _baseURL = baseURL;

  if (baseURL.endsWith("/")) {
    _baseURL = baseURL.substring(0, baseURL.length - 1);
  }

  let _url = url;

  if (url.startsWith("/")) {
    _url = url.substring(1);
  }

  return [_baseURL, _url].join("/");
}

export function isSuccessHttpCode(code: number) {
  return code > 199 && code < 300;
}

export function withParams<T>(url: string, args: T) {
  if (!args) {
    return url;
  }

  return `${url}?${Object.entries(args)
    .map((entry) => entry.join("="))
    .join("&")}`;
}
