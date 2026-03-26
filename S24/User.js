var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
function DefaultValue(value, context) {
    console.log("decorator is called");
    //  console.log(value)
    //  console.log(context)
    return function (para) {
        // console.log(value)
        // console.log(para)
        // console.log("decorator returned function")
        return para !== undefined ? para : 'Guest';
    };
}
function Default(value, context) {
    // console.log("Decorator is called")
    // console.log(value);
    // console.log(context)
    // value();
    return function () {
        console.log("admin verification");
        if (this.userRole === "admin") {
            value();
        }
        else {
            console.log("Only Admin can delete or create User");
        }
        //     //
        //    console.log("Decorator is called")
        //    value()
    };
}
var User = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _userRole_decorators;
    var _userRole_initializers = [];
    var _userRole_extraInitializers = [];
    var _deleteData_decorators;
    var _createUser_decorators;
    return _a = /** @class */ (function () {
            function User() {
                this.userRole = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _userRole_initializers, void 0));
                __runInitializers(this, _userRole_extraInitializers);
            }
            ;
            User.prototype.deleteData = function () {
                console.log("User Deleted");
            };
            User.prototype.createUser = function () {
                console.log("user created");
            };
            return User;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userRole_decorators = [DefaultValue];
            _deleteData_decorators = [Default];
            _createUser_decorators = [Default];
            __esDecorate(_a, null, _deleteData_decorators, { kind: "method", name: "deleteData", static: false, private: false, access: { has: function (obj) { return "deleteData" in obj; }, get: function (obj) { return obj.deleteData; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _createUser_decorators, { kind: "method", name: "createUser", static: false, private: false, access: { has: function (obj) { return "createUser" in obj; }, get: function (obj) { return obj.createUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _userRole_decorators, { kind: "field", name: "userRole", static: false, private: false, access: { has: function (obj) { return "userRole" in obj; }, get: function (obj) { return obj.userRole; }, set: function (obj, value) { obj.userRole = value; } }, metadata: _metadata }, _userRole_initializers, _userRole_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var U1 = new User();
console.log(U1.userRole);
// //  U1.deleteData();
// //  U1.display()
// U1.createUser()
