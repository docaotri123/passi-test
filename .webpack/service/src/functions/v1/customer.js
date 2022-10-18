/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dtos/v1/customer.ts":
/*!*********************************!*\
  !*** ./src/dtos/v1/customer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.customersDTO = void 0;\r\nvar customersDTO = {\r\n    type: 'object',\r\n    properties: {\r\n        type: {\r\n            type: 'string',\r\n            \"enum\": ['Offset', 'Cursor'],\r\n            \"default\": 'Cursor',\r\n            nullable: true\r\n        },\r\n        firstName: {\r\n            type: 'string',\r\n            minLength: 1,\r\n            nullable: true\r\n        },\r\n        take: {\r\n            type: 'number',\r\n            \"default\": 10,\r\n            nullable: true\r\n        }\r\n    },\r\n    required: [],\r\n    additionalProperties: false\r\n};\r\nexports.customersDTO = customersDTO;\r\n\n\n//# sourceURL=webpack://passii/./src/dtos/v1/customer.ts?");

/***/ }),

/***/ "./src/functions/v1/customer.ts":
/*!**************************************!*\
  !*** ./src/functions/v1/customer.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nexports.index = void 0;\r\nvar appWrapper_1 = __webpack_require__(/*! ../../services/appWrapper */ \"./src/services/appWrapper/index.ts\");\r\nvar customer_1 = __webpack_require__(/*! ../../services/v1/customer */ \"./src/services/v1/customer.ts\");\r\nvar appError_1 = __webpack_require__(/*! ../../services/appError */ \"./src/services/appError/index.ts\");\r\nvar customer_2 = __webpack_require__(/*! ../../dtos/v1/customer */ \"./src/dtos/v1/customer.ts\");\r\nvar customerService = new customer_1[\"default\"]();\r\nvar customerFns = {\r\n    index: function (requestFunction) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var res, event, data;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    res = requestFunction.res, event = requestFunction.event;\r\n                    return [4, customerService.index(event.requestData)];\r\n                case 1:\r\n                    data = _a.sent();\r\n                    res.status(appError_1.HttpStatus.Ok).data(data);\r\n                    return [2];\r\n            }\r\n        });\r\n    }); }\r\n};\r\nvar index = (0, appWrapper_1.appWrapper)({ fn: customerFns.index, schema: customer_2.customersDTO });\r\nexports.index = index;\r\n\n\n//# sourceURL=webpack://passii/./src/functions/v1/customer.ts?");

/***/ }),

/***/ "./src/repositories/customer.ts":
/*!**************************************!*\
  !*** ./src/repositories/customer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar CustomerRepository = (function () {\r\n    function CustomerRepository(prisma) {\r\n        this.prisma = prisma;\r\n    }\r\n    CustomerRepository.prototype.getCustomers = function (requestData) {\r\n        var _a = requestData.pagination, take = _a.take, skip = _a.skip, cursor = _a.cursor, search = _a.search;\r\n        var query = {\r\n            take: take\r\n        };\r\n        if (search['firstName']) {\r\n            query['where'] = {\r\n                First_Name: {\r\n                    contains: search['firstName']\r\n                }\r\n            };\r\n        }\r\n        if (skip) {\r\n            query['skip'] = skip;\r\n        }\r\n        if (cursor) {\r\n            query['cursor'] = cursor;\r\n        }\r\n        query['orderBy'] = {\r\n            Customer_Number: 'asc'\r\n        };\r\n        return this.prisma.customers.findMany(query);\r\n    };\r\n    return CustomerRepository;\r\n}());\r\nexports[\"default\"] = CustomerRepository;\r\n\n\n//# sourceURL=webpack://passii/./src/repositories/customer.ts?");

/***/ }),

