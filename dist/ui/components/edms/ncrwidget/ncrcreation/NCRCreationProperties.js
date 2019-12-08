"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _EAMSelect = _interopRequireDefault(require("../../../inputs/EAMSelect"));

var _EAMInput = _interopRequireDefault(require("../../../inputs/EAMInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var COMBOBOX = 'COMBOBOX';

var NCRCreationProperties =
/*#__PURE__*/
function (_Component) {
  _inherits(NCRCreationProperties, _Component);

  function NCRCreationProperties() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NCRCreationProperties);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NCRCreationProperties)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.inputStyle = {
      flex: "1 1 auto",
      border: "1px solid #ced4da",
      padding: "5px 10px",
      fontSize: 16,
      transition: "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      borderRadius: 4,
      backgroundColor: "#fff",
      marginTop: 5,
      marginBottom: 5
    };

    _this.computeMainDivStyle = function () {
      return {
        display: _this.props.showNCRProperties ? "flex" : "none",
        flexDirection: "column"
      };
    };

    _this.optionsStyle = {
      display: "flex",
      flexDirection: "column"
    };

    _this.generatePropertyList = function (properties) {
      return properties.map(function (property) {
        if (property.displayType === COMBOBOX) {
          var propValues = property.listOfValues.value.map(function (value) {
            return {
              code: value,
              desc: value
            };
          });
          return _react["default"].createElement(_EAMSelect["default"], {
            label: property.label,
            required: property.mandatory,
            valueKey: property.name,
            value: _this.props.currentProperties[property.name] && _this.props.currentProperties[property.name].value || '',
            values: propValues,
            updateProperty: function updateProperty(key, value) {
              return _this.props.onNCRPropertyChange(key, value);
            }
          });
        } else {
          return _react["default"].createElement(_EAMInput["default"], {
            label: property.label,
            required: property.mandatory,
            valueKey: property.name,
            value: _this.props.currentProperties[property.name] && _this.props.currentProperties[property.name].value || '',
            updateProperty: function updateProperty(key, value) {
              return _this.props.onNCRPropertyChange(key, value);
            }
          });
        }
      });
    };

    return _this;
  }

  _createClass(NCRCreationProperties, [{
    key: "render",
    //
    // RENDER
    //
    value: function render() {
      return _react["default"].createElement("div", {
        style: this.computeMainDivStyle()
      }, _react["default"].createElement("div", {
        style: this.optionsStyle
      }, this.generatePropertyList(this.props.NCRProperties)));
    }
  }]);

  return NCRCreationProperties;
}(_react.Component);

var _default = NCRCreationProperties;
exports["default"] = _default;