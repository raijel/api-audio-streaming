"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alreadyAuth = void 0;
const alreadyAuth = (req, res, next) => {
    if (req.user) {
        res.redirect("/api/home");
    }
    else {
        next();
    }
};
exports.alreadyAuth = alreadyAuth;
