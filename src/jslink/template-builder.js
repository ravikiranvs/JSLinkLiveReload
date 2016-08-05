/**
 * TemplateBuilder is a helper class to implement Handlebar templates for JSLink
 * 
 * @class TemplateBuilder
 */
class TemplateBuilder {
  /**
   * Creates an instance of TemplateBuilder.
   * 
   * @param {any} template - handlebar template
   * @param {handlebar template} context - Template events will be attached here
   */
  constructor(template, context) {
    if (!template) {
      throw new Error('template cannot be null');
    }

    if (!context) {
      throw new Error('context cannot be null');
    }

    this.template = template;
    this.context = context;
  }

  /**
   * Renders the template as string
   * 
   * @param {any} data Data for binding to the template
   * @returns {string} html Rendered HTML
   */
  renderAsString(data) {
    if (this.getNamespacedTemplateEvents) {
      const events = this.getNamespacedTemplateEvents();

      Object.keys(events).forEach((value) => {
        this.context[value] = this.context[value] || events[value];
      });
    } else if (console) {
      // eslint-disable-next-line no-console
      const showWarning = console.warn || console.log;
      showWarning('method "getNamespacedTemplateEvents" has not been defined.');
    }

    return this.template(data);
  }
}

export default TemplateBuilder;