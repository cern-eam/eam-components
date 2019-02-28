'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInfiniteScrollComponent = require('react-infinite-scroll-component');

var _reactInfiniteScrollComponent2 = _interopRequireDefault(_reactInfiniteScrollComponent);

var _EAMGridLoadingSpinner = require('../EAMGridLoadingSpinner');

var _EAMGridLoadingSpinner2 = _interopRequireDefault(_EAMGridLoadingSpinner);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _CheckBox = require('@material-ui/icons/CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _CheckBoxOutlineBlank = require('@material-ui/icons/CheckBoxOutlineBlank');

var _CheckBoxOutlineBlank2 = _interopRequireDefault(_CheckBoxOutlineBlank);

var _grey = require('@material-ui/core/colors/grey');

var _grey2 = _interopRequireDefault(_grey);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _index = require('@material-ui/core/styles/index');

var _Edit = require('@material-ui/icons/Edit');

var _Edit2 = _interopRequireDefault(_Edit);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _EAMGridCell = require('./EAMGridCell');

var _EAMGridCell2 = _interopRequireDefault(_EAMGridCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return _extends({}, theme, {
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
    });
};

var DataGridTableBody = function (_Component) {
    _inherits(DataGridTableBody, _Component);

    function DataGridTableBody(props) {
        _classCallCheck(this, DataGridTableBody);

        var _this = _possibleConstructorReturn(this, (DataGridTableBody.__proto__ || Object.getPrototypeOf(DataGridTableBody)).call(this, props));

        _this._toggleCheckbox = function (row, checked) {
            _this._toggleCheckboxes([row], checked);
        };

        _this._toggleCheckboxes = function (rows, checked) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = rows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var row = _step.value;

                    _this.props.handleSelectRow(row, checked);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
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

        _this.props.refCallback(_this);
        return _this;
    }

    // Click on "Select All"


    // Click on "Unselect All"


    _createClass(DataGridTableBody, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var classes = this.props.classes;

            return _react2.default.createElement(
                'div',
                { id: 'tableResults' },
                _react2.default.createElement(
                    _reactInfiniteScrollComponent2.default,
                    {
                        style: { 'overflow': 'visible' },
                        next: this.props.loadMoreData,
                        hasMore: this.props.hasMore,
                        height: this.props.height,
                        scrollableTarget: this.props.parentScroll,
                        loader: _react2.default.createElement(_EAMGridLoadingSpinner2.default, { isloading: this.props.isloading }) },
                    this.props.rows && this.props.rows.map(function (row, index) {
                        return _react2.default.createElement(
                            'div',
                            { key: row.id,
                                className: (0, _classnames2.default)(classes.searchRow, classes['searchRow' + (index % 2 ? 'Odd' : 'Even')]),
                                style: _this2.props.rowStyler ? _this2.props.rowStyler(row) : {},
                                onClick: _this2._onRowClick(row) },
                            _this2.props.allowRowSelection && _react2.default.createElement(
                                _EAMGridCell2.default,
                                null,
                                _react2.default.createElement(_Checkbox2.default, {
                                    style: { width: 'inherit', height: 'inherit' },
                                    checked: _this2.props.selectedRows[row.id] !== undefined,
                                    disabled: _this2.props.isRowSelectable && !_this2.props.isRowSelectable(row, _this2.props.selectedRows),
                                    onChange: function onChange(event) {
                                        return _this2._toggleCheckbox(row, event.target.checked);
                                    } })
                            ),
                            _this2.props.onEditRow && _react2.default.createElement(
                                _EAMGridCell2.default,
                                null,
                                _react2.default.createElement(_Edit2.default, { color: 'primary', onClick: function onClick() {
                                        return _this2.props.onEditRow(row);
                                    },
                                    style: { "cursor": "pointer" } })
                            ),
                            _this2.props.extraColumns && _this2.props.extraColumns.filter(function (extraColumn) {
                                return extraColumn.position !== 'after';
                            }).map(function (extraColumn, index) {
                                return _react2.default.createElement(
                                    _EAMGridCell2.default,
                                    { key: index, style: {
                                            'width': extraColumn.width || '20px',
                                            'minWidth': extraColumn.width || '20px'
                                        } },
                                    _this2.props.cellRenderer && _this2.props.cellRenderer(extraColumn, row)
                                );
                            }),
                            row.cell.map(function (cell) {
                                return cell.order > 0 && !_this2.props.isHiddenField(cell.t) && _this2.props.getCellWidth(cell.t) && _react2.default.createElement(
                                    'div',
                                    { key: cell.n,
                                        className: classes.searchRowCell,
                                        style: {
                                            'width': _this2.props.getCellWidth(cell.t).width + 'px',
                                            'minWidth': _this2.props.getCellWidth(cell.t).width + 'px'
                                        } },
                                    _react2.default.createElement(
                                        'div',
                                        { className: classes.searchRowCellContent },
                                        _this2.props.cellRenderer && _this2.props.cellRenderer(cell, row) || (_this2.props.getCellWidth(cell.t).dataType === 'CHKBOOLEAN' ? _react2.default.createElement(
                                            'div',
                                            { style: {
                                                    justifyContent: "space-evenly",
                                                    display: "flex",
                                                    width: "100%"
                                                } },
                                            cell.value === 'true' ? _react2.default.createElement(_CheckBox2.default, { style: {
                                                    color: _grey2.default[600],
                                                    width: '20px',
                                                    marginTop: '-3px'
                                                } }) : _react2.default.createElement(_CheckBoxOutlineBlank2.default, { style: {
                                                    color: _grey2.default[600],
                                                    width: '20px',
                                                    marginTop: '-3px'
                                                } })
                                        ) : _react2.default.createElement(
                                            _Typography2.default,
                                            { style: {
                                                    width: 'calc(' + _this2.props.getCellWidth(cell.t).width + 'px - 10px)',
                                                    color: 'inherit',
                                                    fontWeight: 'inherit'
                                                } },
                                            cell.value
                                        ))
                                    )
                                );
                            }),
                            _this2.props.extraColumns && _this2.props.extraColumns.filter(function (extraColumn) {
                                return extraColumn.position === 'after';
                            }).map(function (extraColumn, index) {
                                return _react2.default.createElement(
                                    _EAMGridCell2.default,
                                    { key: index, style: {
                                            'width': extraColumn.width || '20px',
                                            'minWidth': extraColumn.width || '20px'
                                        } },
                                    _this2.props.cellRenderer && _this2.props.cellRenderer(extraColumn, row)
                                );
                            })
                        );
                    })
                )
            );
        }
    }]);

    return DataGridTableBody;
}(_react.Component);

exports.default = (0, _index.withStyles)(styles)(DataGridTableBody);