import PersentColTemplate from './template.js';
import {JSLink} from '../../namespace.js';

JSLink.PersentageColumn = JSLink.PersentageColumn || {};

JSLink.PersentageColumn.Functions = JSLink.PersentageColumn.Functions || {};
JSLink.PersentageColumn.Functions.RenderColumn = JSLink.PersentageColumn.Functions.RenderColumn || function (ctx) {
  const persentColTemplate = new PersentColTemplate(window);
  var fieldVal = ctx.CurrentItem[ctx.CurrentFieldSchema.Name];
  var percentComplete = fieldVal.toString().replace(' ', '');
  return persentColTemplate.renderAsString({ value: percentComplete });
};

JSLink.PersentageColumn.Template = JSLink.PersentageColumn.Template || {
  Templates: {
    Fields: {
      'PercentComplete': { 'View': JSLink.PersentageColumn.Functions.RenderColumn }
    }
  }
};

JSLink.PersentageColumn.Functions.RenderTemplate = function () {
  // eslint-disable-next-line no-undef
  SPClientTemplates.TemplateManager.RegisterTemplateOverrides(JSLink.PersentageColumn.Template);
};

JSLink.PersentageColumn.Functions.MdsRegisterTemplate = function () {
  // eslint-disable-next-line no-undef
  const thisUrl = _spPageContextInfo.siteServerRelativeUrl + 'Site Liberary/persent-column.bundle.js';
  JSLink.PersentageColumn.Functions.RenderTemplate();

  // eslint-disable-next-line no-undef
  RegisterModuleInit(thisUrl, JSLink.PersentageColumn.Functions.RenderTemplate);
};

// eslint-disable-next-line no-undef
if (typeof _spPageContextInfo != 'undefined' && _spPageContextInfo != null) {
  JSLink.PersentageColumn.Functions.MdsRegisterTemplate();
} else {
  JSLink.PersentageColumn.Functions.RenderTemplate();
}