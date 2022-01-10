import { getGif } from "./getGif";

describe("Given a getGif function", () => {
  describe("When it is called with on categorie", () => {
    test("It should return a 10 items with this category", async () => {
      const gif = await getGif("Dragon");

      expect(gif.length).toBe(10);
    });
  });

  describe("When it callad without category", () => {
    test("It should return a 0 items in array", async () => {
      const gif = await getGif("");

      expect(gif.length).toBe(0);
    });
  });
});
