const enableMds = function (scriptRelativeUrl, entryFunc) {
  // eslint-disable-next-line no-undef
  if (typeof _spPageContextInfo != 'undefined' && _spPageContextInfo != null) {
    // eslint-disable-next-line no-undef
    RegisterModuleInit(_spPageContextInfo.siteServerRelativeUrl + scriptRelativeUrl, entryFunc);
    entryFunc();
  } else {
    entryFunc();
  }
};

export default enableMds;