function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Select from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';
import './EISTable.css';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';
import Constants from '../../../enums/Constants';
import { parse } from 'date-fns';
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
  function EISTable(props) {
    var _this;
    _classCallCheck(this, EISTable);
    _this = _callSuper(this, EISTable, [props]);
    _this.onWindowSizeChange = function () {
      _this.setState(function () {
        return {
          windowWidth: window.innerWidth
        };
      });
    };
    _this.resetSort = function () {
      _this.setState(function () {
        return {
          orderBy: -1,
          order: Constants.SORT_ASC
        };
      });
    };
    _this.createSortHandler = function (property) {
      return function (event) {
        _this.handleRequestSort(event, property);
      };
    };
    _this.createSortHandlerMobile = function (event) {
      _this.handleRequestSort(event, event.target.value);
    };
    _this.handleRequestSort = function (event, property) {
      //By default asc
      var order = Constants.SORT_ASC;
      if (property >= 0 && property < _this.props.propCodes.length) {
        if (_this.state.orderBy === property && _this.state.order === Constants.SORT_ASC) {
          order = Constants.SORT_DESC;
        }
      } else {
        /*It's desc*/
        order = Constants.SORT_DESC;
      }
      //Assign final data
      _this.setState({
        order: order,
        orderBy: property
      });
    };
    _this.renderContent = function (propCode, content) {
      //Normal content
      if (!_this.props.linksMap.get(propCode)) {
        if (content[propCode] === 'true' || content[propCode] === 'false') {
          //Checkbox
          return /*#__PURE__*/React.createElement(Checkbox, {
            checked: content[propCode] === 'true',
            value: content[propCode],
            disabled: true
          });
        }
        return content[propCode];
      }

      //Link
      var link = _this.props.linksMap.get(propCode);
      if (link.linkType === 'fixed') {
        return /*#__PURE__*/React.createElement(Link, {
          to: {
            pathname: "".concat(link.linkPrefix).concat(link.linkValue).concat(content[propCode])
          }
        }, content[propCode]);
      } else if (link.linkType === 'absolute') {
        return /*#__PURE__*/React.createElement("a", {
          href: "".concat(link.linkValue).concat(content[propCode]),
          target: "_blank"
        }, content[propCode]);
      } else {
        /*Dynamic link*/
        return /*#__PURE__*/React.createElement(Link, {
          to: {
            pathname: "".concat(link.linkPrefix).concat(content[link.linkValue])
          }
        }, content[propCode]);
      }
    };
    _this.renderSortByValuesMobile = function () {
      // Create list of values
      var listValues = _this.props.headers.map(function (elem) {
        return "".concat(elem, " (Asc)");
      });
      listValues = listValues.concat(_this.props.headers.map(function (elem) {
        return "".concat(elem, " (Desc)");
      }));
      return /*#__PURE__*/React.createElement(Select, {
        "native": true,
        value: _this.state.orderBy,
        onChange: _this.createSortHandlerMobile,
        className: "eamTableDropdown"
      }, /*#__PURE__*/React.createElement("option", {
        value: -1
      }, "Select sort column..."), listValues.map(function (elem, index) {
        return /*#__PURE__*/React.createElement("option", {
          key: index,
          value: index
        }, elem);
      }));
    };
    _this.propagateFilterChange = function (e) {
      _this.resetSort();
      _this.props.handleFilterChange(e.target.value);
    };
    _this.getSortedData = function (_ref) {
      var data = _ref.data,
        orderBy = _ref.orderBy,
        order = _ref.order,
        propCode = _ref.propCode,
        keyMap = _ref.keyMap;
      if (orderBy < 0) {
        return data;
      }
      var keyFunction = typeof keyMap[propCode] === 'function' ? keyMap[propCode] : TRANSFORM_KEYS.DEFAULT;

      // Schwartzian transform
      var sorted = data.map(function (datum, index) {
        return [datum, keyFunction(datum[propCode]), index];
      }).sort(function (_ref2, _ref3) {
        var _ref4 = _slicedToArray(_ref2, 3),
          a = _ref4[1],
          aIndex = _ref4[2];
        var _ref5 = _slicedToArray(_ref3, 3),
          b = _ref5[1],
          bIndex = _ref5[2];
        return a < b ? -1 : a > b ? 1 : aIndex - bIndex;
      }).map(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 1),
          datum = _ref7[0];
        return datum;
      });
      return order === Constants.SORT_DESC ? sorted.reverse() : sorted;
    };
    _this.state = {
      windowWidth: window.innerWidth,
      orderBy: props.defaultOrderBy === undefined ? -1 : props.propCodes.indexOf(props.defaultOrderBy),
      order: props.defaultOrder === undefined ? Constants.SORT_ASC : props.defaultOrder,
      data: []
    };
    return _this;
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
        return /*#__PURE__*/React.createElement(Table, {
          className: "responsiveTable",
          style: {
            overflow: 'visible'
          }
        }, /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRow, {
          key: 'sortby'
        }, /*#__PURE__*/React.createElement(TableCell, null, "Sort by:"), /*#__PURE__*/React.createElement(TableCell, null, this.renderSortByValuesMobile()))), tableData.map(function (content, index) {
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
          return /*#__PURE__*/React.createElement(TableBody, {
            key: index,
            style: style,
            onClick: rowsSelectable ? function () {
              return onRowClick(content, index);
            } : function () {}
          }, propCodes.map(function (prop, index) {
            return /*#__PURE__*/React.createElement(TableRow, {
              key: prop,
              style: style
            }, /*#__PURE__*/React.createElement(TableCell, null, headers[index]), /*#__PURE__*/React.createElement(TableCell, null, _this2.renderContent(prop, content)));
          }));
        }));
      }
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Table, {
        className: "responsiveTable",
        style: {
          overflow: 'visible'
        }
      }, /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRow, {
        key: 'key'
      }, headers.map(function (header, index) {
        return /*#__PURE__*/React.createElement(TableCell, {
          key: header,
          sortDirection: orderBy === index ? order : false
        }, /*#__PURE__*/React.createElement(Tooltip, {
          title: "Sort",
          placement: 'bottom-end',
          enterDelay: 300
        }, /*#__PURE__*/React.createElement(TableSortLabel, {
          active: orderBy === index,
          direction: order,
          onClick: _this2.createSortHandler(index)
        }, header)));
      }))), /*#__PURE__*/React.createElement(TableBody, null, tableData.map(function (content, index) {
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
        return /*#__PURE__*/React.createElement(TableRow, {
          key: index,
          style: style,
          onClick: rowsSelectable ? function () {
            return onRowClick(content, index);
          } : function () {}
        }, propCodes.map(function (propCode) {
          return /*#__PURE__*/React.createElement(TableCell, {
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
}(Component);
EISTable.propTypes = {
  linksMap: PropTypes.instanceOf(Map),
  data: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  propCodes: PropTypes.array.isRequired,
  selectedRowIndexes: PropTypes.array,
  onRowClick: PropTypes.func,
  stylesMap: PropTypes.object,
  keyMap: PropTypes.object,
  defaultOrderBy: PropTypes.string,
  defaultOrder: PropTypes.string
};
EISTable.defaultProps = {
  linksMap: new Map(),
  maxMobileSize: 540,
  keyMap: {}
};
export default React.memo(EISTable);
var GENERATE_DATE_PARSER = function GENERATE_DATE_PARSER(parseString) {
  return function (value) {
    return parse(value, parseString, new Date()).getTime();
  };
};
export var TRANSFORM_KEYS = {
  DATE_DD_MMM_YYYY: GENERATE_DATE_PARSER('dd-MMM-yyyy'),
  DATE_DD_MMM_YYYY_HH_MM: GENERATE_DATE_PARSER('dd-MMM-yyyy HH:mm'),
  DEFAULT: function DEFAULT(value) {
    return isNaN(value) ? value : +value;
  },
  GENERATE_DATE_PARSER: GENERATE_DATE_PARSER
};