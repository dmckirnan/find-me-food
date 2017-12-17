import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

var jsdom = require('jsdom');

configure({ adapter: new Adapter() });

const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
const exposedProperties = ['window', 'navigator', 'document'];

global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};
