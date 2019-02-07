"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _EAMInput = require("../../../inputs/EAMInput");

var _EAMInput2 = _interopRequireDefault(_EAMInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DocumentCreationOptions = function (_Component) {
    _inherits(DocumentCreationOptions, _Component);

    function DocumentCreationOptions() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DocumentCreationOptions);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DocumentCreationOptions.__proto__ || Object.getPrototypeOf(DocumentCreationOptions)).call.apply(_ref, [this].concat(args))), _this), _this.inputStyle = {
            flex: "1 1 auto",
            border: "1px solid #ced4da",
            padding: "5px 10px",
            fontSize: 16,
            transition: "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            borderRadius: 4,
            backgroundColor: "#fff",
            marginTop: 5,
            marginBottom: 5
        }, _this.mainDivStyle = {
            margin: 5,
            display: "flex"
        }, _this.optionsLabelStyle = {
            marginTop: 11,
            width: 110,
            fontWeight: 500
        }, _this.optionsStyle = {
            display: "flex",
            flexDirection: "column"

            //
            // RENDER
            //
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    //
    // STYLES
    //


    _createClass(DocumentCreationOptions, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { style: this.mainDivStyle },
                _react2.default.createElement(
                    "div",
                    { style: this.optionsStyle },
                    _react2.default.createElement(_EAMInput2.default, { label: "Description",
                        placeholder: "Description",
                        valueKey: "description",
                        value: this.props.description,
                        updateProperty: function updateProperty(key, value) {
                            return _this2.props.onPropertyChange(key, value);
                        }
                    })
                )
            );
        }
    }]);

    return DocumentCreationOptions;
}(_react.Component);

exports.default = DocumentCreationOptions;