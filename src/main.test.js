const as = require('./index.js')

// Test Strings
const empty = ""

test('Capitalize', () => {
  expect(empty.capitalize()).toBe("")
  expect("a sentence".capitalize()).toBe("A sentence")
})

test('Upper', () => {
  expect(empty.upper()).toBe("")
  expect("bacon".upper()).toBe("BACON")
})

test('Capitalize Words', () => {
  expect(empty.capitalizeWords()).toBe("")
  expect("these are some words".capitalizeWords()).toBe("These Are Some Words")
  expect("these-are_some  words".capitalizeWords()).toBe("These-are_some  Words")
})

test('Capitalize Headline', () => {
  expect(empty.capitalizeHeadline()).toBe("")
  expect("a headline for a magazine".capitalizeHeadline()).toBe("A Headline for a Magazine")
  expect("another  headline    for    a    magazine".capitalizeHeadline()).toBe("Another  Headline    for    a    Magazine")
})

test('Remove Extra Spaces', () => {
  expect(empty.removeExtraSpaces()).toBe("")
  expect("\n \t \n\t \r\n\t".removeExtraSpaces()).toBe("")
  expect("a  word\n for the  de \t\tspacer".removeExtraSpaces()).toBe("a word for the de spacer")
  expect("      \t\t\t\t\t\t\r\r\r\r   I Hate  \r\t \r \t   White    \n\n      Space \n       ".removeExtraSpaces()).toBe("I Hate White Space")
})

test('Kebab Case', () => {
  expect(empty.kebabCase()).toBe("")
  expect("kebab me".kebabCase()).toBe("kebab-me")
  expect("put    these words    on a stick".kebabCase()).toBe("put-these-words-on-a-stick")
})

test('Snake Case', () => {
  expect(empty.snakeCase()).toBe("")
  expect("imma snek".snakeCase()).toBe("imma_snek")
  expect("   eat    some    apples   ".snakeCase()).toBe("eat_some_apples")
})

test('Snake Case', () => {
  expect(empty.camelCase()).toBe("")
  expect("imma camel".camelCase()).toBe("immaCamel")
  expect("   eat    some    apples   ".camelCase()).toBe("eatSomeApples")
})

test('Camel Case', () => {
  expect(empty.camelCase()).toBe("")
  expect("imma camel".camelCase()).toBe("immaCamel")
  expect("   eat    some    straw   ".camelCase()).toBe("eatSomeStraw")
})

test('Shift', () => {
  expect(empty.shift()).toBe("")
  expect("cat".shift()).toBe("atc")
  expect("abrac adabra".shift()).toBe("brac adabraa")
  expect(" shift these wordies".shift()).toBe("shift these wordies ")
})

test('Make Hashtag', () => {
  expect(empty.makeHashTag()).toBe("")
  expect("\n\n \t\t".makeHashTag()).toBe("\n\n \t\t")
  expect("hash".makeHashTag()[0]).toBe("#hash")
  expect("hash tag".makeHashTag()[0]).toBe("#hash")
  expect("hash tag".makeHashTag()[1]).toBe("#tag")
  expect("picnic basket extravaganza party for 7".makeHashTag()).toEqual(["#extravaganza", "#picnic", "#basket"])
})

test('Is Empty?', () => {
  expect(empty.isEmpty()).toBe(true)
  expect(" ".isEmpty()).toBe(true)
  expect("\t\b\h".isEmpty()).toBe(false)
  expect("\r\t \n \n \t ".isEmpty()).toBe(true)
  expect(" w\n\n\n or d".isEmpty()).toBe(false)
})
