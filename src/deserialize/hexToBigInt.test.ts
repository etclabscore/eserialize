import hexToBigInt from "./hexToBigInt";

describe("hexToBigInt", () => {
  it("can convert hex of 0 to bigint", () => {
    const fnumber = "0x0";
    expect(hexToBigInt(fnumber)).toEqual(BigInt(0));
  });
  it("can convert hex of 1 to bigint", () => {
    const fnumber = "0x1";
    expect(hexToBigInt(fnumber)).toEqual(BigInt(1));
  });
  it("can convert hex to bigint", () => {
    const fnumber = "0x878328";
    expect(hexToBigInt(fnumber)).toEqual(BigInt(8880936));
  });
});
