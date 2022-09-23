export const sendReq = async (url, requestMethod, bodyData) => {
  try {
    const res = await fetch(url, {
      method: requestMethod,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: bodyData ? JSON.stringify(bodyData) : null,
    });

    if (!res.ok) {
      throw new Error(`Error process the request`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
