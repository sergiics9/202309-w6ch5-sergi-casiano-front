export const makeImageUrl = (publicID: string, height: number) => {
  const urlBase = 'http://res.cloudinary.com/dbhsorjvc/image/upload';
  const url = `${urlBase}/h_${height}/v1701195742/${publicID}`;
  return url;
};
