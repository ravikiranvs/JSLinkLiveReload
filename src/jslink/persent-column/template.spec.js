/* eslint-disable */
import PersentColTemplate from './template.js';
import renderTemplate from '../template-test-helper';

describe('PersentCol', function () {
  let PersentColHtml;
  beforeEach(function () {
    PersentColHtml = renderTemplate(PersentColTemplate, { value: '20%' });
  });

  it('has class "csr-progress-container"', function () {
    expect(PersentColHtml).to.have.class('csr-progress-container');
  });

  it('value is shown only on hover', function () {
    expect(PersentColHtml.find('p')).to.be.hidden;
    PersentColHtml[0].onmouseover();
    expect(PersentColHtml.find('p')).to.be.visible;
    PersentColHtml[0].onmouseout();
    expect(PersentColHtml.find('p')).to.be.hidden;
  });
});