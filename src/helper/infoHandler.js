export default async function infoHandler(name, photo, jwt) {
  const form = new FormData();

  form.append("name", name ? name : "");
  form.append("photo", photo);
  const res = await fetch(
    `http://localhost:8080/backpack/api/r1/user/updateMe`,
    {
      method: `PATCH`,
      headers: {
        "Contetnt-Type": "multipart/form-data",
        authorization: `Bearer ${jwt}`,
      },
      body: form,
    }
  );
  const data = await res.json();
  sessionStorage.setItem("image", data.data.updatedUser.photo);
  window.location.reload();
}
