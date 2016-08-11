import PersentColTemplate from './template.js';

(function () {
  const persentageColumnRender = function (ctx) {
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

  // eslint-disable-next-line no-undef
  SPClientTemplates.TemplateManager.RegisterTemplateOverrides(persentageColumn);
})();