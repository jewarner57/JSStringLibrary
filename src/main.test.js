const as = require('./index.js')

test('Capitalize', () => {
  expect("".capitalize()).toBe("")
  expect("a sentence".capitalize()).toBe("A sentence")
})

test('Upper', () => {
  expect("".upper()).toBe("")
  expect("bacon".upper()).toBe("BACON")
})

test('Capitalize Words', () => {
  expect("".capitalizeWords()).toBe("")
  expect("these are some words".capitalizeWords()).toBe("These Are Some Words")
})

test('Capitalize Headline', () => {
  expect("".capitalizeHeadline()).toBe("")
  expect("a headline for a magazine".capitalizeHeadline()).toBe("A Headline for a Magazine")
})

test('Remove Extra Spaces', () => {
  expect("".removeExtraSpaces()).toBe("")
  expect("\n \t \n\t \r\n\t".removeExtraSpaces()).toBe("")
  expect("a  word\n for the  de \t\tspacer".removeExtraSpaces()).toBe("a word for the de spacer")
})

test('Kebab Case', () => {
  expect("".kebabCase()).toBe("")
  expect("kebab me".kebabCase()).toBe("kebab-me")
  expect("put these words on a stick".kebabCase()).toBe("put-these-words-on-a-stick")
})