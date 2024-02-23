function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
import React from 'react';
import { Search } from '@material-ui/icons';
import { Dialog, DialogContent, withStyles } from '@mui/material';
import EAMGrid from '../eamgrid';
import { handleError } from '../actions/uiActions';
import PropTypes from 'prop-types';
var styles = {
  root: {
    padding: 0,
    paddingTop: "0px !important"
  }
};
var EAMLookup = /*#__PURE__*/function (_React$Component) {
  _inherits(EAMLookup, _React$Component);
  function EAMLookup() {
    var _this;
    _classCallCheck(this, EAMLookup);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, EAMLookup, [].concat(args));
    _this.state = {
      open: false
    };
    _this.iconButtonStyle = {
      position: "absolute",
      top: _this.props.top || 30,
      right: _this.props.right || -2,
      backgroundColor: "transparent",
      width: _this.props.width || 32,
      height: _this.props.height || 32,
      zIndex: 1,
      cursor: "pointer",
      color: '#8c8c8c'
    };
    _this.openDialog = function () {
      _this.setState(function () {
        return {
          open: true
        };
      });
      if (_this.props.value) {
        setTimeout(function () {
          _this.grid.setFilter({
            fieldName: _this.props.keys.code,
            fieldValue: _this.props.value,
            operator: "BEGINS"
          });
          _this.grid.runSearch();
        }, 100);
      }
    };
    _this.closeDialog = function () {
      _this.setState(function () {
        return {
          open: false
        };
      });
    };
    _this.onRowClick = function (row) {
      var code = row.cell.filter(function (cell) {
        return cell.t === _this.props.keys.code;
      });
      var desc = row.cell.filter(function (cell) {
        return cell.t === _this.props.keys.desc;
      });
      if (code.length === 1) {
        code = code[0].value;
      }
      if (desc.length === 1) {
        desc = desc[0].value;
      }
      if (_this.props.keys.mapCodeTo) {
        _this.props.updateProperty(_this.props.keys.mapCodeTo, code);
      } else {
        _this.props.updateProperty(_this.props.keys.code, code);
      }
      if (_this.props.keys.mapDescTo) {
        _this.props.updateProperty(_this.props.keys.mapDescTo, desc);
      } else if (_this.props.keys.desc) {
        _this.props.updateProperty(_this.props.keys.desc, code);
      }
      _this.setState(function () {
        return {
          open: false
        };
      });
    };
    return _this;
  }
  _createClass(EAMLookup, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      //Check disabled
      if (this.props.disabled) {
        return this.props.children;
      }
      //Render component normally
      return /*#__PURE__*/React.createElement("div", {
        style: {
          position: "relative"
        }
      }, this.props.children, /*#__PURE__*/React.createElement(Search, {
        style: this.iconButtonStyle,
        onClick: this.openDialog
      }), /*#__PURE__*/React.createElement(Dialog, {
        open: this.state.open,
        onClose: this.closeDialog,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        height: 500,
        maxWidth: 'md',
        classes: this.props.classes
      }, /*#__PURE__*/React.createElement(DialogContent, {
        classes: this.props.classes
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: "85vh",
          maxHeight: 650,
          marginBottom: -30,
          overflowY: "hidden"
        }
      }, /*#__PURE__*/React.createElement(EAMGrid, {
        gridId: this.props.gridId,
        autorun: true,
        gridRequestAdapter: this.props.gridRequestAdapter,
        onRowClick: this.onRowClick,
        onRef: function onRef(ref) {
          return _this2.grid = ref;
        },
        cache: false,
        handleError: handleError,
        filterVisible: this.props.filterVisible
      })))));
    }
  }]);
  return EAMLookup;
}(React.Component);
EAMLookup.propTypes = {
  filterVisible: PropTypes.bool
};
EAMLookup.defaultProps = {
  filterVisible: true
};
export default withStyles(styles)(EAMLookup);