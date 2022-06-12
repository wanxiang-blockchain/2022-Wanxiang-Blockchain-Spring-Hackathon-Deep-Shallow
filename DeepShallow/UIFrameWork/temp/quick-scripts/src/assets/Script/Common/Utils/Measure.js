"use strict";
cc._RF.push(module, '88f3djvTDJHMY+UnVZdcrvg', 'Measure');
// Script/Common/Utils/Measure.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.measure = void 0;
var measure = function (target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var start = performance.now();
        var result = originalMethod.apply(this, args);
        var finish = performance.now();
        console.log(propertyKey + " Execution time: " + (finish - start).toFixed(2) + " milliseconds");
        return result;
    };
    return descriptor;
};
exports.measure = measure;

cc._RF.pop();