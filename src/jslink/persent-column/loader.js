import constants from './constants';

(() => {
  // TODO: Configurable - Script Url
  // eslint-disable-next-line no-undef
  SP.SOD.registerSod(constants.scriptName, 'http://localhost:7777/scripts/persent-column.bundle.js');
  
  // eslint-disable-next-line no-undef
  SP.SOD.executeFunc(constants.scriptName, null, function () {
    // eslint-disable-next-line no-undef
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(window.JSLink[constants.templateVariableName]);
  });
})();