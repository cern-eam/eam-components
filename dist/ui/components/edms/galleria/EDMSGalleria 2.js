'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EDMSUtils = require('../utils/EDMSUtils');

var _DescriptionStrip = require('./DescriptionStrip');

var _DescriptionStrip2 = _interopRequireDefault(_DescriptionStrip);

var _reactImageGallery = require('react-image-gallery');

var _reactImageGallery2 = _interopRequireDefault(_reactImageGallery);

require('./edmsgalleria.css');

var _ChevronLeft = require('mdi-material-ui/ChevronLeft');

var _ChevronLeft2 = _interopRequireDefault(_ChevronLeft);

var _ChevronRight = require('mdi-material-ui/ChevronRight');

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EDMSGalleria = function (_React$Component) {
    _inherits(EDMSGalleria, _React$Component);

    function EDMSGalleria() {
        _classCallCheck(this, EDMSGalleria);

        return _possibleConstructorReturn(this, (EDMSGalleria.__proto__ || Object.getPrototypeOf(EDMSGalleria)).apply(this, arguments));
    }

    _createClass(EDMSGalleria, [{
        key: 'generateImagesList',
        value: function generateImagesList() {
            var documentList = this.props.documentList;


            return documentList.reduce(function (images, document) {
                return images.concat(document.files.map(function (file) {
                    return {
                        original: (0, _EDMSUtils.getEDMSFileUrl)(file),
                        thumbnail: (0, _EDMSUtils.getEDMSFileUrl)(file),
                        description: (0, _DescriptionStrip2.default)(file)
                    };
                }));
            }, []);
        }
    }, {
        key: 'renderLeftNav',
        value: function renderLeftNav(onClick, disabled) {
            return _react2.default.createElement(_ChevronLeft2.default, { className: 'image-gallery-left-nav',
                onClick: onClick });
        }
    }, {
        key: 'renderRightNav',
        value: function renderRightNav(onClick, disabled) {
            return _react2.default.createElement(_ChevronRight2.default, { className: 'image-gallery-right-nav',
                onClick: onClick });
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.props.documentList) return _react2.default.createElement('div', null);

            var images = this.generateImagesList();

            return _react2.default.createElement(
                'div',
                { style: { width: "100%", marginTop: 0 } },
                _react2.default.createElement(_reactImageGallery2.default, { showPlayButton: false,
                    showFullscreenButton: false,
                    items: images,
                    renderLeftNav: this.renderLeftNav,
                    renderRightNav: this.renderRightNav
                })
            );
        }
    }]);

    return EDMSGalleria;
}(_react2.default.Component);

exports.default = EDMSGalleria;