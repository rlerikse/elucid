"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Layout;

var _Header = _interopRequireDefault(require("./Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

function Layout(props) {
  return React.createElement("div", {
    style: layoutStyle
  }, React.createElement(_Header["default"], null), props.children);
}

//# sourceMappingURL=MyLayout.js.map