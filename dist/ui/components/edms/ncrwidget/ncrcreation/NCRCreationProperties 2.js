"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _EAMSelect = require("../../../inputs/EAMSelect");

var _EAMSelect2 = _interopRequireDefault(_EAMSelect);

var _EAMInput = require("../../../inputs/EAMInput");

var _EAMInput2 = _interopRequireDefault(_EAMInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var COMBOBOX = 'COMBOBOX';

var NCRCreationProperties = function (_Component) {
    _inherits(NCRCreationProperties, _Component);

    function NCRCreationProperties() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NCRCreationProperties);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NCRCreationProperties.__proto__ || Object.getPrototypeOf(NCRCreationProperties)).call.apply(_ref, [this].concat(args))), _this), _this.inputStyle = {
            flex: "1 1 auto",
            border: "1px solid #ced4da",
            padding: "5px 10px",
            fontSize: 16,
            transition: "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            borderRadius: 4,
            backgroundColor: "#fff",
            marginTop: 5,
            marginBottom: 5
        }, _this.computeMainDivStyle = function () {
            return {
                display: _this.props.showNCRProperties ? "flex" : "none",
                flexDirection: "column"
            };
        }, _this.optionsStyle = {
            display: "flex",
            flexDirection: "column"
        }, _this.generatePropertyList = function (properties) {
            return properties.map(function (property) {
                if (property.displayType === COMBOBOX) {
                    var propValues = property.listOfValues.value.map(function (value) {
                        return { code: value, desc: value };
                    });
                    return _react2.default.createElement(_EAMSelect2.default, { label: property.label,
                        required: property.mandatory,
                        valueKey: property.name,
                        value: _this.props.currentProperties[property.name] && _this.props.currentProperties[property.name].value || '',
                        values: propValues,
                        updateProperty: function updateProperty(key, value) {
                            return _this.props.onNCRPropertyChange(key, value);
                        } });
                } else {
                    return _react2.default.createElement(_EAMInput2.default, { label: property.label,
                        required: property.mandatory,
                        valueKey: property.name,
                        value: _this.props.currentProperties[property.name] && _this.props.currentProperties[property.name].value || '',
                        updateProperty: function updateProperty(key, value) {
                            return _this.props.onNCRPropertyChange(key, value);
                        } });
                }
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    //
    // STYLES
    //


    _createClass(NCRCreationProperties, [{
        key: "render",


        //
        // RENDER
        //
        value: function render() {
            return _react2.default.createElement(
                "div",
                { style: this.computeMainDivStyle() },
                _react2.default.createElement(
                    "div",
                    { style: this.optionsStyle },
                    this.generatePropertyList(this.props.NCRProperties)
                )
            );
        }
    }]);

    return NCRCreationProperties;
}(_react.Component);

exports.default = NCRCreationProperties;