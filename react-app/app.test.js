import {mount, shallow} from 'enzyme';
import App from './app.jsx';

describe('App', () => {
  test('shallow-rendrer uten å feile', () => {
    const wrapper = shallow(App);
    expect(wrapper.find('#app').text()).toEqual('SWAPI Query!');
  });
  test('mounter komponent i DOM uten å feile', () => {
    const wrapper = mount(App);
    expect(wrapper.find('#app').text()).toEqual('SWAPI Query!');
  });
});
