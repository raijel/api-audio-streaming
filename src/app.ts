import express, { Response, Request } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes";
import homeRoutes from "./routes/home.routes";
import audioRoutes from "./routes/audio.routes";
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
app.use("/api", audioRoutes);


app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Page not found" });
});

export default app;
