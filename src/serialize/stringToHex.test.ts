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
});
