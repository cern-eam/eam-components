"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ChecklistFieldQuantitative;

function ChecklistFieldQuantitative(checklistItem, options) {
  var _this = this;

  return [React.createElement("input", {
    style: this.inputStyle,
    onChange: function onChange(event) {
      return _this.handleChange(ChecklistItemInput.QUANTITATIVE, event.target.value);
    },
    value: checklistItem.result || '',
    onBlur: this.handleBlur
  }), React.createElement("div", {
    style: this.labelUOMStyle
  }, checklistItem.UOM)];
}