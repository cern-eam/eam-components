function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component } from 'react';
import ChecklistItemInput from './ChecklistItemInput';
import ChecklistItemNotes from './ChecklistItemNotes';
import Collapse from '@mui/material/Collapse';
import ChecklistItemFollowUp from "./ChecklistItemFollowUp";
import ChecklistItemNotApplicableOptions from './ChecklistItemNotApplicableOptions';
import WSChecklists from '../../../tools/WSChecklists';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Tooltip from '@mui/material/Tooltip';
import { FileTreeOutline } from 'mdi-material-ui';
var ChecklistItem = /*#__PURE__*/function (_Component) {
  function ChecklistItem(props) {
    var _this;
    _classCallCheck(this, ChecklistItem);
    _this = _callSuper(this, ChecklistItem, [props]);
    _this.getCheckListItemStyle = function (blocked) {
      return {
        paddingTop: 5,
        paddingBottom: 5,
        pointerEvents: blocked ? 'none' : 'auto',
        flex: '1 1 auto'
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
      "float": "left",
      display: "flex",
      marginRight: "5px",
      alignItems: "center",
      pointerEvents: "initial",
      color: "rgba(0, 0, 0, 0.87)"
    };
    /**
     * Compute the style for notes div container
     *
     * @returns {{marginLeft: number, marginTop: number, position: string, display: string}}
     */
    _this.checklistDetailsStyle = {
      margin: 2,
      marginLeft: 11,
      display: "flex",
      alignItems: "center"
    };
    _this.checklistNotApplicableStyle = {
      paddingTop: 5,
      paddingBottom: 5,
      flex: '1 1 auto'
    };
    _this.colorStyle = function (color) {
      return {
        backgroundColor: color ? "#".concat(color) : undefined,
        borderLeft: color ? "#".concat(color) : undefined,
        width: '3px',
        margin: '8px -2px 8px 2px',
        borderRadius: '30px',
        flexShrink: 0
      };
    };
    _this.containerStyle = function (blocked, isLastItem, color) {
      return {
        display: 'flex',
        alignItems: "stretch",
        padding: '1px 8px 1px 0',
        minHeight: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: isLastItem ? 'none' : "dashed 1px #d1d3d4",
        backgroundColor: color ? "".concat(_this.hexToRgb(color, 0.14)) : '#white',
        opacity: blocked ? 0.5 : 1
      };
    };
    _this.state = {
      detailsVisible: false,
      blocked: false,
      debounce: null
    };
    _this.notes = React.createRef();
    return _this;
  }
  _inherits(ChecklistItem, _Component);
  return _createClass(ChecklistItem, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.init(this.props.checklistItem);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        checklistItem = _this$props.checklistItem,
        showChecklistOptions = _this$props.showChecklistOptions,
        taskCode = _this$props.taskCode;
      // Handles expand/collapse of options when the checkbox was ticked before
      // the equipment's checklist had been expanded.
      this.showChecklistOptionsHandler(showChecklistOptions, checklistItem, taskCode);
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
          this.init(checklistItemProps);
        }
        if (checklistItemProps.followUpWorkOrder !== checklistItemState.followUpWorkOrder) {
          var checklistItem = _objectSpread({}, checklistItemState, {
            followUpWorkOrder: checklistItemProps.followUpWorkOrder
          });
          this.init(checklistItem);
        }
      }
      var showChecklistOptions = nextProps.showChecklistOptions,
        taskCode = nextProps.taskCode;
      // Expand/collapse options when the equipment's checklists are already expanded
      if (showChecklistOptions !== this.props.showChecklistOptions) {
        this.showChecklistOptionsHandler(showChecklistOptions, checklistItemProps, taskCode);
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
    value: function onChange(checklistItem, onFail) {
      var _this2 = this;
      var handleError = this.props.handleError;
      var DEBOUNCE_TIME_MS = 50;
      var request = function request() {
        _this2.props.updateChecklistItem(checklistItem).then(function () {
          _this2.props.resetSignatures(checklistItem.activityCode);
        })["catch"](function (error) {
          handleError(error);
          _this2.props.onUpdateChecklistItem(_this2.state.debounce.oldChecklistItem);
          _this2.setState({
            debounce: null
          });
          onFail && onFail();
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
          debounce: _objectSpread({
            oldChecklistItem: _this2.props.checklistItem
          }, state.debounce, {
            timeout: setTimeout(request, DEBOUNCE_TIME_MS)
            // Copy the oldest checklist item (will be used to restore the UI)
          })
        };
      });
    }
  }, {
    key: "fetchChecklistDefinition",
    value: function fetchChecklistDefinition(checklistItem, taskCode) {
      var _this3 = this;
      if (checklistItem && checklistItem.notApplicableOptions === undefined) {
        WSChecklists.getChecklistDefinition(taskCode, checklistItem.checklistDefinitionCode).then(function (response) {
          _this3.setState({
            notApplicableOptions: response.body.data.notApplicableOptions
          });
        })["catch"](function (error) {
          _this3.props.handleError(error);
        });
      }
    }
  }, {
    key: "showChecklistOptionsHandler",
    value: function showChecklistOptionsHandler(expandChecklist, checklistItem, taskCode) {
      var notes = this.notes.current.input.current.value;
      var followUp = checklistItem.followUp;
      var detailsVisible;

      // Only collapse empty details
      if (notes || followUp) {
        detailsVisible = true;
      } else {
        detailsVisible = expandChecklist;
      }
      this.setState({
        detailsVisible: detailsVisible
      });

      // Don't perform the WS call when collapsing
      if (expandChecklist) {
        this.fetchChecklistDefinition(checklistItem, taskCode);
      }
    }
  }, {
    key: "descClickHandler",
    value: function descClickHandler() {
      var _this4 = this;
      var notes = this.notes.current;
      this.setState(function (state) {
        var detailsVisible = !state.detailsVisible;
        if (detailsVisible) {
          setTimeout(function () {
            return _this4.notes.current.focus();
          }, 0);
          // Don't perform the WS call when collapsing
          var _this4$props = _this4.props,
            checklistItem = _this4$props.checklistItem,
            taskCode = _this4$props.taskCode;
          _this4.fetchChecklistDefinition(checklistItem, taskCode);
        }
        return {
          detailsVisible: detailsVisible
        };
      });
    }
  }, {
    key: "renderChecklistItemInput",
    value: function renderChecklistItemInput() {
      var _this5 = this;
      var _this$props2 = this.props,
        checklistItem = _this$props2.checklistItem,
        showError = _this$props2.showError,
        disabled = _this$props2.disabled,
        register = _this$props2.register;
      var fields = [];
      var options = {};

      // use until use of numeric values in result field is deprecated
      var clearResult = function clearResult(newProps, type, value) {
        delete newProps.result;
        return newProps;
      };
      var createField = ChecklistItemInput.createField;
      var _ChecklistItemInput$F = ChecklistItemInput.FIELD,
        CHECKBOX = _ChecklistItemInput$F.CHECKBOX,
        RADIO = _ChecklistItemInput$F.RADIO,
        FINDING = _ChecklistItemInput$F.FINDING,
        NUMERIC = _ChecklistItemInput$F.NUMERIC,
        NUMERIC2 = _ChecklistItemInput$F.NUMERIC2,
        ALPHANUMERIC = _ChecklistItemInput$F.ALPHANUMERIC,
        DATE = _ChecklistItemInput$F.DATE,
        DATETIME = _ChecklistItemInput$F.DATETIME,
        ENTITY = _ChecklistItemInput$F.ENTITY;
      switch (checklistItem.type) {
        case "01":
          fields = [createField(CHECKBOX, {
            code: "COMPLETED",
            desc: "Completed"
          })];
          options.style = ChecklistItemInput.STYLE.SAMELINE;
          break;
        case "02":
          fields = [createField(RADIO, {
            code: "YES",
            desc: "Yes"
          }), createField(RADIO, {
            code: "NO",
            desc: "No"
          })];
          options.style = ChecklistItemInput.STYLE.SAMELINE;
          break;
        case "03":
          var MINIMUM_MIN_FINDINGS = 4;
          fields = [createField(FINDING, {
            dropdown: checklistItem.possibleFindings.length >= Math.min(this.props.minFindingsDropdown, MINIMUM_MIN_FINDINGS)
          })];
          options.style = ChecklistItemInput.STYLE.SAMELINE;
          break;
        case "04":
        case "05":
          fields = [createField(NUMERIC)];
          options.slider = true;
          options.beforeOnChange = clearResult;
          options.style = ChecklistItemInput.STYLE.SAMELINE;
          break;
        case "06":
          fields = [createField(FINDING), createField(NUMERIC)];
          options.slider = true;
          options.beforeOnChange = clearResult;
          options.style = ChecklistItemInput.STYLE.SAMELINE;
          break;
        case "07":
          fields = [createField(RADIO, {
            code: "OK",
            desc: "OK"
          }), createField(RADIO, {
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
          options.label = "Resolution";
          options.beforeOnChange = function (newProps, type, value) {
            if (type === ChecklistItemInput.FIELD.CHECKBOX) {
              delete newProps.finding;
            }
            return newProps;
          };
          options.style = ChecklistItemInput.STYLE.SAMELINE;
          break;
        case "08":
          fields = [createField(RADIO, {
            code: "GOOD",
            desc: "Good"
          }), createField(RADIO, {
            code: "POOR",
            desc: "Poor"
          })];
          options.style = ChecklistItemInput.STYLE.SAMELINE;
          break;
        case "09":
        case "10":
          fields = [createField(RADIO, {
            code: "OK",
            desc: "OK"
          }), createField(RADIO, {
            code: "ADJUSTED",
            desc: "Adjusted"
          })];
          if (checklistItem.type === "10") {
            fields.push(createField(NUMERIC));
          }
          options.style = ChecklistItemInput.STYLE.SAMELINE;
          options.slider = true;
          break;
        case "11":
        case "12":
          fields = [createField(RADIO, {
            code: "OK",
            desc: "OK"
          }), createField(RADIO, {
            code: "NONCONFORMITY",
            desc: "Nonconformity"
          })];
          if (checklistItem.type === "12") {
            fields.push(createField(ChecklistItemInput.FIELD.NUMERIC));
            options.beforeOnChange = function (newProps, type, value) {
              if (type === ChecklistItemInput.FIELD.NUMERIC && newProps.result === null) {
                newProps.result = "OK";
              }
              return newProps;
            };
          }
          options.style = ChecklistItemInput.STYLE.SAMELINE;
          options.slider = true;
          break;
        case "13":
          fields = [createField(DATE)];
          options.style = ChecklistItemInput.STYLE.SAMELINE;
          break;
        case "14":
          fields = [createField(DATETIME)];
          options.style = ChecklistItemInput.STYLE.SAMELINE;
          break;
        case "15":
          fields = [createField(ALPHANUMERIC)];
          options.style = ChecklistItemInput.STYLE.SINGLE_EXPAND;
          break;
        case "16":
          fields = [createField(ENTITY)];
          options.style = ChecklistItemInput.STYLE.SINGLE_EXPAND;
          break;
        case "17":
          fields = [createField(NUMERIC), createField(NUMERIC2)];
          options.style = ChecklistItemInput.STYLE.SAMELINE;
          options.slider = true;
          break;
      }
      if (fields === undefined) return /*#__PURE__*/React.createElement("div", null);
      return /*#__PURE__*/React.createElement(ChecklistItemInput, {
        checklistItem: checklistItem,
        onChange: function onChange(value, onFail) {
          return _this5.onChange(value, onFail);
        },
        fields: fields,
        options: options,
        showError: showError,
        disabled: disabled,
        register: register
      });
    }
  }, {
    key: "hexToRgb",
    value: function hexToRgb(hex, opacity) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? "rgb(".concat(parseInt(result[1], 16), ", ").concat(parseInt(result[2], 16), ", ").concat(parseInt(result[3], 16), ", ").concat(opacity, ")") : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;
      var _this$props3 = this.props,
        checklistItem = _this$props3.checklistItem,
        isLastItem = _this$props3.isLastItem,
        hideFollowUpProp = _this$props3.hideFollowUpProp;
      var notApplicableOptions = this.state.notApplicableOptions;
      return /*#__PURE__*/React.createElement("div", {
        style: this.containerStyle(this.state.blocked, isLastItem, checklistItem.color)
      }, /*#__PURE__*/React.createElement("div", {
        style: this.colorStyle(checklistItem.color)
      }), /*#__PURE__*/React.createElement("div", {
        style: this.getCheckListItemStyle(this.state.blocked)
      }, /*#__PURE__*/React.createElement("div", {
        style: this.firstLine,
        onClick: this.descClickHandler.bind(this)
      }, /*#__PURE__*/React.createElement("div", {
        style: this.firstLineDesc
      }, this.state.detailsVisible ? /*#__PURE__*/React.createElement(ExpandLessIcon, {
        style: {
          color: "#b0b0b0"
        }
      }) : /*#__PURE__*/React.createElement(ExpandMoreIcon, {
        style: {
          color: "#b0b0b0"
        }
      }), /*#__PURE__*/React.createElement("label", null, checklistItem.desc), checklistItem.requiredToClose === true && /*#__PURE__*/React.createElement("label", {
        style: {
          color: "red",
          marginLeft: '3px'
        }
      }, " *"), checklistItem.conditional && /*#__PURE__*/React.createElement(Tooltip, {
        title: "Conditional Item"
      }, /*#__PURE__*/React.createElement(FileTreeOutline, {
        style: {
          color: "#b0b0b0",
          marginLeft: '3px',
          fontSize: '1.2rem'
        }
      }))), this.renderChecklistItemInput()), /*#__PURE__*/React.createElement(Collapse, {
        "in": this.state.detailsVisible
      }, /*#__PURE__*/React.createElement("div", {
        style: this.checklistDetailsStyle
      }, /*#__PURE__*/React.createElement(ChecklistItemNotes, {
        ref: this.notes,
        checklistItem: checklistItem,
        onChange: function onChange(value) {
          return _this6.onChange(value);
        },
        disabled: this.props.disabled
      }), !checklistItem.hideFollowUp && /*#__PURE__*/React.createElement(ChecklistItemFollowUp, {
        checklistItem: checklistItem,
        onChange: function onChange(value) {
          return _this6.onChange(value);
        },
        getWoLink: this.props.getWoLink,
        disabled: this.props.disabled
      })), Array.isArray(notApplicableOptions) && notApplicableOptions.length > 0 && /*#__PURE__*/React.createElement("div", {
        style: this.checklistNotApplicableStyle
      }, /*#__PURE__*/React.createElement(ChecklistItemNotApplicableOptions, {
        checklistItem: checklistItem,
        notApplicableOptions: notApplicableOptions,
        onChange: function onChange(value) {
          return _this6.onChange(value);
        },
        disabled: this.props.disabled
      })))));
    }
  }]);
}(Component);
export { ChecklistItem as default };