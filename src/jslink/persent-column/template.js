import PersentColHbTemplate from './template.html';
import TemplateBuilder from '../template-builder.js';

/**
 * Template for the PersentageColumn
 * 
 * @class PresentColTemplate
 * @extends {TemplateBuilder}
 */
class PresentColTemplate extends TemplateBuilder {
  /**
   * Creates an instance of PresentColTemplate.
   * 
   * @param {any} context Template events will be attached here
   */
  constructor(context) {
    super(PersentColHbTemplate, context);
  }

  /**
   * Gets all the template events enclosed in a namespace.
   * Refer handlebar template file
   * 
   * @returns {any} Namespaced template events
   */
  getNamespacedTemplateEvents() {
    const PresentCol = {
      onHover: (target) => {
        target.childNodes[3].style.display = 'block';
      },
      onHoverExit: (target) => {
        target.childNodes[3].style.display = 'none';
      }
    };

    return {PresentCol};
  }
}

export default PresentColTemplate;