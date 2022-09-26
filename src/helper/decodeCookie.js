import jwtDecode from "jwt-decode";

export const DecodeJWT = (cookie) => {
  try {
    const jwtDecoded = jwtDecode(cookie);
    return jwtDecoded;
  } catch (error) {
    console.log(error.message);
  }
};
