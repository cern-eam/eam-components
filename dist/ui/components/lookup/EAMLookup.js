'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('@material-ui/icons');

var _core = require('@material-ui/core');

var _eamgrid = require('../eamgrid');

var _eamgrid2 = _interopRequireDefault(_eamgrid);

var _uiActions = require('../actions/uiActions');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    root: {
        padding: 0,
        paddingTop: "0px !important"
    }
};

var EAMLookup = function (_React$Component) {
    _inherits(EAMLookup, _React$Component);

    function EAMLookup() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EAMLookup);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EAMLookup.__proto__ || Object.getPrototypeOf(EAMLookup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            open: false
        }, _this.iconButtonStyle = {
            position: "absolute",
            top: _this.props.top || 30,
            right: _this.props.right || -2,
            backgroundColor: "transparent",
            width: _this.props.width || 32,
            height: _this.props.height || 32,
            zIndex: 1,
            cursor: "pointer",
            color: '#8c8c8c'
        }, _this.openDialog = function () {
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
        }, _this.closeDialog = function () {
            _this.setState(function () {
                return {
                    open: false
                };
            });
        }, _this.onRowClick = function (row) {
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
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EAMLookup, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            //Check disabled
            if (this.props.disabled) {
                return this.props.children;
            }
            //Render component normally
            return _react2.default.createElement(
                'div',
                { style: { position: "relative" } },
                this.props.children,
                _react2.default.createElement(_icons.Search, { style: this.iconButtonStyle, onClick: this.openDialog }),
                _react2.default.createElement(
                    _core.Dialog,
                    {
                        open: this.state.open,
                        onClose: this.closeDialog,
                        'aria-labelledby': 'alert-dialog-title',
                        'aria-describedby': 'alert-dialog-description',
                        height: 500,
                        maxWidth: 'md',
                        classes: this.props.classes
                    },
                    _react2.default.createElement(
                        _core.DialogContent,
                        { classes: this.props.classes },
                        _react2.default.createElement(
                            'div',
                            { style: { height: "85vh", maxHeight: 650, marginBottom: -30, overflowY: "hidden" } },
                            _react2.default.createElement(_eamgrid2.default, {
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
                            })
                        )
                    )
                )
            );
        }
    }]);

    return EAMLookup;
}(_react2.default.Component);

EAMLookup.propTypes = {
    filterVisible: _propTypes2.default.bool
};

EAMLookup.defaultProps = {
    filterVisible: true
};

exports.default = (0, _core.withStyles)(styles)(EAMLookup);