import dateToHex from "./dateToHex";

describe("dateToHex", () => {
  it("can convert date to hex string", () => {
    expect(dateToHex(new Date("2019-09-28T22:47:08.000Z"))).toEqual("0x5d8fe2ec");
  });
});
