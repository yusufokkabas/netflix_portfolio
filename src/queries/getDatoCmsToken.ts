// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;
  const token = process.env.REACT_APP_DATOCMS_TOKEN;

  if (!token) {
    console.error("DatoCMS token is not set. Please check your .env file.");
    throw new Error("DatoCMS token is not set");
  }

  if (token.length < 10) {
    console.error(
      "DatoCMS token appears to be invalid. Please check your token."
    );
    throw new Error("Invalid DatoCMS token");
  }

  return token;
};
