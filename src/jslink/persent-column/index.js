import PersentColTemplate from './template.js';
import {JSLink} from '../../namespace.js';
import MDS from '../../MDS.js';

JSLink.PersentageColumn = JSLink.PersentageColumn || function () {
  const persentageColumnRender = function (ctx) {
    const persentColTemplate = new PersentColTemplate(window);
    var fieldVal = ctx.CurrentItem[ctx.CurrentFieldSchema.Name];
    var percentComplete = fieldVal.toString().replace(' ', '');
    return persentColTemplate.renderAsString({ value: percentComplete });
  };

  let persentageColumnTemplateOverride = {};

  persentageColumnTemplateOverride.Templates = {};
  persentageColumnTemplateOverride.Templates.Fields = {
    'PercentComplete': { 'View': persentageColumnRender }
  };

  // eslint-disable-next-line no-undef
  SPClientTemplates.TemplateManager.RegisterTemplateOverrides(persentageColumnTemplateOverride);
};

MDS('/Style%20Library/scripts/persent-column.bundle.js', JSLink.PersentageColumn);