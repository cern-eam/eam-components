'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Search = require('@material-ui/icons/Search');

var _Search2 = _interopRequireDefault(_Search);

var _core = require('@material-ui/core');

var _Select = require('@material-ui/core/Select');

var _Select2 = _interopRequireDefault(_Select);

var _styles = require('@material-ui/core/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FilterOutline = require('mdi-material-ui/FilterOutline');

var _FilterOutline2 = _interopRequireDefault(_FilterOutline);

var _FilterRemoveOutline = require('mdi-material-ui/FilterRemoveOutline');

var _FilterRemoveOutline2 = _interopRequireDefault(_FilterRemoveOutline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    mainPanelStyle: {
        backgroundColor: '#fafafa',
        padding: '10px',
        border: '1px solid lightGray'
    },
    formStyle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    dataspyFormStyle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    fetchDataButton: {
        padding: "4px 16px"
    },
    toggleFilterButton: {
        marginLeft: "10px",
        marginRight: "10px",
        boxShadow: "none",
        backgroundColor: '#fafafa'
    },
    formItem: {
        flex: "0 0 auto"
    },
    selectDataspyInput: {
        backgroundColor: '#fafafa',
        marginLeft: "10px"
    },
    dataspyLabel: {
        marginTop: -2,
        fontSize: 16
    },
    root: {
        margin: "0 auto",
        width: "100%"
    },
    '@media (max-width: 500px)': {
        cleanFiltersButton: {
            display: "none"
        },
        dataspyLabel: {
            display: "none"
        }
    }
};

var DataGridSelectDataSpy = function (_Component) {
    _inherits(DataGridSelectDataSpy, _Component);

    function DataGridSelectDataSpy() {
        _classCallCheck(this, DataGridSelectDataSpy);

        return _possibleConstructorReturn(this, (DataGridSelectDataSpy.__proto__ || Object.getPrototypeOf(DataGridSelectDataSpy)).apply(this, arguments));
    }

    _createClass(DataGridSelectDataSpy, [{
        key: 'render',
        value: function render() {
            var classes = this.props.classes;


            return _react2.default.createElement(
                'div',
                { className: classes.mainPanelStyle },
                _react2.default.createElement(
                    'form',
                    null,
                    _react2.default.createElement(
                        _core.FormControl,
                        { className: classes.root },
                        _react2.default.createElement(
                            'div',
                            { className: classes.formStyle },
                            _react2.default.createElement(
                                'div',
                                { className: classes.dataspyFormStyle },
                                _react2.default.createElement(
                                    'div',
                                    { className: (0, _classnames2.default)(classes.formItem, classes.dataspyLabel) },
                                    'Dataspy:'
                                ),
                                _react2.default.createElement(
                                    _Select2.default,
                                    { className: (0, _classnames2.default)(classes.formItem, classes.selectDataspyInput),
                                        value: this.props.dataSpy,
                                        onChange: this.props.handleChangeDataSpy,
                                        inputProps: {
                                            name: 'dataspy',
                                            id: 'dataspy-select'
                                        },
                                        input: _react2.default.createElement(_core.InputBase, null)
                                    },
                                    this.props.listOfDataSpy && this.props.listOfDataSpy.map(function (dataspy) {
                                        return _react2.default.createElement(
                                            _core.MenuItem,
                                            { key: dataspy.code, value: dataspy.code },
                                            dataspy.label
                                        );
                                    })
                                ),
                                _react2.default.createElement(
                                    _Button2.default,
                                    { variant: 'outlined',
                                        className: (0, _classnames2.default)(classes.formItem, classes.toggleFilterButton),
                                        onClick: this.props.toggleFilter },
                                    this.props.filterVisible ? 'HIDE FILTERS' : 'SHOW FILTERS'
                                ),
                                this.props.filterVisible && _react2.default.createElement(
                                    _Button2.default,
                                    {
                                        variant: 'outlined',
                                        className: classes.cleanFiltersButton,
                                        onClick: this.props.clearFilters },
                                    'Clean filters'
                                )
                            ),
                            _react2.default.createElement(
                                _Button2.default,
                                { variant: 'outlined',
                                    color: 'primary',
                                    className: classes.fetchDataButton,
                                    onClick: this.props.runSearch },
                                _react2.default.createElement(_Search2.default, null),
                                'SEARCH'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DataGridSelectDataSpy;
}(_react.Component);

exports.default = (0, _styles.withStyles)(styles)(DataGridSelectDataSpy);