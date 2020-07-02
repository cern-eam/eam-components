"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ChecklistItemInput = _interopRequireDefault(require("./ChecklistItemInput"));

var _ChecklistItemNotes = _interopRequireDefault(require("./ChecklistItemNotes"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _ChecklistItemFollowUp = _interopRequireDefault(require("./ChecklistItemFollowUp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ChecklistItem = /*#__PURE__*/function (_Component) {
  _inherits(ChecklistItem, _Component);

  var _super = _createSuper(ChecklistItem);

  function ChecklistItem(props) {
    var _this;

    _classCallCheck(this, ChecklistItem);

    _this = _super.call(this, props);

    _this.getCheckListItemStyle = function (checklistItem) {
      return {
        paddingTop: 5,
        paddingBottom: 5,
        //paddingLeft: checklistItem.color ? 20 : 25,
        pointerEvents: _this.state.blocked ? 'none' : 'auto',
        flex: '1 1 auto' //borderLeft: checklistItem.color ? `5px ridge #${checklistItem.color}` : undefined,

      };
    };

    _this.firstLine = {
      display: "flex",
      alignItems: "stretch",
      minHeight: 48,
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    };
    _this.firstLineDesc = {
      display: 'flex',
      alignItems: "center",
      //float: "left",
      pointerEvents: "initial",
      color: "rgba(0, 0, 0, 0.87)"
    };
    _this.checklistDetailsStyle = {
      marginLeft: -5,
      marginTop: -5,
      marginRight: -8,
      paddingRight: 3,
      display: "flex",
      flexDirection: "row"
    };

    _this.test = function () {
      return _defineProperty({
        display: "flex",
        marginRight: "15px",
        backgroundColor: _this.props.checklistItem.color ? "#".concat(_this.props.checklistItem.color) : undefined,
        border: '1px dashed #ccc',
        flex: '0 1 auto',
        width: '5px',
        margin: '10px 15px 10px 0px'
      }, "marginRight", '15px');
    };

    _this.state = {
      detailsVisible: false,
      blocked: false,
      debounce: null
    };
    _this.notes = _react["default"].createRef();
    return _this;
  }

  _createClass(ChecklistItem, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.init(this.props.checklistItem);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var debounce = this.state.debounce;

      if (debounce !== null) {
        clearTimeout(debounce.timeout);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var checklistItemProps = nextProps.checklistItem;
      var checklistItemState = this.props.checklistItem;

      if (checklistItemProps && checklistItemState) {
        if (checklistItemProps.workOrderCode !== checklistItemState.workOrderCode) {
          console.log('new wo!');
          this.init(checklistItemProps);
        }

        if (checklistItemProps.followUpWorkOrder !== checklistItemState.followUpWorkOrder) {
          var checklistItem = _objectSpread({}, checklistItemState, {
            followUpWorkOrder: checklistItemProps.followUpWorkOrder
          });

          this.init(checklistItem);
        }
      }
    }
  }, {
    key: "init",
    value: function init(checklistItem) {
      if (checklistItem) {
        this.setState({
          detailsVisible: !!checklistItem.notes || !!checklistItem.followUpWorkOrder || checklistItem.followUp === '+'
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(checklistItem) {
      var _this2 = this;

      var handleError = this.props.handleError;
      var DEBOUNCE_TIME_MS = 50;
      var oldChecklistItem = this.props.checklistItem;

      var request = function request() {
        var requestObject = {
          checkListCode: oldChecklistItem.checkListCode
        };
        console.log(oldChecklistItem, checklistItem);

        for (var _i = 0, _Object$entries = Object.entries(checklistItem); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          if (value !== oldChecklistItem[key]) {
            requestObject[key] = value;
          }
        }

        _this2.props.updateChecklistItem(requestObject)["catch"](function (error) {
          handleError(error);

          _this2.props.onUpdateChecklistItem(checklistItem);

          _this2.setState({
            debounce: null
          });
        })["finally"](function () {
          _this2.setState({
            blocked: false
          });
        });
      };

      this.setState(function (state) {
        if (state.debounce !== null) {
          clearTimeout(state.debounce.timeout);
        }

        _this2.props.onUpdateChecklistItem(checklistItem);

        return {
          blocked: true,
          debounce: _objectSpread({}, state.debounce || {}, {
            timeout: setTimeout(request, DEBOUNCE_TIME_MS),
            // Copy the oldest checklist item (will be used to restore the UI)
            oldChecklistItem: state.debounce ? state.debounce.oldChecklistItem : _this2.props.checklistItem
          })
        };
      });
    }
  }, {
    key: "descClickHandler",
    value: function descClickHandler() {
      var _this3 = this;

      var notes = this.notes.current;
      this.setState(function (state, props) {
        var detailsVisible = !state.detailsVisible;

        if (detailsVisible) {
          setTimeout(function () {
            return _this3.notes.current.focus();
          }, 0);
        }

        return {
          detailsVisible: detailsVisible
        };
      });
    }
  }, {
    key: "renderChecklistItemInput",
    value: function renderChecklistItemInput() {
      var _this4 = this;

      var checklistItem = this.props.checklistItem;
      var fields = [];
      var options = {}; // use until use of numeric values in result field is deprecated

      var clearResult = function clearResult(newProps, type, value) {
        delete newProps.result;
        return newProps;
      };

      var createField = _ChecklistItemInput["default"].createField;
      var _ChecklistItemInput$F = _ChecklistItemInput["default"].FIELD,
          CHECKBOX = _ChecklistItemInput$F.CHECKBOX,
          FINDING = _ChecklistItemInput$F.FINDING,
          NUMERIC = _ChecklistItemInput$F.NUMERIC;

      switch (checklistItem.type) {
        case "01":
          fields = [createField(CHECKBOX, {
            code: "COMPLETED",
            desc: "Completed"
          })];
          options.style = _ChecklistItemInput["default"].STYLE.SINGLE;
          break;

        case "02":
          fields = [createField(CHECKBOX, {
            code: "YES",
            desc: "Yes"
          }), createField(CHECKBOX, {
            code: "NO",
            desc: "No"
          })];
          options.style = _ChecklistItemInput["default"].STYLE.SAMELINE;
          break;

        case "03":
          var MINIMUM_MIN_FINDINGS = 4;
          fields = [createField(FINDING, {
            dropdown: checklistItem.possibleFindings.length >= Math.min(this.props.minFindingsDropdown, MINIMUM_MIN_FINDINGS)
          })];
          break;

        case "04":
        case "05":
          fields = [createField(NUMERIC)];
          options.beforeOnChange = clearResult;
          break;

        case "06":
          fields = [createField(FINDING), createField(NUMERIC)];
          options.beforeOnChange = clearResult;
          break;

        case "07":
          fields = [createField(CHECKBOX, {
            code: "OK",
            desc: "OK"
          }), createField(CHECKBOX, {
            code: "REPAIRSNEEDED",
            desc: "Repairs Needed"
          }), createField(FINDING)];

          switch (checklistItem.result) {
            case null:
              checklistItem.possibleFindings = [];
              break;

            case "OK":
              checklistItem.possibleFindings = [{
                code: "AM",
                desc: "Adjustments Made"
              }];
              break;

            case "REPAIRSNEEDED":
              checklistItem.possibleFindings = [{
                code: "RC",
                desc: "Repair Completed"
              }, {
                code: "TR",
                desc: "Temporary Repair"
              }];
              break;
          }

          options.beforeOnChange = function (newProps, type, value) {
            if (type === _ChecklistItemInput["default"].FIELD.CHECKBOX) {
              delete newProps.finding;
            }

            return newProps;
          };

          break;

        case "08":
          fields = [createField(CHECKBOX, {
            code: "GOOD",
            desc: "Good"
          }), createField(CHECKBOX, {
            code: "POOR",
            desc: "Poor"
          })];
          options.style = _ChecklistItemInput["default"].STYLE.SAMELINE;
          break;

        case "09":
        case "10":
          fields = [createField(CHECKBOX, {
            code: "OK",
            desc: "OK"
          }), createField(CHECKBOX, {
            code: "ADJUSTED",
            desc: "Adjusted"
          })];

          if (checklistItem.type === "10") {
            fields.push(createField(NUMERIC));
          }

          options.style = _ChecklistItemInput["default"].STYLE.SAMELINE;
          break;

        case "11":
        case "12":
          fields = [createField(CHECKBOX, {
            code: "OK",
            desc: "OK"
          }), createField(CHECKBOX, {
            code: "NONCONFORMITY",
            desc: "Nonconformity"
          })];

          if (checklistItem.type === "12") {
            fields.push(createField(_ChecklistItemInput["default"].FIELD.NUMERIC));

            options.beforeOnChange = function (newProps, type, value) {
              if (type === _ChecklistItemInput["default"].FIELD.NUMERIC && newProps.result === null) {
                newProps.result = "OK";
              }

              return newProps;
            };
          }

          options.style = _ChecklistItemInput["default"].STYLE.SAMELINE;
          break;
      }

      if (fields === undefined) return /*#__PURE__*/_react["default"].createElement("div", null);
      return /*#__PURE__*/_react["default"].createElement(_ChecklistItemInput["default"], {
        checklistItem: checklistItem,
        onChange: function onChange(value) {
          return _this4.onChange(value);
        },
        fields: fields,
        options: options
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var checklistItem = this.props.checklistItem;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex',
          alignItems: "stretch",
          minHeight: 48,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottom: "dashed 1px #d1d3d4",
          opacity: this.state.blocked ? 0.5 : 1
        }
      }, checklistItem.color ? /*#__PURE__*/_react["default"].createElement("div", {
        style: this.test()
      }) : null, /*#__PURE__*/_react["default"].createElement("div", {
        style: this.getCheckListItemStyle(checklistItem)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: this.firstLine
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: this.firstLineDesc,
        onClick: this.descClickHandler.bind(this)
      }, /*#__PURE__*/_react["default"].createElement("label", null, checklistItem.desc), checklistItem.requiredToClose === true && /*#__PURE__*/_react["default"].createElement("label", {
        style: {
          color: "red"
        }
      }, " *")), this.renderChecklistItemInput()), /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
        "in": this.state.detailsVisible
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: this.checklistDetailsStyle
      }, /*#__PURE__*/_react["default"].createElement(_ChecklistItemNotes["default"], {
        ref: this.notes,
        checklistItem: checklistItem,
        onChange: function onChange(value) {
          return _this5.onChange(value);
        }
      }), !checklistItem.hideFollowUp && /*#__PURE__*/_react["default"].createElement(_ChecklistItemFollowUp["default"], {
        checklistItem: checklistItem,
        onChange: function onChange(value) {
          return _this5.onChange(value);
        },
        getWoLink: this.props.getWoLink
      })))));
    }
  }]);

  return ChecklistItem;
}(_react.Component);

exports["default"] = ChecklistItem;