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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Checklist =
/*#__PURE__*/
function (_Component) {
  _inherits(Checklist, _Component);

  function Checklist() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Checklist);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checklist)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      detailsVisible: false,
      blocked: false,
      requestTimeout: null
    };

    _this.init = function (checklistItem) {
      if (checklistItem) {
        _this.setState({
          checklistItem: checklistItem,
          detailsVisible: !!checklistItem.notes || !!checklistItem.followUpWorkOrder || checklistItem.followUp === '+'
        });
      }
    };

    _this.getCheckListItemStyle = function () {
      return {
        paddingTop: 5,
        paddingBottom: 5,
        borderBottom: "dashed 1px #d1d3d4",
        opacity: _this.state.blocked ? 0.5 : 1,
        pointerEvents: _this.state.blocked ? 'none' : 'auto'
      };
    };

    _this.firstLine = {
      display: "flex",
      alignItems: "center",
      minHeight: 48,
      justifyContent: 'space-between'
    };
    _this.firstLineDesc = {
      "float": "left",
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
    return _this;
  }

  _createClass(Checklist, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.init(this.props.checklistItem);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var checklistItemProps = nextProps.checklistItem;
      var checklistItemState = this.state.checklistItem;

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
    key: "onChange",
    value: function onChange(checklistItem) {
      var _this2 = this;

      // Block the UI
      this.setState({
        blocked: true
      }); // Copy the current checklist item (will be used to restore the UI)

      var oldChecklistItem = Object.assign({}, this.state.checklistItem); //

      this.setState({
        checklistItem: checklistItem
      }); // Update the checklist Item

      this.setState(function (state, props) {
        if (state.requestTimeout !== null) clearTimeout(state.requestTimeout);
        return {
          requestTimeout: setTimeout(function () {
            _this2.setState({
              requestTimeout: null
            });

            _this2.props.updateChecklistItem(checklistItem).then(function (response) {
              _this2.setState({
                blocked: false
              });
            })["catch"](function (error) {
              _this2.props.handleError(error); // Unblock the UI and restore the UI


              _this2.setState({
                blocked: false,
                checklistItem: oldChecklistItem
              });
            });
          }, 360)
        };
      });
    }
  }, {
    key: "descClickHandler",
    value: function descClickHandler() {
      //if (!this.state.notesVisible) {
      //    setTimeout(() => this.notesInput.focus(), 0)
      //}
      this.setState({
        detailsVisible: !this.state.detailsVisible
      });
    }
  }, {
    key: "renderChecklistItemInput",
    value: function renderChecklistItemInput() {
      var _this3 = this;

      var checklistItem = this.state.checklistItem;
      var fields = [];
      var options = {}; // use until use of numeric values in result field is deprecated

      var clearResult = function clearResult(newProps, type, value) {
        delete newProps.result;
        return newProps;
      };

      switch (checklistItem.type) {
        case "01":
          fields = [[_ChecklistItemInput["default"].FIELD.CHECKBOX, {
            code: "COMPLETED",
            desc: "Completed"
          }]];
          options.style = _ChecklistItemInput["default"].STYLE.SINGLE;
          break;

        case "02":
          fields = [[_ChecklistItemInput["default"].FIELD.CHECKBOX, {
            code: "YES",
            desc: "Yes"
          }], [_ChecklistItemInput["default"].FIELD.CHECKBOX, {
            code: "NO",
            desc: "No"
          }]];
          options.style = _ChecklistItemInput["default"].STYLE.SAMELINE;
          break;

        case "03":
          var MINIMUM_MIN_FINDINGS = 4;
          fields = [[_ChecklistItemInput["default"].FIELD.FINDING, {
            dropdown: checklistItem.possibleFindings.length >= Math.min(this.props.minFindingsDropdown, MINIMUM_MIN_FINDINGS)
          }]];
          break;

        case "04":
        case "05":
          fields = [[_ChecklistItemInput["default"].FIELD.NUMERIC]];
          options.beforeOnChange = clearResult;
          break;

        case "06":
          fields = [[_ChecklistItemInput["default"].FIELD.FINDING], [_ChecklistItemInput["default"].FIELD.NUMERIC]];
          options.beforeOnChange = clearResult;
          break;

        case "07":
          fields = [[_ChecklistItemInput["default"].FIELD.CHECKBOX, {
            code: "OK",
            desc: "OK"
          }], [_ChecklistItemInput["default"].FIELD.CHECKBOX, {
            code: "REPAIRSNEEDED",
            desc: "Repairs Needed"
          }], [_ChecklistItemInput["default"].FIELD.FINDING]];

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
            newProps.finding = type === _ChecklistItemInput["default"].FIELD.CHECKBOX ? undefined : newProps.finding;
            return newProps;
          };

          break;

        case "08":
          fields = [[_ChecklistItemInput["default"].FIELD.CHECKBOX, {
            code: "GOOD",
            desc: "Good"
          }], [_ChecklistItemInput["default"].FIELD.CHECKBOX, {
            code: "POOR",
            desc: "Poor"
          }]];
          options.style = _ChecklistItemInput["default"].STYLE.SAMELINE;
          break;

        case "09":
        case "10":
          fields = [[_ChecklistItemInput["default"].FIELD.CHECKBOX, {
            code: "OK",
            desc: "OK"
          }], [_ChecklistItemInput["default"].FIELD.CHECKBOX, {
            code: "ADJUSTED",
            desc: "Adjusted"
          }]];

          if (checklistItem.type === "10") {
            fields.push([_ChecklistItemInput["default"].FIELD.NUMERIC]);
          }

          options.style = _ChecklistItemInput["default"].STYLE.SAMELINE;
          break;

        case "11":
        case "12":
          fields = [[_ChecklistItemInput["default"].FIELD.CHECKBOX, {
            code: "OK",
            desc: "OK"
          }], [_ChecklistItemInput["default"].FIELD.CHECKBOX, {
            code: "NONCONFORMITY",
            desc: "Nonconformity"
          }]];

          if (checklistItem.type === "12") {
            fields.push([_ChecklistItemInput["default"].FIELD.NUMERIC]);

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

      if (fields === undefined) return _react["default"].createElement("div", null);
      return _react["default"].createElement(_ChecklistItemInput["default"], {
        checklistItem: checklistItem,
        onChange: function onChange(value) {
          return _this3.onChange(value);
        },
        fields: fields,
        options: options
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var checklistItem = this.state.checklistItem;
      return _react["default"].createElement("div", {
        style: this.getCheckListItemStyle()
      }, _react["default"].createElement("div", {
        style: this.firstLine
      }, _react["default"].createElement("div", {
        style: this.firstLineDesc,
        onClick: this.descClickHandler.bind(this)
      }, _react["default"].createElement("label", null, checklistItem.desc), checklistItem.requiredToClose === true && _react["default"].createElement("label", {
        style: {
          color: "red"
        }
      }, " *")), this.renderChecklistItemInput()), _react["default"].createElement(_Collapse["default"], {
        "in": this.state.detailsVisible
      }, _react["default"].createElement("div", {
        style: this.checklistDetailsStyle
      }, _react["default"].createElement(_ChecklistItemNotes["default"], {
        checklistItem: checklistItem,
        onChange: function onChange(value) {
          return _this4.onChange(value);
        }
      }), _react["default"].createElement(_ChecklistItemFollowUp["default"], {
        checklistItem: checklistItem,
        onChange: function onChange(value) {
          return _this4.onChange(value);
        },
        getWoLink: this.props.getWoLink
      }))));
    }
  }]);

  return Checklist;
}(_react.Component);

exports["default"] = Checklist;