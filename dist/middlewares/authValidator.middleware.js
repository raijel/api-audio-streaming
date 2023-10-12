"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRequire = void 0;
const authRequire = (req, res, next) => {
    if (req.user) {
        next();
    }
    else {
        return res.status(401).json({ message: "Unauthorized" });
    }
};
exports.authRequire = authRequire;
