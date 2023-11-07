import express, { Request, Response } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes";
import homeRoutes from "./routes/home.routes";
import videoRoutes from "./routes/video.routes";
import categoryRoutes from "./routes/category.routes";
import paymentRoutes from "./routes/payment.routes";
import "./strategies/discord.strategy";
import session from "express-session";
import passport from "passport";
import { passportConfig } from "./utils/passport";

//EXPRESS CONFIG
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

//PASSPORT AND SESSIONS
app.use(session(passportConfig));
app.use(passport.initialize());
app.use(passport.session());

//ROUTES
app.use("/auth", authRoutes);
app.use("/api", homeRoutes);
app.use("/api", videoRoutes);
app.use("/api", categoryRoutes);
app.use("/api", paymentRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Page not found" });
});

export default app;