/***/ "./src/services/appError/base.ts":
/*!***************************************!*\
  !*** ./src/services/appError/base.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nexports.__esModule = true;\r\nexports.AppError = void 0;\r\nvar logging_1 = __webpack_require__(/*! ../../utils/logging */ \"./src/utils/logging.ts\");\r\nvar AppError = (function (_super) {\r\n    __extends(AppError, _super);\r\n    function AppError(error, status, details, stack, data) {\r\n        var _this = _super.call(this) || this;\r\n        if (Error.captureStackTrace) {\r\n            Error.captureStackTrace(_this, _this.constructor);\r\n        }\r\n        _this.error = error;\r\n        _this.status = status;\r\n        _this.date = new Date();\r\n        _this.details = details;\r\n        if (stack) {\r\n            _this.stack = stack;\r\n        }\r\n        if (data) {\r\n            _this.data = data;\r\n        }\r\n        return _this;\r\n    }\r\n    AppError.prototype.toString = function () {\r\n        return \"\".concat(this.stack, \" \").concat(this.date);\r\n    };\r\n    AppError.prototype.toJSON = function () {\r\n        var _a;\r\n        if (this.status >= 500) {\r\n            (0, logging_1.log)(this.toString());\r\n        }\r\n        var errorObject = {\r\n            message: this.error\r\n        };\r\n        if ((_a = this.details) === null || _a === void 0 ? void 0 : _a.length) {\r\n            errorObject.details = this.details;\r\n        }\r\n        if (this.data) {\r\n            errorObject.data = this.data;\r\n        }\r\n        return {\r\n            status: this.status,\r\n            error: errorObject\r\n        };\r\n    };\r\n    return AppError;\r\n}(Error));\r\nexports.AppError = AppError;\r\n\n\n//# sourceURL=webpack://passii/./src/services/appError/base.ts?");

/***/ }),

/***/ "./src/services/appError/errors.ts":
/*!*****************************************!*\
  !*** ./src/services/appError/errors.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.GeneralInvalidParameters = exports.GeneralBadRequest = exports.GeneralInternalServerError = void 0;\r\nvar base_1 = __webpack_require__(/*! ./base */ \"./src/services/appError/base.ts\");\r\nvar httpStatus_1 = __webpack_require__(/*! ./httpStatus */ \"./src/services/appError/httpStatus.ts\");\r\nvar GeneralInternalServerError = function (details, stack) {\r\n    return new base_1.AppError('GeneralInternalServerError', httpStatus_1.HttpStatus.InternalServerError, details, stack);\r\n};\r\nexports.GeneralInternalServerError = GeneralInternalServerError;\r\nvar GeneralInvalidParameters = function (details) {\r\n    return new base_1.AppError('GeneralInvalidParameters', httpStatus_1.HttpStatus.BadRequest, details);\r\n};\r\nexports.GeneralInvalidParameters = GeneralInvalidParameters;\r\nvar GeneralBadRequest = function () {\r\n    return new base_1.AppError('GeneralBadRequest', httpStatus_1.HttpStatus.BadRequest);\r\n};\r\nexports.GeneralBadRequest = GeneralBadRequest;\r\n\n\n//# sourceURL=webpack://passii/./src/services/appError/errors.ts?");

/***/ }),

/***/ "./src/services/appError/httpStatus.ts":
/*!*********************************************!*\
  !*** ./src/services/appError/httpStatus.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.HttpStatus = void 0;\r\nvar HttpStatus;\r\n(function (HttpStatus) {\r\n    HttpStatus[HttpStatus[\"Ok\"] = 200] = \"Ok\";\r\n    HttpStatus[HttpStatus[\"Created\"] = 201] = \"Created\";\r\n    HttpStatus[HttpStatus[\"NoContent\"] = 204] = \"NoContent\";\r\n    HttpStatus[HttpStatus[\"BadRequest\"] = 400] = \"BadRequest\";\r\n    HttpStatus[HttpStatus[\"Unauthorized\"] = 401] = \"Unauthorized\";\r\n    HttpStatus[HttpStatus[\"PaymentRequired\"] = 402] = \"PaymentRequired\";\r\n    HttpStatus[HttpStatus[\"Forbidden\"] = 403] = \"Forbidden\";\r\n    HttpStatus[HttpStatus[\"NotFound\"] = 404] = \"NotFound\";\r\n    HttpStatus[HttpStatus[\"MethodNotAllowed\"] = 405] = \"MethodNotAllowed\";\r\n    HttpStatus[HttpStatus[\"NotAcceptable\"] = 406] = \"NotAcceptable\";\r\n    HttpStatus[HttpStatus[\"Conflict\"] = 409] = \"Conflict\";\r\n    HttpStatus[HttpStatus[\"Gone\"] = 410] = \"Gone\";\r\n    HttpStatus[HttpStatus[\"UnprocessableEntity\"] = 422] = \"UnprocessableEntity\";\r\n    HttpStatus[HttpStatus[\"InternalServerError\"] = 500] = \"InternalServerError\";\r\n    HttpStatus[HttpStatus[\"NotImplemented\"] = 501] = \"NotImplemented\";\r\n    HttpStatus[HttpStatus[\"BadGateway\"] = 502] = \"BadGateway\";\r\n    HttpStatus[HttpStatus[\"ServiceUnavailable\"] = 503] = \"ServiceUnavailable\";\r\n    HttpStatus[HttpStatus[\"GatewayTimeout\"] = 504] = \"GatewayTimeout\";\r\n})(HttpStatus = exports.HttpStatus || (exports.HttpStatus = {}));\r\n\n\n//# sourceURL=webpack://passii/./src/services/appError/httpStatus.ts?");

/***/ }),

