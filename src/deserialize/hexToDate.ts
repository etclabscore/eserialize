const hexToDate = (hexTimestamp: string): Date => {
  return new Date(parseInt(hexTimestamp, 16) * 1000);
};

export default hexToDate;
