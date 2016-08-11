class ScriptLoader {
  constructor(scriptUrl, scriptName, callback, scriptInitFunctionName = null, cache = true) {
    this.ScriptUrl = scriptUrl + (cache ? '' : '?cache=' + encodeURIComponent(new Date().getTime()));
    this.ScriptName = scriptName;
    this.Callback = callback;
    this.ScriptInitFunctionName = scriptInitFunctionName;
    this.Cache = cache;

    // eslint-disable-next-line no-undef
    SP.SOD.registerSod(this.ScriptName, this.ScriptUrl);
  }

  loadScript() {
    console.log(`load script - ${this.ScriptName} - start`);
    /* eslint-disable no-undef */
    SP.SOD.registerSod(this.ScriptName, this.ScriptUrl);
    SP.SOD.executeFunc(this.ScriptName, this.ScriptInitFunctionName, () => {
      console.log(`executeFunc callback for script:${this.ScriptName}`);
    }, true);

    SP.SOD.executeOrDelayUntilScriptLoaded(this.Callback, this.ScriptName);
    console.log(`load script - ${this.ScriptName} - end`);
  }
}

export default ScriptLoader;

/**
 * 
 * 
 * @param {string} fileUrl - Url of the file to be loaded
 * @param {string} scriptName - name for the script's MDS registery
 * @param {func} callback - This function will be called when the script has been executed
 * @param {bool} cache - Enable clientside caching. Default is true
 */
// export const executeScriptFile = (fileUrl, scriptName, functionName, callback, cache = true) => {
//   const fileCachedUrl = fileUrl + (cache ? '' : '?cache=' + encodeURIComponent(new Date().getTime()));
//   /* eslint-disable no-undef */
//   SP.SOD.registerSod(scriptName, fileCachedUrl);
//   SP.SOD.executeFunc(scriptName, functionName, () => {
//     debugger;
//   });

//   // eslint-disable-next-line no-undef
//   SP.SOD.executeOrDelayUntilScriptLoaded(callback, scriptName);
//   debugger;
//   console.log('thinks wait is over?');
// };