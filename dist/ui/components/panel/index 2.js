'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ExpandMore = require('@material-ui/icons/ExpandMore');

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _ExpansionPanel = require('@material-ui/core/ExpansionPanel');

var _ExpansionPanel2 = _interopRequireDefault(_ExpansionPanel);

var _ExpansionPanelDetails = require('@material-ui/core/ExpansionPanelDetails');

var _ExpansionPanelDetails2 = _interopRequireDefault(_ExpansionPanelDetails);

var _ExpansionPanelSummary = require('@material-ui/core/ExpansionPanelSummary');

var _ExpansionPanelSummary2 = _interopRequireDefault(_ExpansionPanelSummary);

var _Icon = require('@material-ui/core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _OpenInNew = require('mdi-material-ui/OpenInNew');

var _OpenInNew2 = _interopRequireDefault(_OpenInNew);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EISPanel = function (_Component) {
    _inherits(EISPanel, _Component);

    function EISPanel() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EISPanel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EISPanel.__proto__ || Object.getPrototypeOf(EISPanel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            panelExpanded: true
        }, _this.headingStyle = {
            display: "flex",
            alignItems: "center",
            fontWeight: 500
        }, _this.headingIconStyle = {
            fontSize: 20,
            marginRight: 7
        }, _this.summaryStyle = {
            backgroundColor: "#fafafa",
            borderBottom: "1px solid #EEEEEE",
            minHeight: '45px',
            height: '45px'
        }, _this.linkIconStyle = {
            color: "#00aaff"
        }, _this._onPanelChange = function (object, expanded) {
            if (_this.props.alwaysExpanded) {
                expanded = true;
            }
            _this.setState(function () {
                return {
                    panelExpanded: expanded
                };
            });

            if (_this.props.onPanelChange) {
                _this.props.onPanelChange(expanded);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EISPanel, [{
        key: 'linkClickHandler',
        value: function linkClickHandler() {
            window.open(this.props.link, '_blank');
        }
    }, {
        key: 'render',
        value: function render() {
            var detailsStyle = _extends({
                overflow: "visible"
            }, this.props.detailsStyle);

            var panelStyle = this.state.panelExpanded ? { display: 'inherit', overflow: 'visible' } : { overflow: 'hidden' };

            return _react2.default.createElement(
                _ExpansionPanel2.default,
                { defaultExpanded: true, expanded: this.props.alwaysExpanded ? true : this.state.panelExpanded,
                    CollapseProps: { style: _extends({}, panelStyle), unmountOnExit: true, timeout: 300 },
                    onChange: this._onPanelChange },
                _react2.default.createElement(
                    _ExpansionPanelSummary2.default,
                    { expandIcon: this.props.alwaysExpanded ? undefined : _react2.default.createElement(_ExpandMore2.default, null),
                        style: this.summaryStyle },
                    _react2.default.createElement(
                        'div',
                        { style: this.headingStyle },
                        this.props.headingIcon && _react2.default.createElement(_Icon2.default, { style: this.headingIconStyle, className: "fa " + this.props.headingIcon }),
                        _react2.default.createElement(
                            'div',
                            null,
                            this.props.heading
                        ),
                        this.props.link && _react2.default.createElement(
                            _IconButton2.default,
                            { onClick: this.linkClickHandler.bind(this), style: { height: "auto", width: 35 } },
                            _react2.default.createElement(_OpenInNew2.default, { style: this.linkIconStyle })
                        )
                    )
                ),
                _react2.default.createElement(
                    _ExpansionPanelDetails2.default,
                    { style: detailsStyle },
                    this.props.children
                )
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, prevState) {
            // if panelExpanded is passed as prop and is different from the current
            // state.panelExpanded then we update the state
            if (typeof nextProps.panelExpanded !== "undefined" && nextProps.panelExpanded !== prevState.panelExpanded) {
                return {
                    panelExpanded: nextProps.panelExpanded
                };
            }

            // No state update necessary
            return null;
        }
    }]);

    return EISPanel;
}(_react.Component);

EISPanel.defaultProps = {
    alwaysExpanded: false,
    onPanelChange: undefined
};

exports.default = EISPanel;