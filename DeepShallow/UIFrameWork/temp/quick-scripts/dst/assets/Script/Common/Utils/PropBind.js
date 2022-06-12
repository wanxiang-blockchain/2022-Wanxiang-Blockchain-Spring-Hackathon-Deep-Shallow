
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Utils/PropBind.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f9f8Tv5WdH8a3E1C7Bm4Ro', 'PropBind');
// Script/Common/Utils/PropBind.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** binder  通过重写 prop的get, set方法, 达到监听变量修改的要求 */
var PropBind = /** @class */ (function () {
    function PropBind() {
    }
    PropBind.prototype.bind = function (name, callback) {
        // to do
        // ...
    };
    return PropBind;
}());
exports.default = PropBind;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL1V0aWxzL1Byb3BCaW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQWdEO0FBQ2hEO0lBQUE7SUFLQSxDQUFDO0lBSkcsdUJBQUksR0FBSixVQUFLLElBQVksRUFBRSxRQUFrQjtRQUNqQyxRQUFRO1FBQ1IsTUFBTTtJQUNWLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiogYmluZGVyICDpgJrov4fph43lhpkgcHJvcOeahGdldCwgc2V05pa55rOVLCDovr7liLDnm5HlkKzlj5jph4/kv67mlLnnmoTopoHmsYIgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BCaW5kIHtcbiAgICBiaW5kKG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vIHRvIGRvXG4gICAgICAgIC8vIC4uLlxuICAgIH1cbn0iXX0=