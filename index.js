'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentList = require('@economist/component-list');

var _economistComponentList2 = _interopRequireDefault(_economistComponentList);

var _economistComponentIcon = require('@economist/component-icon');

var _economistComponentIcon2 = _interopRequireDefault(_economistComponentIcon);

var _economistComponentLinkButton = require('@economist/component-link-button');

var _economistComponentLinkButton2 = _interopRequireDefault(_economistComponentLinkButton);

var SectionsCard = (function (_React$Component) {
  _inherits(SectionsCard, _React$Component);

  function SectionsCard() {
    _classCallCheck(this, SectionsCard);

    _React$Component.apply(this, arguments);
  }

  SectionsCard.prototype.targetIfNeeded = function targetIfNeeded(_ref) {
    var internal = _ref.internal;

    if (internal === false) {
      return { target: '_blank' };
    }
    return {};
  };

  SectionsCard.prototype.renderListContent = function renderListContent(array) {
    return array.map(function (item, i) {
      var linkContents = item.title;
      var commonProps = _extends({
        key: '' + i,
        unstyled: true
      }, item);
      if (item.internal === false) {
        return _react2['default'].createElement(
          _economistComponentLinkButton2['default'],
          _extends({
            className: 'sections-card__link sections-card__link--external'
          }, commonProps, {
            target: '_blank',
            unstyled: true
          }),
          linkContents
        );
      }
      return _react2['default'].createElement(
        _economistComponentLinkButton2['default'],
        _extends({
          className: 'sections-card__link'
        }, commonProps, {
          unstyled: true
        }),
        linkContents
      );
    });
  };

  SectionsCard.prototype.render = function render() {
    var context = this.props.data;
    return _react2['default'].createElement(
      'nav',
      { role: 'nav', className: 'sections-card' },
      _react2['default'].createElement(
        'div',
        { className: 'sections-card__wrapper' },
        _react2['default'].createElement(
          'div',
          { className: 'sections-card__menu' },
          _react2['default'].createElement(
            'div',
            { className: 'sections-card__list sections-card__list-sections' },
            _react2['default'].createElement(
              _economistComponentList2['default'],
              null,
              this.renderListContent(context.sections)
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'sections-card__list sections-card__list-media' },
            _react2['default'].createElement(
              _economistComponentList2['default'],
              null,
              this.renderListContent(context.media)
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'sections-card__list sections-card__list-blogs' },
            _react2['default'].createElement(
              'h4',
              { className: 'sections-card__header' },
              'Blogs'
            ),
            _react2['default'].createElement(
              _economistComponentList2['default'],
              null,
              this.renderListContent(context.blogs)
            )
          )
        )
      )
    );
  };

  _createClass(SectionsCard, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        data: _react2['default'].PropTypes.object
      };
    }
  }]);

  return SectionsCard;
})(_react2['default'].Component);

exports['default'] = SectionsCard;
module.exports = exports['default'];