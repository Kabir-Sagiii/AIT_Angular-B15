var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Payment = /** @class */ (function () {
    function Payment() {
        this.orderNumber = 1;
    }
    Payment.prototype.payAmount = function (amount) {
        console.log("amount is paid", this.orderNumber);
    };
    return Payment;
}());
var Debit = /** @class */ (function (_super) {
    __extends(Debit, _super);
    function Debit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Debit.prototype.payAmount = function (amount) {
        console.log(this.orderNumber, "payment done using debit card");
    };
    return Debit;
}(Payment));
var p1 = new Payment();
console.log(p1.orderNumber);
p1.payAmount(90000);
var d1 = new Debit();
d1.payAmount(1000);
