"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var EAMGridKeyboardHandler = function EAMGridKeyboardHandler(props) {
  var onSearch = props.onSearch,
      toggleFilters = props.toggleFilters;

  var handleUserKeyPress = _react["default"].useCallback(function (event) {
    switch (event.key) {
      case 'Enter':
      case 'F8':
        onSearch();
        break;

      case 'F7':
        toggleFilters();
        break;

      default:
        break;
    }
  }, [onSearch, toggleFilters]);

  _react["default"].useEffect(function () {
    window.addEventListener('keydown', handleUserKeyPress);
    return function () {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return null;
};

var _default = EAMGridKeyboardHandler;
exports["default"] = _default;