"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactInfiniteScrollComponent = _interopRequireDefault(require("react-infinite-scroll-component"));

var _EAMGridLoadingSpinner = _interopRequireDefault(require("../EAMGridLoadingSpinner"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _CheckBox = _interopRequireDefault(require("@material-ui/icons/CheckBox"));

var _CheckBoxOutlineBlank = _interopRequireDefault(require("@material-ui/icons/CheckBoxOutlineBlank"));

var _grey = _interopRequireDefault(require("@material-ui/core/colors/grey"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _index = require("@material-ui/core/styles/index");

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _classnames = _interopRequireDefault(require("classnames"));

var _EAMGridCell = _interopRequireDefault(require("./EAMGridCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var styles = {
  searchRow: {
    wordBreak: "break-all",
    wordWrap: "break-word",
    color: "black",
    minWidth: "100%",
    backgroundColor: "white",
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "left",
    borderBottom: "1px solid #ebebeb",
    '&:hover': {
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    }
  },
  searchRowOdd: {
    backgroundColor: "#fafafa"
  },
  searchRowEven: {},
  searchRowCell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    borderRight: "1px solid #d3d3d3",
    boxSizing: "border-box",
    "-moz-box-sizing": "border-box",
    "-webkit-box-sizing": "border-box",
    width: "100px",
    minWidth: "100px"
  },
  searchRowCellContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    padding: "5px"
  }
};

var DataGridTableBody = /*#__PURE__*/function (_Component) {
  _inherits(DataGridTableBody, _Component);

  var _super = _createSuper(DataGridTableBody);

  function DataGridTableBody(props) {
    var _this;

    _classCallCheck(this, DataGridTableBody);

    _this = _super.call(this, props);

    _this._toggleCheckbox = function (row, checked) {
      _this._toggleCheckboxes([row], checked);
    };

    _this._toggleCheckboxes = function (rows, checked) {
      var _iterator = _createForOfIteratorHelper(rows),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var row = _step.value;

          _this.props.handleSelectRow(row, checked);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    _this.selectAll = function () {
      _this._toggleCheckboxes(_this.props.rows, true);
    };

    _this.unselectAll = function () {
      _this._toggleCheckboxes(_this.props.rows, false);
    };

    _this._onRowClick = function (row) {
      return function (event) {
        if (_this.props.onRowClick) {
          _this.props.onRowClick(row);
        }
      };
    };

    _this.props.refCallback(_assertThisInitialized(_this));

    return _this;
  }

  _createClass(DataGridTableBody, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "tableResults"
      }, /*#__PURE__*/_react["default"].createElement(_reactInfiniteScrollComponent["default"], {
        style: {
          'overflow': 'visible'
        },
        next: this.props.loadMoreData,
        hasMore: this.props.hasMore,
        height: this.props.height,
        scrollableTarget: this.props.parentScroll,
        loader: /*#__PURE__*/_react["default"].createElement(_EAMGridLoadingSpinner["default"], {
          isloading: this.props.isloading
        })
      }, this.props.rows && this.props.rows.map(function (row, index) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: row.id,
          className: (0, _classnames["default"])(classes.searchRow, classes["searchRow".concat(index % 2 ? 'Odd' : 'Even')]),
          style: _this2.props.rowStyler ? _this2.props.rowStyler(row) : {},
          onClick: _this2._onRowClick(row)
        }, _this2.props.allowRowSelection && /*#__PURE__*/_react["default"].createElement(_EAMGridCell["default"], null, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
          style: {
            width: 'inherit',
            height: 'inherit'
          },
          checked: _this2.props.selectedRows[row.id] !== undefined,
          disabled: _this2.props.isRowSelectable && !_this2.props.isRowSelectable(row, _this2.props.selectedRows),
          onChange: function onChange(event) {
            return _this2._toggleCheckbox(row, event.target.checked);
          }
        })), _this2.props.onEditRow && /*#__PURE__*/_react["default"].createElement(_EAMGridCell["default"], null, /*#__PURE__*/_react["default"].createElement(_Edit["default"], {
          color: "primary",
          onClick: function onClick() {
            return _this2.props.onEditRow(row);
          },
          style: {
            "cursor": "pointer"
          }
        })), _this2.props.extraColumns && _this2.props.extraColumns.filter(function (extraColumn) {
          return extraColumn.position !== 'after';
        }).map(function (extraColumn, index) {
          return /*#__PURE__*/_react["default"].createElement(_EAMGridCell["default"], {
            key: index,
            style: {
              'width': extraColumn.width || '20px',
              'minWidth': extraColumn.width || '20px'
            }
          }, _this2.props.cellRenderer && _this2.props.cellRenderer(extraColumn, row));
        }), row.cell.map(function (cell) {
          return cell.order > 0 && !_this2.props.isHiddenField(cell.t) && _this2.props.getCellWidth(cell.t) && /*#__PURE__*/_react["default"].createElement("div", {
            key: cell.n,
            className: classes.searchRowCell,
            style: {
              'width': "".concat(_this2.props.getCellWidth(cell.t).width, "px"),
              'minWidth': "".concat(_this2.props.getCellWidth(cell.t).width, "px")
            }
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: classes.searchRowCellContent
          }, _this2.props.cellRenderer && _this2.props.cellRenderer(cell, row) || (_this2.props.getCellWidth(cell.t).dataType === 'CHKBOOLEAN' ? /*#__PURE__*/_react["default"].createElement("div", {
            style: {
              justifyContent: "space-evenly",
              display: "flex",
              width: "100%"
            }
          }, cell.value === 'true' ? /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
            style: {
              color: _grey["default"][600],
              width: '20px',
              marginTop: '-3px'
            }
          }) : /*#__PURE__*/_react["default"].createElement(_CheckBoxOutlineBlank["default"], {
            style: {
              color: _grey["default"][600],
              width: '20px',
              marginTop: '-3px'
            }
          })) : /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
            style: {
              width: "calc(".concat(_this2.props.getCellWidth(cell.t).width, "px - 10px)"),
              color: 'inherit' //fontWeight: 'inherit'

            }
          }, cell.value))));
        }), _this2.props.extraColumns && _this2.props.extraColumns.filter(function (extraColumn) {
          return extraColumn.position === 'after';
        }).map(function (extraColumn, index) {
          return /*#__PURE__*/_react["default"].createElement(_EAMGridCell["default"], {
            key: index,
            style: {
              'width': extraColumn.width || '20px',
              'minWidth': extraColumn.width || '20px'
            }
          }, _this2.props.cellRenderer && _this2.props.cellRenderer(extraColumn, row));
        }));
      })));
    }
  }]);

  return DataGridTableBody;
}(_react.Component);

var _default = (0, _index.withStyles)(styles)(DataGridTableBody);

exports["default"] = _default;