/***/ "./src/services/appError/index.ts":
/*!****************************************!*\
  !*** ./src/services/appError/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.HttpStatus = exports.AppError = void 0;\r\nvar AppError = __webpack_require__(/*! ./errors */ \"./src/services/appError/errors.ts\");\r\nexports.AppError = AppError;\r\nvar httpStatus_1 = __webpack_require__(/*! ./httpStatus */ \"./src/services/appError/httpStatus.ts\");\r\nexports.HttpStatus = httpStatus_1.HttpStatus;\r\n\n\n//# sourceURL=webpack://passii/./src/services/appError/index.ts?");

/***/ }),

/***/ "./src/services/appWrapper/beforeExecute.ts":
/*!**************************************************!*\
  !*** ./src/services/appWrapper/beforeExecute.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nexports.beforeExecute = void 0;\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar validator_1 = __webpack_require__(/*! ../middleware/validator */ \"./src/services/middleware/validator.ts\");\r\nvar beforeExecute = function (_a) {\r\n    var schema = _a.schema, event = _a.event, coerceTypes = _a.coerceTypes;\r\n    return __awaiter(void 0, void 0, void 0, function () {\r\n        var _event, lang, contentType;\r\n        return __generator(this, function (_b) {\r\n            lang = 'en';\r\n            contentType = (0, ramda_1.path)(['headers', 'Content-Type'], event);\r\n            if (contentType && contentType.indexOf('multipart/form-data') > -1) {\r\n                _event = (0, validator_1[\"default\"])({ schema: schema, event: __assign(__assign({}, event), { body: null }), lang: lang, coerceTypes: coerceTypes });\r\n            }\r\n            else {\r\n                _event = (0, validator_1[\"default\"])({ schema: schema, event: event, lang: lang, coerceTypes: coerceTypes });\r\n            }\r\n            return [2, {\r\n                    event: _event\r\n                }];\r\n        });\r\n    });\r\n};\r\nexports.beforeExecute = beforeExecute;\r\n\n\n//# sourceURL=webpack://passii/./src/services/appWrapper/beforeExecute.ts?");

/***/ }),

/***/ "./src/services/appWrapper/captureHeaders.ts":
/*!***************************************************!*\
  !*** ./src/services/appWrapper/captureHeaders.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.captureHeaders = void 0;\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar captureHeaders = function (event) {\r\n    var userId = ['local'].includes(\"development\")\r\n        ? (0, ramda_1.path)(['headers', 'jwt-userId'], event)\r\n        : (0, ramda_1.path)(['requestContext', 'authorizer', 'jwt-userId'], event);\r\n    var country = (0, ramda_1.path)(['headers', 'CloudFront-Viewer-Country'], event) || '';\r\n    Object.assign(event.headers, {\r\n        userId: userId,\r\n        country: country.toLowerCase()\r\n    });\r\n};\r\nexports.captureHeaders = captureHeaders;\r\n\n\n//# sourceURL=webpack://passii/./src/services/appWrapper/captureHeaders.ts?");

/***/ }),

/***/ "./src/services/appWrapper/catchError.ts":
/*!***********************************************!*\
  !*** ./src/services/appWrapper/catchError.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.catchError = void 0;\r\nvar appError_1 = __webpack_require__(/*! ../appError */ \"./src/services/appError/index.ts\");\r\nvar catchError = function (error) {\r\n    var code = error.code, name = error.name;\r\n    var codeName = \"\".concat(name, \"-\").concat(code);\r\n    switch (codeName) {\r\n        case \"MongoError-11000\":\r\n            return appError_1.AppError.GeneralInternalServerError([], \"\");\r\n        default: {\r\n            if (error.toJSON) {\r\n                return error;\r\n            }\r\n            return appError_1.AppError.GeneralInternalServerError([], error.stack);\r\n        }\r\n    }\r\n};\r\nexports.catchError = catchError;\r\n\n\n//# sourceURL=webpack://passii/./src/services/appWrapper/catchError.ts?");

