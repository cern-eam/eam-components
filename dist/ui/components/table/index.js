function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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

  var _super = _createSuper(EISTable);

  function EISTable(props) {
    var _this;

    _classCallCheck(this, EISTable);

    _this = _super.call(this, props);

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
      } //Assign final data


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
      } //Link


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

      var keyFunction = typeof keyMap[propCode] === 'function' ? keyMap[propCode] : TRANSFORM_KEYS.DEFAULT; // Schwartzian transform

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