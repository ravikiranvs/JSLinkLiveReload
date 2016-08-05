import PersentColTemplate from './template.js';
import constants from './constants';

(() => {
  const persentageColumnRender = (ctx) => {
    const persentColTemplate = new PersentColTemplate(window);
    var fieldVal = ctx.CurrentItem[ctx.CurrentFieldSchema.Name];
    var percentComplete = fieldVal.toString().replace(' ', '');
    return persentColTemplate.renderAsString({ value: percentComplete });
  };

  let persentageColumn = {};

  persentageColumn.Templates = {};
  persentageColumn.Templates.Fields = {
    'PercentComplete': { 'View': persentageColumnRender }
  };

  window.JSLink = window.JSLink || {};
  window.JSLink[constants.templateVariableName] = persentageColumn;

  // eslint-disable-next-line no-undef
  SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs(constants.scriptName);
})();