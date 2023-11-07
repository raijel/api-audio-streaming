"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const home_routes_1 = __importDefault(require("./routes/home.routes"));
const video_routes_1 = __importDefault(require("./routes/video.routes"));
const category_routes_1 = __importDefault(require("./routes/category.routes"));
const payment_routes_1 = __importDefault(require("./routes/payment.routes"));
require("./strategies/discord.strategy");
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = require("./utils/passport");
//EXPRESS CONFIG
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
//PASSPORT AND SESSIONS
app.use((0, express_session_1.default)(passport_2.passportConfig));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
//ROUTES
app.use("/auth", auth_routes_1.default);
app.use("/api", home_routes_1.default);
app.use("/api", video_routes_1.default);
app.use("/api", category_routes_1.default);
app.use("/api", payment_routes_1.default);
app.use((req, res) => {
    res.status(404).json({ message: "Page not found" });
});
exports.default = app;
//# sourceMappingURL=app.js.map