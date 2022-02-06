"use strict";
exports.__esModule = true;
var Observer = /** @class */ (function () {
    function Observer(id) {
        this.id = id;
    }
    Observer.prototype.update = function () {
        console.log("Observer ".concat(this.id, " updated"));
    };
    return Observer;
}());
exports["default"] = Observer;
