const number = '2211310407'

export function whatsDefaultMessage() {
  const phoneNumber = number
  const text = `Hola, estoy interesado en sus servicios.`
  const encodedText = encodeURIComponent(text)
  return `https://wa.me/${phoneNumber}?text=${encodedText}`
}
