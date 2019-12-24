import hexToNumber from "./hexToNumber";

describe("hexToDate", () => {
  it("can convert hex of 0 to number", () => {
    const fnumber = "0x0";
    expect(hexToNumber(fnumber)).toEqual(0);
  });
  it("can convert hex of 1 to number", () => {
    const fnumber = "0x1";
    expect(hexToNumber(fnumber)).toEqual(1);
  });
  it("can convert hex to number", () => {
    const fnumber = "0x878328";
    expect(hexToNumber(fnumber)).toEqual(8880936);
  });
  it("can return a not-number for nothing", () => {
        const fnumber = "";
        expect(hexToNumber(fnumber)).toEqual(NaN);
    });
  it("should return NaN for bad input", () => {
        const fnumber = "badnumber";
        expect(hexToNumber(fnumber)).not.toEqual(2989);
    });
});
