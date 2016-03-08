import 'babel-polyfill';
import React from 'react';
import SectionsCard from '../src/index';
import chai from 'chai';
import context from '../src/context';
chai.should();

describe('A SectionsCard', () => {
  describe('it\'s a React component', () => {
    it('it\'s renders a React element', () => {
      React.isValidElement(<SectionsCard data={context} />).should.equal(true);
    });
  });
});