/***/ }),

/***/ "./src/services/appWrapper/index.ts":
/*!******************************************!*\
  !*** ./src/services/appWrapper/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nexports.triggerWrapper = exports.appWrapper = void 0;\r\nvar response_1 = __webpack_require__(/*! ../../utils/response */ \"./src/utils/response.ts\");\r\nvar beforeExecute_1 = __webpack_require__(/*! ./beforeExecute */ \"./src/services/appWrapper/beforeExecute.ts\");\r\nvar captureHeaders_1 = __webpack_require__(/*! ./captureHeaders */ \"./src/services/appWrapper/captureHeaders.ts\");\r\nvar catchError_1 = __webpack_require__(/*! ./catchError */ \"./src/services/appWrapper/catchError.ts\");\r\nvar prisma_1 = __webpack_require__(/*! ../../shared/prisma */ \"./src/shared/prisma/index.ts\");\r\nvar appWrapper = function (_a) {\r\n    var fn = _a.fn, schema = _a.schema, _b = _a.coerceTypes, coerceTypes = _b === void 0 ? true : _b;\r\n    return function (event, context) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var res, _event, error_1, appError, res;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    context.callbackWaitsForEmptyEventLoop = false;\r\n                    _a.label = 1;\r\n                case 1:\r\n                    _a.trys.push([1, 4, 5, 6]);\r\n                    res = new response_1[\"default\"]({});\r\n                    if (event['source'] === 'serverless-warmup') {\r\n                        console.log('WarmUP - Lambda is warm!');\r\n                        return [2, {\r\n                                statusCode: 200,\r\n                                body: JSON.stringify({ message: 'ok' })\r\n                            }];\r\n                    }\r\n                    return [4, (0, beforeExecute_1.beforeExecute)({\r\n                            schema: schema,\r\n                            event: event,\r\n                            coerceTypes: coerceTypes\r\n                        })];\r\n                case 2:\r\n                    _event = (_a.sent()).event;\r\n                    (0, captureHeaders_1.captureHeaders)(_event);\r\n                    return [4, fn({\r\n                            event: _event,\r\n                            context: context,\r\n                            res: res\r\n                        })];\r\n                case 3:\r\n                    _a.sent();\r\n                    return [2, res.toJSON()];\r\n                case 4:\r\n                    error_1 = _a.sent();\r\n                    appError = (0, catchError_1.catchError)(error_1);\r\n                    res = new response_1[\"default\"](appError.toJSON());\r\n                    return [2, res.toJSON()];\r\n                case 5:\r\n                    (0, prisma_1.closeConnection)();\r\n                    return [7];\r\n                case 6: return [2];\r\n            }\r\n        });\r\n    }); };\r\n};\r\nexports.appWrapper = appWrapper;\r\nvar triggerWrapper = function (_a) {\r\n    var fn = _a.fn;\r\n    return function (event, context) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var res, error_2, appError, res;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    context.callbackWaitsForEmptyEventLoop = false;\r\n                    _a.label = 1;\r\n                case 1:\r\n                    _a.trys.push([1, 3, 4, 5]);\r\n                    res = new response_1[\"default\"]({});\r\n                    if (event['source'] === 'serverless-warmup') {\r\n                        console.log('WarmUP - Lambda is warm!');\r\n                        return [2, {\r\n                                statusCode: 200,\r\n                                body: JSON.stringify({ message: 'ok' })\r\n                            }];\r\n                    }\r\n                    return [4, fn({\r\n                            event: event,\r\n                            context: context,\r\n                            res: res\r\n                        })];\r\n                case 2:\r\n                    _a.sent();\r\n                    return [2, res.toJSON()];\r\n                case 3:\r\n                    error_2 = _a.sent();\r\n                    console.log(\"err: \", error_2);\r\n                    appError = (0, catchError_1.catchError)(error_2);\r\n                    res = new response_1[\"default\"](appError.toJSON());\r\n                    return [2, res.toJSON()];\r\n                case 4:\r\n                    (0, prisma_1.closeConnection)();\r\n                    return [7];\r\n                case 5: return [2];\r\n            }\r\n        });\r\n    }); };\r\n};\r\nexports.triggerWrapper = triggerWrapper;\r\n\n\n//# sourceURL=webpack://passii/./src/services/appWrapper/index.ts?");

/***/ }),

