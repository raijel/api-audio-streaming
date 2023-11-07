import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from "../config";
import { prisma } from "../utils/prismaClient";
import passport from "passport";
import { Strategy, Profile } from "passport-discord";

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: any, done) => {
  const userFound = await prisma.user.findUnique({ where: { id: id } });
  done(null, userFound);
});
passport.use(
  new Strategy(
    {
      clientID: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
      callbackURL: "/auth/redirect",
      scope: ["identify", "guilds"],
    },
    async (acessToken, refreshToken, profile: Profile, done) => {
      const guildId = profile.guilds?.map(
        (guild) => `id: ${guild.id}, name: ${guild.name}, icon: ${guild.icon}}`
      );

      try {
        const userFound = await prisma.user.findFirst({
          where: { discordId: profile.id },
        });

        if (userFound) return done(null, userFound);

        const newUser = await prisma.user.create({
          data: {
            discordId: profile.id,
            username: profile.username,
            guilds: guildId,
          },
        });
        done(null, newUser);
      } catch (err: any) {
        console.error(err);
        return done(err);
      }
    }
  )
);
