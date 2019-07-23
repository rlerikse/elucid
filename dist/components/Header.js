"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;

var _link = _interopRequireDefault(require("next/link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var linkStyle = {
  marginRight: 15
};

function Header() {
  return React.createElement("div", null, React.createElement(_link["default"], {
    href: "/"
  }, React.createElement("a", {
    style: linkStyle
  }, "Home")), React.createElement(_link["default"], {
    href: "/about"
  }, React.createElement("a", {
    style: linkStyle
  }, "About")));
}

//# sourceMappingURL=Header.js.map