import quotes from './quotes'

export function getQuote (id) {
  return quotes.quotes[id]
}

export function getAllQuotes () {
  return quotes.quotes
}

export function quoteCount () {
  return quotes.quotes.length
}

export function randomID () {
  return Math.floor(Math.random() * (quoteCount() - 0))
}
