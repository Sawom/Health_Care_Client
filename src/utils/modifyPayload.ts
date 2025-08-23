// convert json data to form data

export const modifyPayload = (values: any) => {
  const obj = { ...values };
  const file = obj["file"];
  delete obj["file"];
  const data = JSON.stringify(obj);
  // data is formed in form data. so we modify this and add a file field to input
  const formData = new FormData();
  formData.append("data", data);
  formData.append("file", file as Blob);

  return formData;
};
