import qs from 'query-string';

const getUrlParamsAsObject = url => {
  if (!url) return url;
  const paramsString = url.substring(url.indexOf('?'));

  return qs.parse(paramsString);
};

export default {
  getUrlParamsAsObject
};
