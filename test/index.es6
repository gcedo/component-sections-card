import React from 'react';
import context from '../context';
import SectionsCard from '../index.es6';
import TestUtils from 'react-addons-test-utils';

/* eslint-disable newline-after-var */
describe(`A SectionsCard`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      SectionsCard.should.be.a('function').and.respondTo('render');
    });
    it(`it's renders a React element`, () => {
      React.isValidElement(<SectionsCard data={context} />).should.equal(true);
    });
  });
});
