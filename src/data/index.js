import quotes from './quotes'

export function getQuote (id) {
  return quotes.quotes[id]
}

export function getAllQuotes () {
  return quotes.quotes
}
