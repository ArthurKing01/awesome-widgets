"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.testFunc = void 0;
/**
 * test
 * @param a - a number will multi
 * @returns multi a
 * @public
 */
function testFunc(a) {
    return a * 2;
}
exports.testFunc = testFunc;
/**
 * Student
 * @public
 */
var Student = /** @class */ (function () {
    function Student() {
        this.age = 6;
        this.score = 90;
    }
    /**
     * @returns string this.name
     */
    Student.prototype.getName = function () {
        return this.name;
    };
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=index.js.map