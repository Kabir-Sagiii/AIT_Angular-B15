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
        this.cardNo = 0;
        this.cvv = 0;
        this.cardName = "";
        this.username = "";
        this.amount = 0;
    }
    Payment.prototype.payAmount = function () {
        console.log("payment don using");
    };
    return Payment;
}());
var Credit = /** @class */ (function (_super) {
    __extends(Credit, _super);
    function Credit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Credit.prototype.payAmount = function () {
        this.amount = this.amount - 0.1;
        console.log("payment done using credit card", this.amount);
    };
    return Credit;
}(Payment));
var Debit = /** @class */ (function (_super) {
    __extends(Debit, _super);
    function Debit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Debit.prototype.payAmount = function () {
        this.amount = this.amount + 100;
        console.log("payment done through debit card");
    };
    return Debit;
}(Payment));
var UPI = /** @class */ (function (_super) {
    __extends(UPI, _super);
    function UPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UPI.prototype.payAmount = function () {
        console.log("payment done through debit card", this.amount);
    };
    return UPI;
}(Payment));
//   var d1 = new Debit()
//    d1.payAmountUsingDebit()
//   var c1 = new Credit()
//   c1.payAmountUsingCredit()
//   var up1 = new UPI()
//   up1.payAmountUsingUPI()
// function payAmount(payment:Payment){
//    if(typeof payment ==="Credit"){
//     payment.payAmountCredit()
//    }else if(typeof payment ==="Debit"){
//     payment.payAmountDebit()
//    }
// }
function payAmount(payment) {
    payment.payAmount();
}
payAmount(new UPI());
