"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _icons = require("@material-ui/icons");

var _core = require("@material-ui/core");

var _eamgrid = _interopRequireDefault(require("../eamgrid"));

var _uiActions = require("../actions/uiActions");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  root: {
    padding: 0,
    paddingTop: "0px !important"
  }
};

var EAMLookup = /*#__PURE__*/function (_React$Component) {
  _inherits(EAMLookup, _React$Component);

  function EAMLookup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EAMLookup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EAMLookup)).call.apply(_getPrototypeOf2, [this].concat(args)));
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


      return _react["default"].createElement("div", {
        style: {
          position: "relative"
        }
      }, this.props.children, _react["default"].createElement(_icons.Search, {
        style: this.iconButtonStyle,
        onClick: this.openDialog
      }), _react["default"].createElement(_core.Dialog, {
        open: this.state.open,
        onClose: this.closeDialog,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        height: 500,
        maxWidth: 'md',
        classes: this.props.classes
      }, _react["default"].createElement(_core.DialogContent, {
        classes: this.props.classes
      }, _react["default"].createElement("div", {
        style: {
          height: "85vh",
          maxHeight: 650,
          marginBottom: -30,
          overflowY: "hidden"
        }
      }, _react["default"].createElement(_eamgrid["default"], {
        gridId: this.props.gridId,
        autorun: true,
        gridRequestAdapter: this.props.gridRequestAdapter,
        onRowClick: this.onRowClick,
        onRef: function onRef(ref) {
          return _this2.grid = ref;
        },
        cache: false,
        handleError: _uiActions.handleError,
        filterVisible: this.props.filterVisible
      })))));
    }
  }]);

  return EAMLookup;
}(_react["default"].Component);

EAMLookup.propTypes = {
  filterVisible: _propTypes["default"].bool
};
EAMLookup.defaultProps = {
  filterVisible: true
};

var _default = (0, _core.withStyles)(styles)(EAMLookup);

exports["default"] = _default;