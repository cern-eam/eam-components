function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import React from 'react';
import { Search } from '@material-ui/icons';
import { Dialog, DialogContent, withStyles } from '@material-ui/core';
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

  var _super = _createSuper(EAMLookup);

  function EAMLookup() {
    var _this;

    _classCallCheck(this, EAMLookup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
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
      } //Render component normally


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