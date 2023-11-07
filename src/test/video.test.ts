import request from "supertest";
import app from "../app";

describe("GET /api/video/:videoId", () => {
  const videoId = 1;
  it("should return a 404", async () => {
    const response = await request(app)
      .get(`/api/video/${videoId}`)
      .set("Authorization", `No token`)
      .expect(404);
    expect(response.body).toEqual({ message: "Video not found!" });
  });
});
