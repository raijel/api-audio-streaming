import session from "express-session";
import pgSession from "connect-pg-simple";
import { DISCORD_SECRET_KEY, DATABASE_URL } from "../config";

const PgSession = pgSession(session);
export const passportConfig = {
  secret: DISCORD_SECRET_KEY,
  name: "tokenDiscord",
  saveUninitialized: false,
  resave: false,
  store: new PgSession({
    tableName: "session",
    conString: DATABASE_URL,
  }),
  cookie: {
    maxAge: 60000 * 60 * 24, // 1 day
    secure: true,
    httpOnly: true,
  },
};
