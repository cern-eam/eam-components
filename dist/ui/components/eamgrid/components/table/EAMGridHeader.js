"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ArrowDownward = _interopRequireDefault(require("@material-ui/icons/ArrowDownward"));

var _ArrowUpward = _interopRequireDefault(require("@material-ui/icons/ArrowUpward"));

var _EAMGridFilter = _interopRequireDefault(require("./header-filter/EAMGridFilter"));

var _index = require("@material-ui/core/styles/index");

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _EAMGridHeaderCell = _interopRequireDefault(require("./EAMGridHeaderCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  tableHeader: {
    width: "100%",
    display: "flex",
    flex: "0 0 auto",
    fontWeight: "bold",
    fontSize: "14px"
  },
  headerCellContainer: {
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid #d3d3d3",
    boxSizing: "border-box",
    "-moz-box-sizing": "border-box",
    "-webkit-box-sizing": "border-box",
    overflow: "hidden",
    paddingBottom: 10,
    paddingTop: 5
  },
  headerCell: {
    width: "100%",
    minHeight: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#a5a5a5",
    paddingLeft: "5px",
    boxSizing: "border-box",
    "-moz-box-sizing": "border-box",
    "-webkit-box-sizing": "border-box"
  },
  arrowicon: {
    width: "12px",
    height: "24px",
    fontWeight: "bold"
  }
};

var DataGridTableHeader = /*#__PURE__*/function (_Component) {
  _inherits(DataGridTableHeader, _Component);

  function DataGridTableHeader() {
    _classCallCheck(this, DataGridTableHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(DataGridTableHeader).apply(this, arguments));
  }

  _createClass(DataGridTableHeader, [{
    key: "_getFilteredField",
    value: function _getFilteredField(fieldname) {
      var fieldFilter = this.props.filters.filter(function (f) {
        return f.fieldName === fieldname;
      });

      if (fieldFilter.length === 0) {
        return {
          fieldName: fieldname,
          fieldValue: '',
          operator: 'BEGINS'
        };
      } else return fieldFilter[0];
    }
  }, {
    key: "_getSortedField",
    value: function _getSortedField(fieldname) {
      var fieldSorting = this.props.sortFields.filter(function (s) {
        return s.sortBy === fieldname;
      });

      if (fieldSorting.length === 0) {
        return {
          sortBy: fieldname,
          sortType: undefined
        };
      } else return fieldSorting[0];
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var classes = this.props.classes;
      return _react["default"].createElement("div", {
        className: classes.tableHeader
      }, this.props.selectColumn && _react["default"].createElement(_EAMGridHeaderCell["default"], null, _react["default"].createElement(_Tooltip["default"], {
        title: "Choose"
      }, _react["default"].createElement("div", {
        className: this.props.headerStyle
      }, "Choose"))), this.props.editColumn && _react["default"].createElement(_EAMGridHeaderCell["default"], null, _react["default"].createElement(_Tooltip["default"], {
        title: "Edit"
      }, _react["default"].createElement("div", {
        className: this.props.headerStyle
      }, "Edit"))), this.props.extraColumns && this.props.extraColumns.filter(function (extraColumn) {
        return extraColumn.position !== 'after';
      }).map(function (extraColumn, index) {
        return _react["default"].createElement(_EAMGridHeaderCell["default"], {
          key: index,
          style: {
            'width': extraColumn.width || '20px',
            'minWidth': extraColumn.width || '20px'
          }
        }, extraColumn.headerLabel);
      }), this.props.fields && this.props.fields.map(function (field) {
        var fieldsorting = _this._getSortedField(field.name);

        return field.order > 0 && !_this.props.isHiddenField(field.name) && _react["default"].createElement("div", {
          key: field.id,
          className: classes.headerCellContainer,
          style: {
            'width': "".concat(field.width, "px"),
            'minWidth': "".concat(field.width, "px")
          }
        }, _react["default"].createElement("div", {
          className: classes.headerCell,
          onClick: function onClick() {
            _this.props.toggleSortField({
              'sortBy': field.name
            });
          }
        }, _react["default"].createElement("div", {
          title: field.label,
          className: _this.props.headerStyle
        }, field.label), _react["default"].createElement("div", {
          className: classes.arrowicon
        }, fieldsorting.sortType === 'DESC' && _react["default"].createElement(_ArrowDownward["default"], {
          className: classes.arrowicon
        }), fieldsorting.sortType === 'ASC' && _react["default"].createElement(_ArrowUpward["default"], {
          className: classes.arrowicon
        }))), _this.props.filterVisible && _react["default"].createElement(_EAMGridFilter["default"], {
          key: "filter-".concat(field.id),
          filter: _this._getFilteredField(field.name),
          setFilter: _this.props.setFilter,
          runSearch: _this.props.runSearch,
          width: field.width,
          dataType: field.dataType
        }));
      }), this.props.extraColumns && this.props.extraColumns.filter(function (extraColumn) {
        return extraColumn.position === 'after';
      }).map(function (extraColumn, index) {
        return _react["default"].createElement(_EAMGridHeaderCell["default"], {
          key: index,
          style: {
            'width': extraColumn.width || '20px',
            'minWidth': extraColumn.width || '20px'
          }
        }, extraColumn.headerLabel);
      }));
    }
  }]);

  return DataGridTableHeader;
}(_react.Component);

var _default = (0, _index.withStyles)(styles)(DataGridTableHeader);

exports["default"] = _default;