/***/ "./src/services/middleware/validator.ts":
/*!**********************************************!*\
  !*** ./src/services/middleware/validator.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nexports.__esModule = true;\r\nvar ajv_1 = __webpack_require__(/*! ajv */ \"ajv\");\r\nvar localize = __webpack_require__(/*! ajv-i18n */ \"ajv-i18n\");\r\nvar appError_1 = __webpack_require__(/*! ../appError */ \"./src/services/appError/index.ts\");\r\nvar isYoutubeLink = function (url) {\r\n    var regexYoutubeLink = /^(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?(?=.*v=((\\w|-){11}))(?:\\S+)?$/i;\r\n    return regexYoutubeLink.test(url);\r\n};\r\nvar customValidator = function () {\r\n    return {\r\n        youtubeLink: {\r\n            validate: function (schemaValue, data) { return (data ? isYoutubeLink(data) : true); }\r\n        }\r\n    };\r\n};\r\nvar addKeywords = function (ajv) {\r\n    var _validators = customValidator();\r\n    for (var _i = 0, _a = Object.entries(_validators); _i < _a.length; _i++) {\r\n        var _b = _a[_i], keyword = _b[0], opts = _b[1];\r\n        ajv.addKeyword({\r\n            keyword: keyword,\r\n            validate: opts.validate\r\n        });\r\n    }\r\n};\r\nvar validator = function (_a) {\r\n    var _b;\r\n    var schema = _a.schema, event = _a.event, lang = _a.lang, coerceTypes = _a.coerceTypes;\r\n    var _c = event.pathParameters, pathParameters = _c === void 0 ? {} : _c, _d = event.queryStringParameters, queryStringParameters = _d === void 0 ? {} : _d, _e = event.body, body = _e === void 0 ? '{}' : _e;\r\n    var _body = typeof body === 'string' ? JSON.parse(body) : body;\r\n    var data = __assign(__assign(__assign({}, JSON.parse(JSON.stringify(queryStringParameters))), _body), JSON.parse(JSON.stringify(pathParameters)));\r\n    if (!schema) {\r\n        return __assign(__assign({}, event), { requestData: data });\r\n    }\r\n    var ajv = new ajv_1[\"default\"]({\r\n        $data: true,\r\n        formats: {},\r\n        allErrors: true,\r\n        useDefaults: true,\r\n        coerceTypes: coerceTypes\r\n    });\r\n    addKeywords(ajv);\r\n    var _ajv = ajv;\r\n    var validate = _ajv.compile(schema);\r\n    var valid = validate(data);\r\n    if (!valid) {\r\n        localize[lang](validate.errors);\r\n        var details = ((_b = validate === null || validate === void 0 ? void 0 : validate.errors) === null || _b === void 0 ? void 0 : _b.map(function (e) {\r\n            return \"\".concat(e.instancePath, \" \").concat(e.message).trim();\r\n        })) || [];\r\n        throw appError_1.AppError.GeneralInvalidParameters(details);\r\n    }\r\n    return __assign(__assign({}, event), { requestData: data });\r\n};\r\nexports[\"default\"] = validator;\r\n\n\n//# sourceURL=webpack://passii/./src/services/middleware/validator.ts?");

/***/ }),

/***/ "./src/services/v1/customer.ts":
/*!*************************************!*\
  !*** ./src/services/v1/customer.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nvar prisma_1 = __webpack_require__(/*! ../../shared/prisma */ \"./src/shared/prisma/index.ts\");\r\nvar customer_1 = __webpack_require__(/*! ../../repositories/customer */ \"./src/repositories/customer.ts\");\r\nvar CustomerService = (function () {\r\n    function CustomerService() {\r\n        var prisma = (0, prisma_1.createConnection)();\r\n        this.customerRepository = new customer_1[\"default\"](prisma);\r\n    }\r\n    CustomerService.prototype.index = function (requestData) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var type, _a, take, firstName, pagination, data;\r\n            return __generator(this, function (_b) {\r\n                switch (_b.label) {\r\n                    case 0:\r\n                        type = requestData.type, _a = requestData.take, take = _a === void 0 ? 10 : _a, firstName = requestData.firstName;\r\n                        if (type === 'Offset') {\r\n                            return [2, []];\r\n                        }\r\n                        pagination = { take: take, search: { firstName: firstName } };\r\n                        return [4, this.customerRepository.getCustomers({ type: 'Cursor', pagination: pagination })];\r\n                    case 1:\r\n                        data = _b.sent();\r\n                        return [2, data];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    return CustomerService;\r\n}());\r\nexports[\"default\"] = CustomerService;\r\n\n\n//# sourceURL=webpack://passii/./src/services/v1/customer.ts?");

