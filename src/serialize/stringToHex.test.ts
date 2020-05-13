import stringToHex from "./stringToHex";

describe("stringToHex", () => {
  it("can convert string to hex", () => {
    const str = "asdf";
    expect(stringToHex(str)).toEqual("0x61736466");
  });
  it("can convert other hex to string", () => {
    const str = "foo";
    expect(stringToHex(str)).toEqual("0x666f6f");
  });
  it("can pad", () => {
    const str = "foo";
    const pad = 10;
    expect(stringToHex(str, {padStart: pad})).toEqual("0x0000666f6f");
  });
  it("can pad with no 0x prefix", () => {
    const str = "foo";
    const pad = 10;
    expect(stringToHex(str, {padStart: pad, noPrefix: true})).toEqual("0000666f6f");
  });
});
