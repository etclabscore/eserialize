import hexToDate from "./hexToDate";

describe("hexToDate", () => {
  it("can convert hex to matching date object", () => {
    const ftime = "0x5d8fe2ec";
    const d = hexToDate(ftime);
    expect(d.toISOString()).toEqual("2019-09-28T22:47:08.000Z");
  });
});
