async function sendMail(data) {
  const response = await fetch("https://formspree.io/f/mknkwzzo", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
    },
  })
  return response.status
}

export default sendMail
