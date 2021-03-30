
// C1: Uppercase the first char in a string
String.prototype.capitalize = function () {
  return this[0].toUpperCase() + this.slice(1)
}

// C2: Uppercase all characters 
String.prototype.upper = function () {
  return this.toUpperCase()
}

// C3: Capitalize all words in a string
String.prototype.capitalizeWords = function () {
  let words = this.split(' ')
  let upperCasedString = ""

  words.forEach((word, index) => {
    upperCasedString += word[0].toUpperCase() + word.slice(1, word.length) + " "
  })

  return upperCasedString
}

// C3A: Capitalize all words in a string except certain words
String.prototype.capitalizeHeadline = function () {
  let words = this.split(' ')
  let doNotCapitalize = ["the", "in", "a", "an", "and", "but", "for", "at", "by", "from"]
  let upperCasedString = ""

  words.forEach((word, index) => {
    if (!doNotCapitalize.includes(word) || index == 0) {
      upperCasedString += word[0].toUpperCase() + word.slice(1, word.length) + " "
    }
    else {
      upperCasedString += word + " "
    }
  })

  return upperCasedString
}

/* C4:  Removes all spaces from the beginning and end of a String along with any extra spaces in the middle.
If more than one space appears in the middle of a string it is replaced by a single space. */
String.prototype.removeExtraSpaces = function () {
  let str = this.trim()
  let spaces = ["", "\n", "\t", "\r"]

  str = str.split(" ")
  str = str.filter(word => !spaces.includes(word))

  // str.replace((/  |\r\n|\n|\r/gm), ""); use regex cuz it gud

  return str.join(' ')
}

console.log("         I Hate  Grouped    \n \n      Spaces \n       ".removeExtraSpaces())