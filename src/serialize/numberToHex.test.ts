import numberToHex from "./numberToHex";

describe("numberToHex", () => {
  it("can convert number to hex string", () => {
    expect(numberToHex(16)).toEqual("0x10");
  });
  it("can pad", () => {
    const pad = 5;
    expect(numberToHex(16, { padStart: pad })).toEqual("0x00010");
  });
  it("can pad with no 0x prefix", () => {
    const pad = 5;
    expect(numberToHex(16, { padStart: pad, noPrefix: true })).toEqual("00010");
  });
});
