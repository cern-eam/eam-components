var _excluded = ["className"],
  _excluded2 = ["color"],
  _excluded3 = ["color"],
  _excluded4 = ["color"],
  _excluded5 = ["size", "color", "fontWeight"],
  _excluded6 = ["style", "color"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { ToggleSwitch, HomeModern, HelpCircle } from 'mdi-material-ui';
import CheckCircle from '@mui/icons-material/CheckCircle';
import green from '@mui/material/colors/green';
export var PartIcon = React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(SvgIcon, _extends({}, props, {
    ref: ref,
    viewBox: "0 0 199 199"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M198 82c0 16-6 30-18 41a5 5 0 0 1-7 0L75 25a5 5 0 0 1 0-7C87 6 102 0 118 0c15 0 29 6 39 17h1c1 2 2 5 0 7l-18 20 14 15 21-18c2-2 5-2 7 0 11 11 17 26 16 41zM27 118L9 137l72 34 19-18-73-35zm24-26l-17 19 74 35 20-18-77-36zm91 15L91 57l-3-2-4 2-25 27 77 36 6-6a5 5 0 0 0 0-7zM2 145l-1 1v7l45 44a5 5 0 0 0 7 0l20-19-71-33z"
  }));
});
export var SystemIcon = function SystemIcon(props) {
  return /*#__PURE__*/React.createElement(SvgIcon, _extends({}, props, {
    viewBox: "0 0 100 100"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "null",
    id: "svg_14"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#fff",
    id: "svg_4",
    d: "m2.712285,49.658103c0,-7.494782 6.160244,-13.565556 13.765483,-13.565556c7.605239,0 13.765483,6.070774 13.765483,13.565556c0,7.494782 -6.160244,13.565556 -13.765483,13.565556c-7.605239,0 -13.765483,-6.070774 -13.765483,-13.565556z",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#fff",
    id: "svg_5",
    d: "m68.577502,49.658105c0,-7.494782 6.160244,-13.565556 13.765483,-13.565556c7.605239,0 13.765481,6.070774 13.765481,13.565556c0,7.494784 -6.160242,13.565558 -13.765481,13.565558c-7.605239,0 -13.765483,-6.070774 -13.765483,-13.565558z",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#fff",
    id: "svg_7",
    d: "m36.167635,15.570293c0,-7.494782 6.160244,-13.565556 13.765483,-13.565556c7.605239,0 13.765483,6.070774 13.765483,13.565556c0,7.494784 -6.160244,13.565556 -13.765483,13.565556c-7.605239,0 -13.765483,-6.070773 -13.765483,-13.565556z",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#fff",
    id: "svg_8",
    d: "m36.167634,85.137252c0,-7.494782 6.160244,-13.565556 13.765483,-13.565556c7.605239,0 13.765483,6.070774 13.765483,13.565556c0,7.494784 -6.160244,13.565556 -13.765483,13.565556c-7.605239,0 -13.765483,-6.070773 -13.765483,-13.565556z",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    id: "svg_11",
    d: "m20.833931,47.571093l60.986314,0l0,3.826183l-60.986314,0l0,-3.826183z",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    id: "svg_13",
    d: "m48.439898,80.620014l-0.149983,-60.870904l3.833414,-0.00941l0.149983,60.870904l-3.833414,0.00941z",
    strokeLinecap: "null",
    strokeLinejoin: "null",
    strokeWidth: "1.5"
  })));
};
export var PositionIcon = function PositionIcon(props) {
  return /*#__PURE__*/React.createElement(ToggleSwitch, props);
};
export var LocationIcon = function LocationIcon(props) {
  return /*#__PURE__*/React.createElement(HomeModern, props);
};
export var WorkorderIcon = React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(AssignmentTurnedInIcon, _extends({}, props, {
    ref: ref
  }));
});
export var AssetIcon = function AssetIcon(props) {
  return /*#__PURE__*/React.createElement(SvgIcon, _extends({}, props, {
    viewBox: "0 0 485 585"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M485.212,272.93v-60.648h-48.034c-2.193-14.125-5.801-27.75-10.842-40.72l41.528-23.991l-30.332-52.535l-41.462,23.956\r c-8.882-10.958-18.832-20.967-29.846-29.823l23.979-41.488l-52.533-30.327l-23.988,41.551\r c-12.971-5.036-26.594-8.678-40.749-10.841V0h-60.65v48.068c-14.097,2.159-27.72,5.834-40.695,10.837l-23.984-41.551l-52.54,30.327\r l23.928,41.493c-10.956,8.853-20.964,18.864-29.79,29.818L47.682,95.036l-30.327,52.507l41.579,24.019\r c-5.031,12.97-8.679,26.595-10.837,40.72H0.001v60.648h48.097c2.158,14.128,5.806,27.751,10.837,40.726l-41.579,23.988\r l30.327,52.533l41.521-23.956c8.826,10.958,18.834,20.964,29.79,29.822l-23.928,41.49l52.54,30.322l23.988-41.547\r c12.97,5.036,26.593,8.648,40.69,10.838v48.065h60.65v-48.065c14.155-2.189,27.783-5.802,40.749-10.838l23.988,41.547\r l52.542-30.322l-23.988-41.49c11.014-8.858,20.964-18.864,29.854-29.855l41.458,23.961l30.327-52.505l-41.528-23.988\r c5.041-12.975,8.648-26.598,10.847-40.726H485.212L485.212,272.93z M242.607,379.074c-75.341,0-136.468-61.124-136.468-136.468\r c0-75.368,61.127-136.465,136.468-136.465s136.47,61.097,136.47,136.465C379.077,317.95,317.948,379.074,242.607,379.074z"
  }));
};
export var TRECIcon = function TRECIcon(props) {
  var className = props.className,
    other = _objectWithoutProperties(props, _excluded);
  if (other.icon && other.icon.startsWith("fa ")) {
    return /*#__PURE__*/React.createElement("i", _extends({
      className: props.icon + " " + className
    }, other));
  }
  switch (other.icon) {
    case 'vacuum-cleaner':
      {
        return /*#__PURE__*/React.createElement(SvgIcon, _extends({
          className: className
        }, other, {
          viewBox: "0 0 485 585"
        }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
          d: "m203.84,339.08c-29.994,0-54.396,24.402-54.396,54.396s24.402,54.396 54.396,54.396 54.396-24.402 54.396-54.396-24.402-54.396-54.396-54.396zm0,93.792c-21.723,0-39.396-17.673-39.396-39.396s17.673-39.396 39.396-39.396 39.396,17.673 39.396,39.396-17.673,39.396-39.396,39.396z"
        }), /*#__PURE__*/React.createElement("path", {
          d: "m426.679,466.75l-10.795-22.664c-4.227-8.875-13.31-14.609-23.14-14.609h-16.69v-332.097c0-53.696-43.689-97.38-97.39-97.38-53.701,0-97.39,43.685-97.39,97.38v137.181c-59.327,10.861-104.434,62.937-104.434,125.354v27.781h-19.273c-4.142,0-7.5,3.358-7.5,7.5v49.498c0,4.142 3.358,7.5 7.5,7.5h20.492c3.981,14.552 17.313,25.282 33.111,25.282h92.67c46.318,0 84-37.682 84-84 0-25.769-11.674-48.854-30-64.276v-67.394c0-16.173-13.157-29.33-29.33-29.33h-1.235v-135.096c0-28.331 23.054-51.38 51.39-51.38s51.39,23.049 51.39,51.38v332.097h-16.695c-9.83,0-18.913,5.734-23.139,14.609l-10.795,22.664c-1.107,2.323-0.945,5.052 0.429,7.229 1.374,2.176 3.768,3.496 6.342,3.496h133.712c2.574,0 4.968-1.32 6.342-3.496 1.373-2.176 1.535-4.905 0.428-7.229zm-361.612-64.054h11.773v34.498h-11.773v-34.498zm207.773-9.22c0,38.047-30.953,69-69,69s-69-30.953-69-69 30.953-69 69-69 69,30.953 69,69zm-30-131.67v57.307c-11.663-6.142-24.928-9.637-39-9.637-46.318,0-84,37.682-84,84 0,28.557 14.335,53.816 36.176,69h-44.846c-10.659,0-19.33-8.671-19.33-19.33v-83.231c0-61.999 50.44-112.439 112.439-112.439h24.23c7.903-2.84217e-14 14.331,6.428 14.331,14.33zm-30.565-164.426v135.095h-7.996c-2.689,0-5.356,0.094-8.004,0.259v-135.354c0-42.895 32.964-78.221 74.89-82.024v16.079c-33.087,3.739-58.89,31.879-58.89,65.945zm73.89-65.945v-16.078c41.926,3.803 74.89,39.128 74.89,82.024v8.113h-16v-8.114c0-34.066-25.802-62.206-58.89-65.945zm58.89,89.058h16v308.984h-16v-308.984zm-46.979,341.983l5.687-11.939c1.753-3.681 5.521-6.059 9.597-6.059h79.385c4.077,0 7.844,2.378 9.598,6.059l5.687,11.939h-109.954z"
        })));
      }
    case 'eamlight':
      {
        return /*#__PURE__*/React.createElement(SvgIcon, _extends({
          className: className
        }, other, {
          viewBox: "0 0 485 585"
        }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
          d: "M239.9,4.15l-24.5,10.1c-13.1,5.4-19.3,20.5-13.9,33.5l6.3,15.2c-12.3,9.1-23,19.9-32.2,32.2\r l-15.2-6.3c-6.3-2.6-13.3-2.6-19.6,0s-11.3,7.6-13.9,13.9l-10.2,24.5c-5.4,13.1,0.8,28.1,13.9,33.5l22.5,9.3\r c5.1,2.1,10.8-0.3,12.9-5.4c2.1-5.1-0.3-10.8-5.4-12.9l-22.5-9.3c-3-1.2-4.4-4.7-3.2-7.7l10.2-24.5c0.6-1.4,1.7-2.6,3.2-3.2\r c1.4-0.6,3-0.6,4.5,0l22.5,9.3c4.4,1.8,9.4,0.3,12-3.6c10.1-15.2,22.9-28,38.1-38.1c3.9-2.6,5.5-7.7,3.7-12l-9.3-22.5\r c-1.2-3,0.2-6.4,3.2-7.7l24.5-10.1c1.4-0.6,3-0.6,4.5,0c1.4,0.6,2.6,1.7,3.2,3.2l9.3,22.5c1.8,4.4,6.4,6.9,11.1,5.9\r c17.8-3.6,36-3.5,53.8,0c4.6,0.9,9.3-1.6,11.1-5.9l9.3-22.5c1.2-3,4.7-4.4,7.7-3.2l24.5,10.2c1.4,0.6,2.6,1.7,3.2,3.2\r c0.6,1.4,0.6,3,0,4.5l-9.3,22.5c-1.8,4.4-0.3,9.4,3.6,12c15.2,10.1,28,22.9,38.1,38.1c2.6,3.9,7.7,5.5,12,3.7l22.5-9.3\r c1.5-0.6,3-0.6,4.5,0c1.4,0.6,2.6,1.7,3.2,3.2l10.1,24.5c0.6,1.4,0.6,3,0,4.5c-0.6,1.4-1.7,2.6-3.2,3.2l-22.5,9.3\r c-4.4,1.8-6.8,6.4-5.9,11.1c3.6,17.8,3.5,36,0,53.8c-0.9,4.6,1.6,9.3,5.9,11.1l22.5,9.3c3,1.2,4.4,4.7,3.2,7.7l-10.2,24.5\r c-1.2,3-4.7,4.4-7.7,3.2l-22.5-9.3c-4.4-1.8-9.4-0.3-12,3.6c-10.1,15.2-22.9,28-38.1,38.1c-3.9,2.6-5.5,7.7-3.7,12l9.3,22.5\r c0.6,1.4,0.6,3,0,4.5c-0.6,1.4-1.7,2.6-3.2,3.2l-24.5,10.1c-1.4,0.6-3,0.6-4.5,0c-1.4-0.6-2.6-1.7-3.2-3.2l-9.3-22.5\r c-2.1-5.1-7.9-7.5-12.9-5.4c-5.1,2.1-7.5,7.9-5.4,12.9l9.3,22.5c2.6,6.3,7.6,11.3,13.9,13.9c3.2,1.3,6.5,2,9.8,2s6.7-0.7,9.8-2\r l24.5-10.1c6.3-2.6,11.3-7.6,13.9-13.9s2.6-13.3,0-19.6l-6.3-15.2c12.3-9.1,23-19.9,32.2-32.2l15.2,6.3\r c13.1,5.4,28.1-0.8,33.5-13.9l10.2-24.5c5.4-13.1-0.8-28.1-13.9-33.5l-15.2-6.3c2.2-15.1,2.2-30.4,0-45.5l15.2-6.3\r c6.3-2.6,11.3-7.6,13.9-13.9c2.6-6.3,2.6-13.3,0-19.6l-10.1-24.5c-2.6-6.3-7.6-11.3-13.9-13.9s-13.3-2.6-19.6,0l-15.2,6.3\r c-9.1-12.3-19.9-23.1-32.1-32.2l6.3-15.2c2.6-6.3,2.6-13.3,0-19.6s-7.6-11.3-13.9-13.9L365,4.15c-13.1-5.4-28.1,0.8-33.5,13.9\r l-6.3,15.2c-15.1-2.2-30.4-2.2-45.5,0l-6.3-15.2c-2.6-6.3-7.6-11.3-13.9-13.9C253.2,1.55,246.2,1.55,239.9,4.15z"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M382.9,189.25c-0.3-44.2-36.4-79.9-80.5-79.9c-0.2,0-0.4,0-0.6,0c-21.5,0.2-41.7,8.7-56.8,24\r c-15.1,15.3-23.3,35.6-23.2,57.1c0,5.4,4.5,9.8,9.9,9.8h0.1c5.5,0,9.9-4.5,9.8-10c-0.1-16.2,6.1-31.5,17.5-43.1\r c11.4-11.6,26.6-18,42.8-18.1c0.1,0,0.3,0,0.4,0c33.3,0,60.5,27,60.7,60.3c0.2,33.5-26.8,60.9-60.3,61.2c-5.5,0-9.9,4.5-9.8,10\r c0,5.4,4.5,9.8,9.9,9.8c0,0,0,0,0.1,0C347.4,270.05,383.2,233.65,382.9,189.25z"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M135.3,487.75h19.3c11.8,0,21.4-9.6,21.4-21.4v-9.9c9.6-2.6,18.8-6.4,27.4-11.4l7,7\r c4,4,9.4,6.3,15.1,6.3c5.7,0,11.1-2.2,15.1-6.3l13.6-13.6c4-4,6.3-9.4,6.3-15.1s-2.2-11.1-6.3-15.1l-7-7c5-8.6,8.8-17.8,11.4-27.4\r h9.9c11.8,0,21.4-9.6,21.4-21.4v-19.3c0-11.8-9.6-21.4-21.4-21.4h-9.9c-2.6-9.6-6.4-18.8-11.4-27.4l7-7c4-4,6.3-9.4,6.3-15.1\r s-2.2-11.1-6.3-15.1l-13.6-13.6c-4-4-9.4-6.3-15.1-6.3c-5.7,0-11.1,2.2-15.1,6.3l-7,7c-8.6-5-17.8-8.8-27.4-11.4v-9.9\r c0-11.8-9.6-21.4-21.4-21.4h-19.3c-11.8,0-21.4,9.6-21.4,21.4v9.9c-9.6,2.6-18.8,6.4-27.4,11.4l-7-7c-4-4-9.4-6.3-15.1-6.3\r s-11.1,2.2-15.1,6.3l-13.6,13.6c-8.3,8.3-8.3,21.9,0,30.2l7,7c-5,8.6-8.8,17.8-11.4,27.4h-9.9c-11.8,0-21.4,9.6-21.4,21.4v19.3\r c0,11.8,9.6,21.4,21.4,21.4h9.9c2.6,9.6,6.4,18.8,11.4,27.4l-7,7c-8.3,8.3-8.3,21.9,0,30.2l13.6,13.6c4,4,9.4,6.3,15.1,6.3\r s11.1-2.2,15.1-6.3l7-7c8.6,5,17.8,8.8,27.4,11.4v9.9C114,478.15,123.6,487.75,135.3,487.75z M90.6,424.35\r c-1.7-1.1-3.6-1.7-5.5-1.7c-2.6,0-5.1,1-7,2.9l-12.5,12.5c-0.4,0.4-0.8,0.5-1.1,0.5s-0.7-0.1-1.1-0.5l-13.6-13.6\r c-0.6-0.6-0.6-1.6,0-2.2l12.5-12.5c3.3-3.3,3.9-8.6,1.2-12.5c-7.2-10.7-12.1-22.6-14.6-35.2c-0.9-4.6-5-8-9.7-8H21.5\r c-0.9,0-1.6-0.7-1.6-1.6v-19.3c0-0.9,0.7-1.6,1.6-1.6h17.7c4.7,0,8.8-3.3,9.7-8c2.5-12.6,7.4-24.5,14.6-35.2\r c2.6-3.9,2.1-9.2-1.2-12.5l-12.5-12.5c-0.6-0.6-0.6-1.6,0-2.2l13.6-13.6c0.4-0.4,0.8-0.5,1.1-0.5s0.7,0.1,1.1,0.5l12.5,12.7\r c3.3,3.3,8.6,3.9,12.5,1.2c10.7-7.2,22.6-12.1,35.2-14.6c4.6-0.9,8-5,8-9.7v-17.7c0-0.9,0.7-1.6,1.6-1.6h19.3\r c0.9,0,1.6,0.7,1.6,1.6v17.7c0,4.7,3.3,8.8,8,9.7c12.6,2.5,24.5,7.4,35.2,14.6c3.9,2.6,9.2,2.1,12.5-1.2l12.5-12.5\r c0.4-0.4,0.8-0.5,1.1-0.5s0.7,0.1,1.1,0.5l13.6,13.6c0.4,0.4,0.5,0.8,0.5,1.1c0,0.3-0.1,0.7-0.5,1.1l-12.5,12.5\r c-3.3,3.3-3.9,8.6-1.2,12.5c7.2,10.7,12.1,22.6,14.6,35.2c0.9,4.6,5,8,9.7,8h17.7c0.9,0,1.6,0.7,1.6,1.6v19.3\r c0,0.9-0.7,1.6-1.6,1.6h-17.7c-4.7,0-8.8,3.3-9.7,8c-2.5,12.6-7.4,24.5-14.6,35.2c-2.6,3.9-2.1,9.2,1.2,12.5l12.5,12.5\r c0.4,0.4,0.5,0.8,0.5,1.1s-0.1,0.7-0.5,1.1l-13.6,13.6c-0.4,0.4-0.8,0.5-1.1,0.5s-0.7-0.1-1.1-0.5l-12.5-12.5\r c-3.3-3.3-8.6-3.9-12.5-1.2c-10.7,7.2-22.6,12.1-35.2,14.6c-4.6,0.9-8,5-8,9.7v17.7c0,0.9-0.7,1.6-1.6,1.6h-19.3\r c-0.9,0-1.6-0.7-1.6-1.6v-17.7c0-4.7-3.3-8.8-8-9.7C113.2,436.45,101.3,431.55,90.6,424.35z"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M203.7,342.95c0-32.4-26.4-58.8-58.8-58.8s-58.7,26.4-58.7,58.8s26.4,58.8,58.8,58.8\r S203.7,375.35,203.7,342.95z M106,342.95c0-21.5,17.5-39,39-39s39,17.5,39,39s-17.5,39-39,39S106,364.35,106,342.95z"
        }))));
      }
    case 'rwchecks':
      {
        return /*#__PURE__*/React.createElement(SvgIcon, _extends({
          className: className
        }, other, {
          viewBox: "0 0 485 585"
        }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
          points: "424.562,363.906 172.036,363.906 65.893,121.304 0.001,121.304 0.001,90.978 85.737,90.978 191.876,333.584\r 424.562,333.584 \t\t\t"
        })), /*#__PURE__*/React.createElement("path", {
          d: "M272.934,439.727c0,25.109-20.381,45.485-45.49,45.485c-25.127,0-45.488-20.376-45.488-45.485\r c0-25.118,20.36-45.49,45.488-45.49C252.553,394.237,272.934,414.609,272.934,439.727z"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M424.562,439.727c0,25.109-20.376,45.485-45.485,45.485c-25.118,0-45.49-20.376-45.49-45.485\r c0-25.118,20.372-45.49,45.49-45.49C404.187,394.237,424.562,414.609,424.562,439.727z"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M379.077,242.606c-59.234,0-109.256-38.144-128.088-90.978h-99.36l60.654,151.629h212.279l35.008-87.482\r C436.944,232.42,409.255,242.606,379.077,242.606z"
        }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
          d: "M379.077,0c-58.609,0-106.144,47.532-106.144,106.141c0,58.606,47.534,106.141,106.144,106.141\r c58.604,0,106.135-47.534,106.135-106.141C485.212,47.532,437.682,0,379.077,0z M362.995,159.742l-21.445-21.438l-32.161-32.163\r L330.834,84.7l32.161,32.161l64.326-64.321l21.436,21.44L362.995,159.742z"
        })));
      }
    case 'standard-menu':
      {
        return /*#__PURE__*/React.createElement(SvgIcon, _extends({
          className: className
        }, other, {
          viewBox: "0 0 478.159 478.159"
        }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
          d: "M219.056,344.702v-25.434h90.117c-0.271,14.219,1.483,31.256,18.402,31.404c9.532,0.081,21.658-4.849,29.209-10.402\r c5.626-4.132,6.83-7.853,14.441-10.463c5.238-1.783,10.725-1.434,16.122-0.115v36.055v10.08v12.624h22.701v-12.624h45.407v12.624\r h22.703v-12.624v-10.08V89.708h-90.816v233.753c-10.813-2.217-21.637-1.117-30.563,7.737c-7.425,7.375-21.596,14.325-32.666,12.793\r c-8.53-1.171-9.08-14.688-8.642-24.723h37.592V93.764H0v225.504h134.014v25.434 M23.193,299.943v-188.78h306.682v188.767H23.193\r V299.943z M432.747,114.583c10.747,0,19.459,8.706,19.459,19.458c0,10.741-8.712,19.461-19.459,19.461\r c-10.745,0-19.462-8.714-19.462-19.461C413.289,123.289,422.002,114.583,432.747,114.583z M463.292,290.333h-61.088v-11.896h61.088\r V290.333z M463.292,264.921h-61.088v-11.885h61.088V264.921z M463.292,241.145h-61.088v-11.89h61.088V241.145z M463.292,215.738\r h-61.088v-11.896h61.088V215.738z M264.056,335.27c0,4.251-35.12,7.704-78.445,7.704c-43.325,0-78.447-3.453-78.447-7.704\r c0-4.253,35.122-7.703,78.447-7.703C228.936,327.566,264.056,331.017,264.056,335.27z"
        })));
      }
    default:
      {
        return /*#__PURE__*/React.createElement("i", _extends({
          className: "fa fa-question"
        }, other));
      }
  }
};
export var RadioactiveWarningIcon = function RadioactiveWarningIcon(props) {
  return /*#__PURE__*/React.createElement(SvgIcon, _extends({}, props, {
    viewBox: "0 0 600 525"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M597.5,499.6L313.7,8c-2.9-5-8.2-8-13.9-8c-5.7,0-11,3.1-13.9,8L2.1,499.6c-2.9,5-2.9,11.1,0,16 c2.9,5,8.2,8,13.9,8h567.6c5.7,0,11-3.1,13.9-8C600.4,510.6,600.4,504.5,597.5,499.6z"
  }), /*#__PURE__*/React.createElement("polygon", {
    fill: "#e8bf28",
    points: "43.8,491.5 299.8,48.2 555.8,491.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M279.8,378.3L233,459.4c42.6,24.6,91.1,24.6,133.7,0l-46.8-81.1c-0.3,0.2-0.6,0.4-0.9,0.6 \tc-1.1,0.6-2.3,1.2-3.5,1.7c-1.2,0.5-2.4,1-3.7,1.4c-1.3,0.4-2.5,0.7-3.8,1c-1.3,0.3-2.6,0.5-4,0.6c-1.3,0.1-2.7,0.2-4.1,0.2 c-1.4,0-2.7-0.1-4.1-0.2c-1.3-0.1-2.7-0.3-4-0.6c-1.3-0.3-2.6-0.6-3.8-1c-1.3-0.4-2.5-0.8-3.7-1.4c-1.2-0.5-2.4-1.1-3.5-1.7 C280.4,378.7,280.1,378.5,279.8,378.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M233,227.8c-42.6,24.6-66.8,66.6-66.8,115.8h93.6c0-1.4,0.1-2.8,0.2-4.1c0.1-1.3,0.4-2.7,0.6-4 \tc0.3-1.3,0.6-2.6,1-3.8c0.4-1.3,0.8-2.5,1.4-3.7c0.5-1.2,1.1-2.4,1.7-3.5c0.6-1.1,1.3-2.2,2-3.3c0.7-1.1,1.5-2.1,2.3-3.1 \tc0.8-1,1.7-1.9,2.6-2.8c0.9-0.9,1.9-1.8,2.9-2.6c1-0.8,2-1.6,3.1-2.3c0.8-0.5,1.6-1,2.4-1.5L233,227.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M366.7,227.8l-46.8,81.1c0.8,0.5,1.6,0.9,2.4,1.5c1.1,0.7,2.1,1.5,3.1,2.3c1,0.8,1.9,1.7,2.9,2.6 \tc0.9,0.9,1.8,1.9,2.6,2.8c0.8,1,1.6,2,2.3,3.1c0.7,1.1,1.4,2.2,2,3.3c0.6,1.1,1.2,2.3,1.7,3.5c0.5,1.2,1,2.4,1.4,3.7 c0.4,1.3,0.7,2.5,1,3.8s0.5,2.6,0.6,4c0.1,1.3,0.2,2.7,0.2,4.1h93.6C433.5,294.4,409.3,252.4,366.7,227.8z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "299.8",
    cy: "343.6",
    r: "26.7"
  }));
};
export var FluidWarningIcon = function FluidWarningIcon(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#81D4FA" : _ref$color,
    otherProps = _objectWithoutProperties(_ref, _excluded2);
  return /*#__PURE__*/React.createElement(SvgIcon, _extends({}, otherProps, {
    viewBox: "0 0 31 27"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    id: "svg_4",
    d: "m30.028882,24.714101l-14.014815,-24.276544c-0.14321,-0.246914 -0.404938,-0.395062 -0.68642,-0.395062c-0.281481,0 -0.54321,0.153086 -0.68642,0.395062l-14.014815,24.276544c-0.14321,0.246914 -0.14321,0.548148 0,0.790123c0.14321,0.246914 0.404938,0.395062 0.68642,0.395062l28.02963,0c0.281481,0 0.54321,-0.153086 0.68642,-0.395062c0.14321,-0.246914 0.14321,-0.548148 0,-0.790123z"
  }), /*#__PURE__*/React.createElement("polygon", {
    id: "svg_5",
    points: "2.6856727600097656,24.684456825256348 15.327640533447266,2.7930994033813477 27.969608306884766,24.684456825256348 ",
    fill: color
  }), /*#__PURE__*/React.createElement("text", {
    fontWeight: "bold",
    stroke: "null",
    transform: "matrix(0.7553763564635644,0,0,0.722125470638275,3.383501128953198,5.721176045946776) ",
    textAnchor: "start",
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: "24",
    id: "svg_11",
    y: "24.58174",
    x: "8.361908",
    fillOpacity: "null",
    strokeOpacity: "null",
    strokeWidth: "0",
    fill: "#000000"
  }, "L")));
};
export var ChemicalWarningIcon = function ChemicalWarningIcon(_ref2) {
  var _ref2$color = _ref2.color,
    color = _ref2$color === void 0 ? "#FB8C00" : _ref2$color,
    otherProps = _objectWithoutProperties(_ref2, _excluded3);
  return /*#__PURE__*/React.createElement(SvgIcon, _extends({}, otherProps, {
    viewBox: "0 0 31 27"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    id: "svg_4",
    d: "m30.028882,24.714101l-14.014815,-24.276544c-0.14321,-0.246914 -0.404938,-0.395062 -0.68642,-0.395062c-0.281481,0 -0.54321,0.153086 -0.68642,0.395062l-14.014815,24.276544c-0.14321,0.246914 -0.14321,0.548148 0,0.790123c0.14321,0.246914 0.404938,0.395062 0.68642,0.395062l28.02963,0c0.281481,0 0.54321,-0.153086 0.68642,-0.395062c0.14321,-0.246914 0.14321,-0.548148 0,-0.790123z"
  }), /*#__PURE__*/React.createElement("polygon", {
    id: "svg_5",
    points: "2.6856727600097656,24.684456825256348 15.327640533447266,2.7930994033813477 27.969608306884766,24.684456825256348 ",
    fill: color
  }), /*#__PURE__*/React.createElement("text", {
    fontWeight: "bold",
    stroke: "null",
    transform: "matrix(0.7553763564635644,0,0,0.722125470638275,3.383501128953198,5.721176045946776) ",
    textAnchor: "start",
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: "24",
    id: "svg_11",
    y: "24.58174",
    x: "8.361908",
    fillOpacity: "null",
    strokeOpacity: "null",
    strokeWidth: "0",
    fill: "#000000"
  }, "T")));
};
export var ContaminationWarningIcon = function ContaminationWarningIcon(_ref3) {
  var _ref3$color = _ref3.color,
    color = _ref3$color === void 0 ? "#FFF176" : _ref3$color,
    otherProps = _objectWithoutProperties(_ref3, _excluded4);
  return /*#__PURE__*/React.createElement(SvgIcon, _extends({}, otherProps, {
    viewBox: "0 0 31 27"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    id: "svg_4",
    d: "m30.028882,24.714101l-14.014815,-24.276544c-0.14321,-0.246914 -0.404938,-0.395062 -0.68642,-0.395062c-0.281481,0 -0.54321,0.153086 -0.68642,0.395062l-14.014815,24.276544c-0.14321,0.246914 -0.14321,0.548148 0,0.790123c0.14321,0.246914 0.404938,0.395062 0.68642,0.395062l28.02963,0c0.281481,0 0.54321,-0.153086 0.68642,-0.395062c0.14321,-0.246914 0.14321,-0.548148 0,-0.790123z"
  }), /*#__PURE__*/React.createElement("polygon", {
    id: "svg_5",
    points: "2.6856727600097656,24.684456825256348 15.327640533447266,2.7930994033813477 27.969608306884766,24.684456825256348 ",
    fill: color
  }), /*#__PURE__*/React.createElement("text", {
    fontWeight: "bold",
    stroke: "null",
    transform: "matrix(0.7553763564635644,0,0,0.722125470638275,3.383501128953198,5.721176045946776) ",
    textAnchor: "start",
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: "24",
    id: "svg_11",
    y: "24.58174",
    x: "8.361908",
    fillOpacity: "null",
    strokeOpacity: "null",
    strokeWidth: "0",
    fill: "#000000"
  }, "C")));
};
export var NonRadioactiveWarningIcon = function NonRadioactiveWarningIcon(props) {
  return /*#__PURE__*/React.createElement(CheckCircle, {
    style: {
      color: green['A700']
    }
  });
};
export var QuestionMarkCircleIcon = function QuestionMarkCircleIcon(props) {
  return /*#__PURE__*/React.createElement(HelpCircle, null);
};
export var TRECLogo = function TRECLogo(props) {
  var _props$size = props.size,
    size = _props$size === void 0 ? "20" : _props$size,
    _props$color = props.color,
    color = _props$color === void 0 ? "#2196F3" : _props$color,
    _props$fontWeight = props.fontWeight,
    fontWeight = _props$fontWeight === void 0 ? "900" : _props$fontWeight,
    otherProps = _objectWithoutProperties(props, _excluded5);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(RadiationIcon, _extends({
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    },
    color: color
  }, otherProps)), /*#__PURE__*/React.createElement("div", {
    style: {
      color: color,
      fontWeight: fontWeight,
      marginLeft: 5,
      fontSize: "".concat(size, "px"),
      lineHeight: "".concat(size, "px"),
      verticalAlign: "middle"
    }
  }, "TREC"));
};
export var RadiationIcon = function RadiationIcon(props) {
  var style = props.style,
    color = props.color,
    otherProps = _objectWithoutProperties(props, _excluded6);
  return /*#__PURE__*/React.createElement(SvgIcon, _extends({}, otherProps, {
    viewBox: "0 0 310 310",
    style: style
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M155,0C69.533,0,0,69.533,0,155s69.533,155,155,155s155-69.533,155-155S240.467,0,155,0z M216.348,270.173l-41.33-76.279   c-6.004,3.103-12.807,4.867-20.018,4.867s-14.014-1.764-20.018-4.867l-41.33,76.279c-41.064-21.961-69.086-65.238-69.17-114.951   l86.789-0.155c-0.012-0.456-0.033-0.91-0.033-1.368c0-15.325,7.926-27.525,19.885-35.345l-44.889-74.24   C106.217,31.678,129.781,24.481,155,24.481c25.217,0,48.779,7.196,68.76,19.631l-44.875,74.25   c11.955,7.82,19.877,19.969,19.877,35.29c0,0.458-0.021,0.912-0.035,1.368l86.789,0.203   C285.432,204.935,257.412,248.212,216.348,270.173z",
    fill: color
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "155",
    cy: "155",
    r: "28.052",
    fill: color
  })));
};
export var EISIcon = function EISIcon(props) {
  return /*#__PURE__*/React.createElement(SvgIcon, _extends({}, props, {
    viewBox: "0 0 132 131"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0.000000,131.000000) scale(0.100000,-0.100000)",
    stroke: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 655 l0 -655 660 0 660 0 0 655 0 655 -660 0 -660 0 0 -655z m833\r 598 c187 -54 347 -213 408 -403 30 -91 37 -261 15 -355 -28 -117 -80 -209\r -171 -301 -121 -122 -240 -174 -405 -174 -201 0 -374 94 -489 266 -222 331\r -89 795 269 945 118 50 252 58 373 22z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M520 1197 c-93 -31 -156 -71 -225 -141 -99 -101 -164 -261 -165 -404\r 0 -62 24 -184 46 -239 29 -69 105 -173 161 -218 222 -181 518 -165 718 39 113\r 115 165 246 165 413 0 170 -52 297 -169 414 -114 114 -222 159 -381 159 -61 0\r -103 -7 -150 -23z m12 -207 c39 -39 40 -42 36 -97 -4 -49 -9 -60 -41 -90 -98\r -89 -240 18 -194 147 16 45 68 80 120 80 33 0 46 -7 79 -40z m326 -78 c8 8 13\r 6 20 -13 5 -13 19 -51 31 -84 l23 -60 -39 -34 -38 -33 43 30 43 30 87 -39 c48\r -21 88 -42 90 -47 1 -5 -34 -39 -79 -77 -71 -60 -83 -67 -100 -57 -17 11 -19\r 9 -19 -13 0 -32 -20 -49 -140 -124 -136 -85 -147 -83 -220 26 -30 45 -59 85\r -64 90 -10 8 11 -28 51 -87 21 -31 23 -46 23 -143 0 -108 0 -108 -22 -102 -86\r 25 -186 95 -239 168 l-29 40 0 164 c0 153 1 164 21 184 20 20 28 21 123 15 63\r -5 107 -12 116 -21 9 -8 44 -63 79 -123 l64 -109 69 39 c37 22 68 41 68 43 0\r 2 -15 12 -33 23 -26 15 -41 38 -71 106 -36 84 -37 88 -19 102 17 14 16 14 -4\r 4 -13 -6 -23 -13 -23 -16 0 -3 13 -36 30 -75 16 -38 28 -69 26 -69 -7 0 -116\r 139 -116 147 0 4 48 38 107 76 102 64 108 66 118 47 8 -15 14 -17 23 -8z\r m-154 -257 l37 -44 -41 -21 c-22 -11 -45 -18 -50 -15 -8 5 -60 93 -60 102 0 6\r 43 22 61 22 9 1 33 -19 53 -44z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M806 660 c-47 -36 -57 -46 -31 -32 23 13 83 61 75 61 -3 0 -22 -13\r -44 -29z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M871 587 c2 -1 15 -11 29 -22 l25 -20 -19 23 c-11 12 -24 22 -29 22\r -6 0 -8 -1 -6 -3z"
  })));
};
export var IconSlash = function IconSlash(_ref4) {
  var iconColor = _ref4.iconColor,
    backgroundColor = _ref4.backgroundColor;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '17px',
      left: 7,
      width: '60%',
      height: '2px',
      backgroundColor: iconColor,
      transform: 'rotate(45deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '16px',
      left: 8,
      width: '60%',
      height: '2px',
      backgroundColor: backgroundColor,
      transform: 'rotate(45deg)'
    }
  }));
};