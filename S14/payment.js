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
    }
    Payment.prototype.generateReceipt = function () {
        console.log("Generated Receipt");
    };
    Payment.prototype.validateAmount = function (amount) {
        console.log("Amount Validated");
        return amount;
    };
    return Payment;
}());
var Credit = /** @class */ (function (_super) {
    __extends(Credit, _super);
    function Credit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Credit.prototype.pay = function (amount) {
        this.validateAmount(amount);
        console.log("Amount is payed", amount);
        this.generateReceipt();
    };
    return Credit;
}(Payment));
var Debit = /** @class */ (function (_super) {
    __extends(Debit, _super);
    function Debit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Debit.prototype.pay = function (amount) {
        this.validateAmount(amount);
        console.log("Amount is paid", amount);
        this.generateReceipt();
    };
    return Debit;
}(Payment));
var Upi = /** @class */ (function (_super) {
    __extends(Upi, _super);
    function Upi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Upi.prototype.pay = function (amount) {
        this.validateAmount(amount);
        console.log("Amount is paid", amount);
        this.generateReceipt();
    };
    return Upi;
}(Payment));
function doPayment(payment, amount) {
    payment.pay(amount);
}
doPayment(new Credit(), 9999);
doPayment(new Debit(), 7777);
doPayment(new Upi(), 4444);
