"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSConsole = void 0;
var JSConsole = /** @class */ (function () {
    function JSConsole() {
        console.log('ji');
    }
    JSConsole.prototype.log = function (message) {
        console.log("%c " + message, 'color:red');
    };
    return JSConsole;
}());
exports.JSConsole = JSConsole;
