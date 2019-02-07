'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('@material-ui/core/Table');

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = require('@material-ui/core/TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = require('@material-ui/core/TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = require('@material-ui/core/TableHead');

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = require('@material-ui/core/TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableSortLabel = require('@material-ui/core/TableSortLabel');

var _TableSortLabel2 = _interopRequireDefault(_TableSortLabel);

var _Select = require('@material-ui/core/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Tooltip = require('@material-ui/core/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

require('./EISTable.css');

var _reactRouterDom = require('react-router-dom');

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var whiteBackground = {
    backgroundColor: "#ffffff"
};

var greyBackground = {
    backgroundColor: "#eeeeee"
};

/**
 * Receive as props:
 * data: Containing all the results from the server
 * headers: Headers to display
 * propCodes: Properties of the data to be displayed (In the desired order)
 * linksMap: Information of the columns that will be displayed as links
 */

var EISTable = function (_Component) {
    _inherits(EISTable, _Component);

    function EISTable() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EISTable);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EISTable.__proto__ || Object.getPrototypeOf(EISTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            windowWidth: window.innerWidth,
            orderBy: -1,
            order: 'asc',
            data: []
        }, _this.onWindowSizeChange = function () {
            _this.setState(function () {
                return {
                    windowWidth: window.innerWidth
                };
            });
        }, _this.createSortHandler = function (property) {
            return function (event) {
                _this.handleRequestSort(event, property);
            };
        }, _this.createSortHandlerMobile = function (event) {
            _this.handleRequestSort(event, event.target.value);
        }, _this.handleRequestSort = function (event, property) {
            //By default asc
            var order = 'asc';
            //If negative, initial data
            if (property < 0) {
                _this.setState(function () {
                    return { data: _this.props.data, order: order, orderBy: property };
                });
                return;
            }

            var orderBy = property;
            if (property < _this.props.propCodes.length) {
                if (_this.state.orderBy === property && _this.state.order === 'asc') {
                    order = 'desc';
                }
            } else {
                /*It's desc*/
                orderBy = property - _this.props.propCodes.length;
                order = 'desc';
            }
            //Property Code
            var propCode = _this.props.propCodes[orderBy];
            //Perform sorting
            var data = order === 'desc' ? [].concat(_toConsumableArray(_this.state.data)).sort(function (a, b) {
                return _this.getCompValue(b[propCode]) < _this.getCompValue(a[propCode]) ? -1 : 1;
            }) : [].concat(_toConsumableArray(_this.state.data)).sort(function (a, b) {
                return _this.getCompValue(a[propCode]) < _this.getCompValue(b[propCode]) ? -1 : 1;
            });

            //Assign final data
            _this.setState(function () {
                return { data: data, order: order, orderBy: property };
            });
        }, _this.getCompValue = function (value) {
            if (!isNaN(value)) {
                return +value;
            }
            //Default case
            return value;
        }, _this.renderContent = function (propCode, content) {
            //Normal content
            if (!_this.props.linksMap.get(propCode)) {
                if (content[propCode] === 'true' || content[propCode] === 'false') {
                    //Checkbox
                    return _react2.default.createElement(_Checkbox2.default, { checked: content[propCode] === 'true',
                        value: content[propCode],
                        disabled: true });
                }
                return content[propCode];
            }

            //Link
            if (_this.props.linksMap.get(propCode)['linkType'] === 'fixed') {
                var linkValue = process.env.REACT_APP_FRONTEND + _this.props.linksMap.get(propCode)['linkValue'];
                return _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                        to: { pathname: linkValue + content[propCode] } },
                    content[propCode]
                );
            } else {
                if (_this.props.linksMap.get(propCode)['linkType'] === 'absolute') {
                    var _linkValue = _this.props.linksMap.get(propCode)['linkValue'];
                    return _react2.default.createElement(
                        'a',
                        { href: _linkValue + content[propCode], target: '_blank' },
                        content[propCode]
                    );
                } else {
                    /*Dynamic link*/
                    var _linkValue2 = process.env.REACT_APP_FRONTEND + content[_this.props.linksMap.get(propCode)['linkValue']];
                    return _react2.default.createElement(
                        _reactRouterDom.Link,
                        {
                            to: { pathname: _linkValue2 } },
                        content[propCode]
                    );
                }
            }
        }, _this.renderSortByValuesMobile = function () {
            // Create list of values
            var listValues = _this.props.headers.map(function (elem) {
                return elem + ' (Asc)';
            });
            listValues = listValues.concat(_this.props.headers.map(function (elem) {
                return elem + ' (Desc)';
            }));

            return _react2.default.createElement(
                _Select2.default,
                {
                    native: true,
                    value: _this.state.orderBy,
                    onChange: _this.createSortHandlerMobile, className: 'eamTableSortDropdown' },
                _react2.default.createElement(
                    'option',
                    { value: -1 },
                    'Select sort column...'
                ),
                listValues.map(function (elem, index) {
                    return _react2.default.createElement(
                        'option',
                        { key: index, value: index },
                        elem
                    );
                })
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EISTable, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            window.addEventListener('resize', this.onWindowSizeChange);
            //Set the data
            this.setState(function () {
                return { data: _this2.props.data };
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            //Set the data
            this.initialData = this.props.data;
            this.setState(function () {
                return { data: nextProps.data };
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.onWindowSizeChange);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var isMobile = this.state.windowWidth < this.props.maxMobileSize;
            var rowsSelectable = this.props.selectedRowIndexes && this.props.onRowClick;

            if (isMobile) {
                return _react2.default.createElement(
                    _Table2.default,
                    { className: 'responsiveTable', style: { overflow: 'visible' } },
                    _react2.default.createElement(
                        _TableHead2.default,
                        null,
                        _react2.default.createElement(
                            _TableRow2.default,
                            null,
                            _react2.default.createElement(
                                _TableCell2.default,
                                null,
                                'Sort by:'
                            ),
                            _react2.default.createElement(
                                _TableCell2.default,
                                null,
                                this.renderSortByValuesMobile()
                            )
                        )
                    ),
                    this.state.data.map(function (content, index) {
                        // every second row is grey
                        var style = index % 2 === 0 ? whiteBackground : greyBackground;

                        if (_this3.props.selectedRowIndexes && _this3.props.selectedRowIndexes.includes(index)) {
                            style = _extends({}, style, {
                                backgroundColor: "#2b82ff"
                            });
                        }

                        if (rowsSelectable) {
                            style = _extends({}, style, {
                                cursor: "pointer"
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
                        if (_this3.props.stylesMap) {
                            Object.keys(_this3.props.stylesMap).forEach(function (key) {
                                if (content[key]) {
                                    style = _extends({}, style, _this3.props.stylesMap[key]);
                                }
                            });
                        }

                        return _react2.default.createElement(
                            _TableBody2.default,
                            { key: index, style: style, onClick: rowsSelectable ? function () {
                                    return _this3.props.onRowClick(content, index);
                                } : function () {} },
                            _this3.props.propCodes.map(function (prop, index) {
                                return _react2.default.createElement(
                                    _TableRow2.default,
                                    { key: prop, style: style },
                                    _react2.default.createElement(
                                        _TableCell2.default,
                                        null,
                                        _this3.props.headers[index]
                                    ),
                                    _react2.default.createElement(
                                        _TableCell2.default,
                                        null,
                                        _this3.renderContent(prop, content)
                                    )
                                );
                            })
                        );
                    })
                );
            } else {
                return _react2.default.createElement(
                    _Table2.default,
                    { className: 'responsiveTable', style: { overflow: 'visible' } },
                    _react2.default.createElement(
                        _TableHead2.default,
                        null,
                        _react2.default.createElement(
                            _TableRow2.default,
                            null,
                            this.props.headers.map(function (header, index) {
                                return _react2.default.createElement(
                                    _TableCell2.default,
                                    { key: header,
                                        sortDirection: _this3.state.orderBy === index ? _this3.state.order : false },
                                    _react2.default.createElement(
                                        _Tooltip2.default,
                                        {
                                            title: 'Sort',
                                            placement: 'bottom-end',
                                            enterDelay: 300 },
                                        _react2.default.createElement(
                                            _TableSortLabel2.default,
                                            {
                                                active: _this3.state.orderBy === index,
                                                direction: _this3.state.order,
                                                onClick: _this3.createSortHandler(index) },
                                            header
                                        )
                                    )
                                );
                            })
                        )
                    ),
                    _react2.default.createElement(
                        _TableBody2.default,
                        null,
                        this.state.data.map(function (content, index) {
                            var style = {};

                            if (_this3.props.selectedRowIndexes && _this3.props.selectedRowIndexes.includes(index)) {
                                style = _extends({}, style, {
                                    backgroundColor: "#2196f3"
                                });
                            }

                            if (rowsSelectable) {
                                style = _extends({}, style, {
                                    cursor: "pointer"
                                });
                            }

                            if (_this3.props.stylesMap) {
                                Object.keys(_this3.props.stylesMap).forEach(function (key) {
                                    if (content[key]) {
                                        style = _extends({}, style, _this3.props.stylesMap[key]);
                                    }
                                });
                            }

                            return _react2.default.createElement(
                                _TableRow2.default,
                                { key: index, style: style, onClick: rowsSelectable ? function () {
                                        return _this3.props.onRowClick(content, index);
                                    } : function () {} },
                                _this3.props.propCodes.map(function (propCode) {
                                    return _react2.default.createElement(
                                        _TableCell2.default,
                                        { key: propCode },
                                        _this3.renderContent(propCode, content)
                                    );
                                })
                            );
                        })
                    )
                );
            }
        }
    }]);

    return EISTable;
}(_react.Component);

EISTable.propTypes = {
    linksMap: _propTypes2.default.instanceOf(Map),
    data: _propTypes2.default.array.isRequired,
    headers: _propTypes2.default.array.isRequired,
    propCodes: _propTypes2.default.array.isRequired,
    selectedRowIndexes: _propTypes2.default.array,
    onRowClick: _propTypes2.default.func,
    stylesMap: _propTypes2.default.object
};

EISTable.defaultProps = {
    linksMap: new Map(),
    maxMobileSize: 540
};

exports.default = EISTable;