import numberToHex from "./numberToHex";

describe("numberToHex", () => {
  it("can convert number to hex string", () => {
    expect(numberToHex(16)).toEqual("0x10");
  });
  it("can pad", () => {
    const str = "foo";
    const pad = 10;
    expect(numberToHex(16, { padStart: pad })).toEqual("0x0000000010");
  });
  it("can pad with no 0x prefix", () => {
    const str = "foo";
    const pad = 10;
    expect(numberToHex(16, { padStart: pad, noPrefix: true })).toEqual("0000000010");
  });
});
