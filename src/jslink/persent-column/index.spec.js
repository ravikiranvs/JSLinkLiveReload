/* eslint-disable */
describe('PersentCol Enrty Func', function () {
  let templatesArr = [];
  window.SPClientTemplates = {
    TemplateManager: {
      RegisterTemplateOverrides: function (template) {
        templatesArr.push(template);
      }
    }
  };

  require('./index');

  it('adds the a template ', function () {
    expect(templatesArr.length).to.be.equal(1);
  });

  it('adds the a JSLink template for PercentComplete column view', function () {
    const jslinkTemplate = templatesArr[0];
    console.log(jslinkTemplate);
    expect(jslinkTemplate).to.have.property('Templates');
    expect(jslinkTemplate.Templates).to.have.property('Fields');
    expect(jslinkTemplate.Templates.Fields).to.have.property('PercentComplete');
    expect(jslinkTemplate.Templates.Fields.PercentComplete).to.have.property('View');
    expect(jslinkTemplate.Templates.Fields.PercentComplete.View).to.be.a('function');
  });
});