/***/ }),

/***/ "./src/shared/prisma/connection.ts":
/*!*****************************************!*\
  !*** ./src/shared/prisma/connection.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nexports.closeConnection = exports.createConnection = void 0;\r\nvar client_1 = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\r\nvar prisma;\r\nvar createConnection = function () {\r\n    if (!prisma) {\r\n        prisma = new client_1.PrismaClient();\r\n    }\r\n    return prisma;\r\n};\r\nexports.createConnection = createConnection;\r\nvar closeConnection = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        if (prisma) {\r\n            return [2, prisma.$disconnect()];\r\n        }\r\n        return [2];\r\n    });\r\n}); };\r\nexports.closeConnection = closeConnection;\r\n\n\n//# sourceURL=webpack://passii/./src/shared/prisma/connection.ts?");

/***/ }),

/***/ "./src/shared/prisma/index.ts":
/*!************************************!*\
  !*** ./src/shared/prisma/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nexports.__esModule = true;\r\nexports.closeConnection = exports.createConnection = void 0;\r\nvar connection_1 = __webpack_require__(/*! ./connection */ \"./src/shared/prisma/connection.ts\");\r\n__createBinding(exports, connection_1, \"createConnection\");\r\n__createBinding(exports, connection_1, \"closeConnection\");\r\n\n\n//# sourceURL=webpack://passii/./src/shared/prisma/index.ts?");

/***/ }),

/***/ "./src/utils/logging.ts":
/*!******************************!*\
  !*** ./src/utils/logging.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.log = void 0;\r\nvar log = function () {\r\n    var args = [];\r\n    for (var _i = 0; _i < arguments.length; _i++) {\r\n        args[_i] = arguments[_i];\r\n    }\r\n    if (process.env.LOG_DETAILS !== 'disabled') {\r\n        console.log.apply(console, args);\r\n    }\r\n};\r\nexports.log = log;\r\n\n\n//# sourceURL=webpack://passii/./src/utils/logging.ts?");

/***/ }),

/***/ "./src/utils/response.ts":
/*!*******************************!*\
  !*** ./src/utils/response.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar Response = (function () {\r\n    function Response(params) {\r\n        var _a = params || {}, status = _a.status, data = _a.data, error = _a.error, meta = _a.meta;\r\n        this._status = status;\r\n        this._data = data;\r\n        this._error = error;\r\n        this._meta = meta;\r\n    }\r\n    Response.prototype.status = function (status) {\r\n        this._status = status;\r\n        return this;\r\n    };\r\n    ;\r\n    Response.prototype.data = function (data) {\r\n        if (data && data.docs) {\r\n            this._data = data.docs;\r\n            this._meta = {\r\n                total: data.totalDocs\r\n            };\r\n        }\r\n        else if (data.meta) {\r\n            this._data = data.data;\r\n            this._meta = data.meta;\r\n        }\r\n        else {\r\n            this._data = data;\r\n        }\r\n    };\r\n    ;\r\n    Response.prototype.meta = function (meta) {\r\n        this._meta = meta;\r\n    };\r\n    ;\r\n    Response.prototype.toJSON = function () {\r\n        var result = {\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n                'Access-Control-Allow-Origin': '*',\r\n                'Access-Control-Allow-Credentials': true\r\n            },\r\n            statusCode: 0,\r\n            body: ''\r\n        };\r\n        var body = {\r\n            data: []\r\n        };\r\n        if (this._status) {\r\n            result.statusCode = this._status;\r\n        }\r\n        if (this._data) {\r\n            body.data = this._data;\r\n        }\r\n        if (this._error) {\r\n            body.error = this._error;\r\n        }\r\n        if (this._meta) {\r\n            body.meta = this._meta;\r\n        }\r\n        if (Object.keys(body).length) {\r\n            result.body = JSON.stringify(body);\r\n        }\r\n        return result;\r\n    };\r\n    ;\r\n    return Response;\r\n}());\r\nexports[\"default\"] = Response;\r\n\n\n//# sourceURL=webpack://passii/./src/utils/response.ts?");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "ajv":
/*!**********************!*\
  !*** external "ajv" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("ajv");

/***/ }),

/***/ "ajv-i18n":
/*!***************************!*\
  !*** external "ajv-i18n" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("ajv-i18n");

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/***/ ((module) => {

module.exports = require("ramda");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/v1/customer.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;