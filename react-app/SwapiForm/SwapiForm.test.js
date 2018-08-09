import React from 'react';
import {shallow} from 'enzyme';
import SwapiForm from './SwapiForm.jsx';

describe('SwapiForm', () => {
  test('er forhåndsutfylt med et query', () => {
    const wrapper = shallow(<SwapiForm />);
    //console.log(wrapper.debug());
    const inputValue = wrapper.find('#query').props().value;
    expect(inputValue).toEqual('people/1');
  });

  describe('henting av SWAPI-data', () => {
    beforeEach(() => {
      fetch.resetMocks(); //reset for å nullstille antall kall
    });

    test('klikk på submit-knapp kaller getSwapiData og viser data', () => {
      fetch.mockResponse(JSON.stringify({name: 'Luke Skywalker'}));

      const getSwapiDataSpy = jest.spyOn(SwapiForm.prototype, 'getSwapiData');
      const wrapper = shallow(<SwapiForm />);

      wrapper.find('#submit-button').simulate('click');
      wrapper.update();

      setImmediate(() => {
        expect(getSwapiDataSpy).toBeCalled();

        const state = wrapper.instance().state;
        expect(state.responseData.name).toEqual('Luke Skywalker');
        expect(fetch.mock.calls.length).toEqual(1);
      });
    });

    test('getSwapiData henter og viser data fra SWAPI (alternativ test)', () => {
      fetch.mockResponse(JSON.stringify({name: 'Luke Skywalker'}));

      const wrapper = shallow(<SwapiForm />);
      return wrapper.instance().getSwapiData()
        .then(() => {
          const state = wrapper.instance().state;
          expect(state.responseData.name).toEqual('Luke Skywalker');
          expect(fetch.mock.calls.length).toEqual(1);
        });
    });
  });
});
