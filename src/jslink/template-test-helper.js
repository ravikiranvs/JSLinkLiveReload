/* eslint-disable */
import chaiJQuery from 'chai-jquery';
import jQuery from 'jquery';

chaiJQuery(chai, chai.util, jQuery);

/**
 * Renders the handlebar template and returns the jQuery object of the first element
 * 
 * @param {any} template The Handlebar template to be rendered
 * @param {any} data Data to bind to the template
 * @returns {jQuery} jQuery object of the template root element
 */
export default function renderTemplate(template, data) {
  const templateInstance = new template(window);
  const templateHtml = templateInstance.renderAsString(data);
  const templateJQueryHtml = jQuery(jQuery.parseHTML(templateHtml));
  jQuery(document).find('body').append(templateJQueryHtml);
  return templateJQueryHtml;
};