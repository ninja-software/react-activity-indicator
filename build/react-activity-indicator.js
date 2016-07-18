(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ActivityIndicator"] = factory(require("react"));
	else
		root["ActivityIndicator"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ActivityIndicator = function (_Component) {
	  _inherits(ActivityIndicator, _Component);
	
	  function ActivityIndicator(props) {
	    _classCallCheck(this, ActivityIndicator);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ActivityIndicator).call(this, props));
	
	    _this.state = { duration: _this.props.duration || 400 };
	    _this.state.number = props.number || 3;
	    return _this;
	  }
	
	  _createClass(ActivityIndicator, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      this.interval = setInterval(function () {
	        var active = _this2.state.active;
	        active = active >= _this2.state.number || isNaN(_this2.state.active) ? 0 : active + 1;
	        _this2.setState({ active: active });
	      }, this.state.duration * 2);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearInterval(this.interval);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var diameter = this.props.diameter || 20;
	      diameter = parseInt(diameter);
	      var acColor = this.props.activeColor || "black";
	      var n = this.props.number || 3;
	      var indicatorStyle = {
	        width: diameter,
	        height: diameter,
	        borderRadius: this.props.borderRadius || '10%',
	        borderWidth: typeof this.props.borderWidth != "undefined" ? this.props.borderWidth : 1,
	        borderStyle: 'solid',
	        background: this.props.color || "transparent",
	        transitionDuration: this.state.duration,
	        display: 'inline-block',
	        lineHeight: diameter,
	        fontSize: 0,
	        borderColor: this.props.borderColor || acColor
	      };
	      var containerWidth = n * diameter * 2;
	      return _react2.default.createElement(
	        'div',
	        { className: 'activity-indicator' },
	        _react2.default.createElement(
	          'div',
	          { style: { width: containerWidth } },
	          function () {
	            var children = [],
	                className = void 0;
	            for (var i = 0; i < _this3.state.number; i++) {
	              if (_this3.state.active == i) {
	                indicatorStyle.background = acColor;
	              } else {
	                indicatorStyle.background = _this3.props.color || "transparent";
	              }
	              children.push(_react2.default.createElement('div', { key: "indicator_" + i, style: _extends({
	                  marginLeft: i > 0 ? diameter : 0
	                }, indicatorStyle), className: className }));
	            }
	            return children;
	          }()
	        )
	      );
	    }
	  }]);
	
	  return ActivityIndicator;
	}(_react.Component);
	
	exports.default = ActivityIndicator;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-activity-indicator.map