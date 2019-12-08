'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('@material-ui/core/styles/index');

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _CheckBox = require('@material-ui/icons/CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _CheckBoxOutlineBlank = require('@material-ui/icons/CheckBoxOutlineBlank');

var _CheckBoxOutlineBlank2 = _interopRequireDefault(_CheckBoxOutlineBlank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  actionBar: {
    '& > button': {
      marginRight: "10px"
    }
  }
};

/**
 * Action bar on top of the grid
 */

var DataGridActions = function (_Component) {
  _inherits(DataGridActions, _Component);

  function DataGridActions() {
    _classCallCheck(this, DataGridActions);

    return _possibleConstructorReturn(this, (DataGridActions.__proto__ || Object.getPrototypeOf(DataGridActions)).apply(this, arguments));
  }

  _createClass(DataGridActions, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;


      return _react2.default.createElement(
        'div',
        { className: classes.actionBar },
        this.props.selectButtons && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            _Button2.default,
            { variant: 'raised',
              color: 'secondary',
              size: 'small',
              onClick: this.props.onSelectAll
            },
            _react2.default.createElement(_CheckBox2.default, null),
            'Select all'
          ),
          _react2.default.createElement(
            _Button2.default,
            { variant: 'raised',
              color: 'secondary',
              size: 'small',
              onClick: this.props.onUnselectAll
            },
            _react2.default.createElement(_CheckBoxOutlineBlank2.default, null),
            'Unselect all'
          )
        )
      );
    }
  }]);

  return DataGridActions;
}(_react.Component);

exports.default = (0, _index.withStyles)(styles)(DataGridActions);