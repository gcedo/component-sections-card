'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _context = require('./context');

var _context2 = _interopRequireDefault(_context);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

_context2['default'].media.map(function (mediaLink) {
  mediaLink.icon = {
    useBackground: true,
    color: 'chicago',
    icon: mediaLink.meta
  };
  return mediaLink;
});

exports['default'] = _react2['default'].createElement(_index2['default'], { data: _context2['default'] });
module.exports = exports['default'];