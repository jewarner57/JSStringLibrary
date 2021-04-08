
// C1: Uppercase the first char in a string
String.prototype.capitalize = function () {
  if (this.isEmpty()) {
    return String(this)
  }

  return this[0].toUpperCase() + this.slice(1)
}

// C2: Uppercase all characters 
String.prototype.upper = function () {
  return this.toUpperCase()
}

// C3: Capitalize all words in a string
String.prototype.capitalizeWords = function () {
  let words = this.split(' ')

  words.forEach((word, index) => {
    words[index] = word.capitalize()
  })

  return words.join(" ")
}

// C3A: Capitalize all words in a string except certain words
String.prototype.capitalizeHeadline = function () {
  let words = this.split(' ')
  let doNotCapitalize = ["the", "in", "a", "an", "and", "but", "for", "at", "by", "from"]

  words.forEach((word, index) => {
    if (!doNotCapitalize.includes(word) || index == 0) {
      words[index] = word.capitalize()
    }
  })

  return words.join(" ")
}

/* C4A:  Removes all spaces from the beginning and end of a String along with any extra spaces in the middle.
If more than one space appears in the middle of a string it is replaced by a single space. */
String.prototype.removeExtraSpaces = function () {
  let str = this.trim()

  // I didn't think the whitespace (\s) flag would catch
  // everything, but it did and that made things much easier.

  // \s (whitespace chars), + (atleast one), /gm (global multiline)
  str = str.split(/\s+/gm)

  return str.join(' ')
}


// C5: lowercase string, remove extra spaces, replace spaces with -
String.prototype.kebabCase = function () {
  let str = this.toLowerCase().removeExtraSpaces().split(" ").join("-")

  return str
}

// C6: lowercase string, remove extra spaces, replace spaces with _
String.prototype.snakeCase = function () {
  let str = this.toLowerCase().removeExtraSpaces().split(" ").join("_")

  return str
}

// C7: converts the string to camel case
String.prototype.camelCase = function () {
  let words = this.removeExtraSpaces().split(' ')

  words.forEach((word, index) => {
    if (index === 0) {
      words[index] = word.toLowerCase()
    }
    else {
      words[index] = word.toLowerCase().capitalize()
    }
  })

  return words.join("")
}

// C8: shift the first letter of the string to the end of the word
String.prototype.shift = function () {
  if (this.isEmpty()) {
    return String(this)
  }

  let str = this
  return str.slice(1) + str[0]
}

// C9: choose the 3 longest words and put a hashtag before them
String.prototype.makeHashTag = function () {
  if (this.isEmpty()) {
    return String(this)
  }

  let str = this.removeExtraSpaces()
  str = str.split(" ")
  let resultLength = str.length < 3 ? str.length : 3;
  let resultArr = []

  str = str.sort((a, b) => {
    if (a.length > b.length) {
      return -1
    }
    else {
      return 0
    }
  })

  for (let i = 0; i < resultLength; i++) {
    resultArr.push(`#${str[i]}`)
  }

  return resultArr
}

// C10: Returns true if the given string is empty or contains only whitespace.
String.prototype.isEmpty = function () {
  let str = this
  // \S (non whitespace chars), + (atleast one), /gm (global multiline)
  return !new RegExp(/\S+/gm).test(str)
}