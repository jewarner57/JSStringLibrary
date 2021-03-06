![npm (scoped)](https://img.shields.io/npm/v/@jewarner57/easy-as-string)
![GitHub last commit](https://img.shields.io/github/last-commit/jewarner57/JSStringLibrary)
![GitHub top language](https://img.shields.io/github/languages/top/jewarner57/JSStringLibrary)

## easy-as-string Library
I laugh in the face of complicated string problems. With this library, you can too.
<hr>

### Installation
* You can install this string library [here](https://www.npmjs.com/package/@jewarner57/easy-as-string) via npm

### Usage
* Below you will find the functions included in this library and how to use them.

<hr>

### String.prototype.capitalize()
* Capitalizes the first letter of a string.

``` javascript
"capitalize me".capitalize() -> "Capitalize me"
```

### String.prototype.upper()
* Capitalizes all characters in a string.

``` javascript
"upper me".upper() -> "UPPER ME"
```

### String.prototype.capitalizeWords()
* Capitalizes all words in a string.

``` javascript
"capitalize my words".capitalizeWords() -> "Capitalize My Words"
```

### String.prototype.capitalizeHeadline()
* Capitalizes all words in a string except: "the", "in", "a", "an", "and", "but", "for", "at", "by", "from"
* Always capitalizes the first word of the string.

``` javascript
"a headline from a publication".capitalizeHeadline() -> "A Headline from a Publication"
```

### String.prototype.removeExtraSpaces()
* Removes all types of white space. If two words have more than one white space character between them, a single space is left there.

``` javascript
"\n\n\n\n Destroy \t\t\t\r\rAll      Whitespace \n \t \r ".removeExtraSpaces() -> "Destroy All Whitespace"
```

### String.prototype.kebabCase()
* Lowercases string, removes extra spaces, and replaces spaces with "-"

``` javascript
"mAkE \n mE A   KeBaB  ".kebabCase() -> "make-me-a-kebab"
```

### String.prototype.snakeCase()
* Lowercases string, removes extra spaces, and replaces spaces with "_"

``` javascript
"mAkE \n mE A   sNaKE  ".snakeCase() -> "make_me_a_snake"
```

### String.prototype.camelCase()
* Removes all spaces, capitalizes each word except the first.

``` javascript
"MAKE thiS Camel case".camelCase() -> "makeThisCamelCase"
```

### String.prototype.shift()
* Shifts the first letter of the string to the end of the word.

``` javascript
"Hello World".shift() -> "elloWorldH"
```

### String.prototype.makeHashTag()
* Returns an array of the 3 longest words preceded by a hashtag.

``` javascript
"there was a potato and a beachball and a forest ".makeHashTag() -> ["#potato", "#beachball", "#forest"]
```

### String.prototype.isEmpty()
* Returns true if the given string contains only whitespace.

``` javascript
"\n\n\n   \t\t \r\r".isEmpty() -> true
"Some characters".isEmpty() -> false
```