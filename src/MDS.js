const enableMds = function (scriptRelativeUrl, entryFunc) {
  // eslint-disable-next-line no-undef
  if (typeof(RegisterModuleInit) == 'function') {
    entryFunc();
    // eslint-disable-next-line no-undef
    RegisterModuleInit(scriptRelativeUrl, entryFunc);
  } else {
    entryFunc();
  }
};

export default enableMds;