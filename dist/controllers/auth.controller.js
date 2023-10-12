"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = void 0;
const logOut = (req, res, next) => {
    req.logout((err) => {
        if (err)
            return next(err);
        return res.status(200).json({ message: "Logged out" });
    });
};
exports.logOut = logOut;
