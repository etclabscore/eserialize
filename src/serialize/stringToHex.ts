const stringToHex = (str: string): string => {
  return "0x" + new Buffer(str, "utf-8").toString("hex");
};

export default stringToHex;
