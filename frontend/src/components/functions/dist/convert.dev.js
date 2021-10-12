"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConvertDate = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ConvertDate = function ConvertDate(created_at) {
  var convertDay;

  if (created_at) {
    convertDay = created_at.split(/[T.]/);
    return "".concat(convertDay[0], " ").concat(convertDay[1]);
  }

  return null;
};

exports.ConvertDate = ConvertDate;