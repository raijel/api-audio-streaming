"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = void 0;
const prismaClient_1 = require("../utils/prismaClient");
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoriesFound = yield prismaClient_1.prisma.category.findMany();
        if (categoriesFound.length === 0)
            return res
                .status(204)
                .json({ message: "There are not categories on database" });
        return res.json(categoriesFound);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});
exports.getCategories = getCategories;
//# sourceMappingURL=category.controller.js.map