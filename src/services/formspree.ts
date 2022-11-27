import { ContactMessage } from "../types/contactMessage"

async function sendMail(message: ContactMessage): Promise<boolean> {
  const response = await fetch("https://formspree.io/f/mknkwzzo", {
    method: "POST",
    body: JSON.stringify(message),
    headers: {
      Accept: "application/json",
    },
  })
  return response.ok
}

export default sendMail
