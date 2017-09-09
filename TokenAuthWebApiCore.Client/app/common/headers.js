"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
exports.contentHeaders = new http_1.Headers();
exports.contentHeaders.append('Accept', 'application/json');
exports.contentHeaders.append('Content-Type', 'application/json');
exports.contentHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
//# sourceMappingURL=headers.js.map