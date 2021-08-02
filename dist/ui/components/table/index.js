"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRANSFORM_KEYS = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableSortLabel = _interopRequireDefault(require("@material-ui/core/TableSortLabel"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

require("./EISTable.css");

var _reactRouterDom = require("react-router-dom");

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Constants = _interopRequireDefault(require("../../../enums/Constants"));

var _dateFns = require("date-fns");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var whiteBackground = {
  backgroundColor: '#ffffff'
};
var greyBackground = {
  backgroundColor: '#eeeeee'
};
/**
 * Receive as props:
 * data: Containing all the results from the server
 * headers: Headers to display
 * propCodes: Properties of the data to be displayed (In the desired order)
 * linksMap: Information of the columns that will be displayed as links
 */

var EISTable = /*#__PURE__*/function (_Component) {
  _inherits(EISTable, _Component);

  var _super = _createSuper(EISTable);

  function EISTable(props) {
    var _this;

    _classCallCheck(this, EISTable);

    _this.state = {
      windowWidth: window.innerWidth,
      orderBy: props.defaultOrderBy === undefined ? -1 : props.propCodes.indexOf(props.defaultOrderBy),
      order: props.defaultOrder === undefined ? _Constants["default"].SORT_ASC : props.defaultOrder,
      data: []
    };
    return _possibleConstructorReturn(_this);
  }

  _createClass(EISTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.onWindowSizeChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onWindowSizeChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          order = _this$state.order,
          orderBy = _this$state.orderBy,
          windowWidth = _this$state.windowWidth;
      var _this$props = this.props,
          headers = _this$props.headers,
          maxMobileSize = _this$props.maxMobileSize,
          onRowClick = _this$props.onRowClick,
          propCodes = _this$props.propCodes,
          selectedRowIndexes = _this$props.selectedRowIndexes,
          stylesMap = _this$props.stylesMap,
          keyMap = _this$props.keyMap;
      var isMobile = windowWidth < maxMobileSize;
      var rowsSelectable = selectedRowIndexes && onRowClick;
      var tableData = this.getSortedData({
        data: data,
        orderBy: orderBy,
        order: order,
        propCode: propCodes[orderBy],
        keyMap: keyMap
      });

      if (isMobile) {
        return /*#__PURE__*/_react["default"].createElement(_Table["default"], {
          className: "responsiveTable",
          style: {
            overflow: 'visible'
          }
        }, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
          key: 'sortby'
        }, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Sort by:"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, this.renderSortByValuesMobile()))), tableData.map(function (content, index) {
          // every second row is grey
          var style = index % 2 === 0 ? whiteBackground : greyBackground;

          if (selectedRowIndexes && selectedRowIndexes.includes(index)) {
            style = _objectSpread({}, style, {
              backgroundColor: '#2b82ff'
            });
          }

          if (rowsSelectable) {
            style = _objectSpread({}, style, {
              cursor: 'pointer'
            });
          }
          /**
           * A prop called stylesMap is used to customize the table
           * If items with the property "full" have to be marked red,
           * pass the folowing:
           * stylesMap={{
           *      full: {
           *          backgroundColor: "red"
           *      }
           * }}
           */


          if (stylesMap) {
            Object.keys(stylesMap).forEach(function (key) {
              if (content[key]) {
                style = _objectSpread({}, style, {}, stylesMap[key]);
              }
            });
          }

          return /*#__PURE__*/_react["default"].createElement(_TableBody["default"], {
            key: index,
            style: style,
            onClick: rowsSelectable ? function () {
              return onRowClick(content, index);
            } : function () {}
          }, propCodes.map(function (prop, index) {
            return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
              key: prop,
              style: style
            }, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, headers[index]), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, _this2.renderContent(prop, content)));
          }));
        }));
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Table["default"], {
        className: "responsiveTable",
        style: {
          overflow: 'visible'
        }
      }, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
        key: 'key'
      }, headers.map(function (header, index) {
        return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
          key: header,
          sortDirection: orderBy === index ? order : false
        }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
          title: "Sort",
          placement: 'bottom-end',
          enterDelay: 300
        }, /*#__PURE__*/_react["default"].createElement(_TableSortLabel["default"], {
          active: orderBy === index,
          direction: order,
          onClick: _this2.createSortHandler(index)
        }, header)));
      }))), /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, tableData.map(function (content, index) {
        var style = {};

        if (selectedRowIndexes && selectedRowIndexes.includes(index)) {
          style = _objectSpread({}, style, {
            backgroundColor: '#2196f3'
          });
        }

        if (rowsSelectable) {
          style = _objectSpread({}, style, {
            cursor: 'pointer'
          });
        }

        if (stylesMap) {
          Object.keys(stylesMap).forEach(function (key) {
            if (content[key]) {
              style = _objectSpread({}, style, {}, stylesMap[key]);
            }
          });
        }

        return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
          key: index,
          style: style,
          onClick: rowsSelectable ? function () {
            return onRowClick(content, index);
          } : function () {}
        }, propCodes.map(function (propCode) {
          return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
            key: propCode
          }, _this2.renderContent(propCode, content));
        }));
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.data !== state.data) {
        return _objectSpread({}, state, {
          data: props.data
        });
      }

      return null;
    }
  }]);

  return EISTable;
}(_react.Component);

EISTable.propTypes = {
  linksMap: _propTypes["default"].instanceOf(Map),
  data: _propTypes["default"].array.isRequired,
  headers: _propTypes["default"].array.isRequired,
  propCodes: _propTypes["default"].array.isRequired,
  selectedRowIndexes: _propTypes["default"].array,
  onRowClick: _propTypes["default"].func,
  stylesMap: _propTypes["default"].object,
  keyMap: _propTypes["default"].object,
  defaultOrderBy: _propTypes["default"].string,
  defaultOrder: _propTypes["default"].string
};
EISTable.defaultProps = {
  linksMap: new Map(),
  maxMobileSize: 540,
  keyMap: {}
};

var _default = _react["default"].memo(EISTable);

exports["default"] = _default;

var GENERATE_DATE_PARSER = function GENERATE_DATE_PARSER(parseString) {
  return function (value) {
    return (0, _dateFns.parse)(value, parseString, new Date()).getTime();
  };
};

var TRANSFORM_KEYS = {
  DATE_DD_MMM_YYYY: GENERATE_DATE_PARSER('dd-MMM-yyyy'),
  DATE_DD_MMM_YYYY_HH_MM: GENERATE_DATE_PARSER('dd-MMM-yyyy HH:mm'),
  DEFAULT: function DEFAULT(value) {
    return isNaN(value) ? value : +value;
  },
  GENERATE_DATE_PARSER: GENERATE_DATE_PARSER
};
exports.TRANSFORM_KEYS = TRANSFORM_KEYS;