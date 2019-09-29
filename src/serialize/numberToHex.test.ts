import numberToHex from "./numberToHex";

describe("numberToHex", () => {
  it("can convert number to hex string", () => {
    expect(numberToHex(16)).toEqual("0x10");
  });
});
