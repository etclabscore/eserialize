import hexToString from "./hexToString";

describe("hexToDate", () => {
  it("can convert hex to string", () => {
    const fstring = "0x61736466";
    expect(hexToString(fstring)).toEqual("asdf");
  });
  it("can convert other hex to string", () => {
    const fstring = "0x666f6f";
    expect(hexToString(fstring)).toEqual("foo");
  });

});
