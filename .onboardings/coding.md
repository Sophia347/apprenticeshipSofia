# Coding

Get coding practice by doing some programming exercises.

## 1. Search

Implement a method/function that returns `true` when a given value is present in a given array, and `false` when it is not.

Examples:

```javascript
search(['a', 'b', 'c'], 'b')
// -> true
```

```javascript
search(['a', 'b', 'c'], 'e')
// -> false
```

## 2. Squeeze a String

Implement a method/function that replaces consecutive repetitions of any character with the character.

The method/function should return a new `String`.

Examples:

```javascript
squeeze("hola")
// -> "hola"
```

```javascript
squeeze("hello")
// -> "helo"
```

```javascript
squeeze("hello wooorld")
// -> "helo world"
```

## 3. Array Flattening

Implement a function that receives an array whose elements may be also other array (an so on), that returns a new array with only one level of depth, and all of the leaf elements in the original array are also present in the new array.

Examples:

```javascript
flatten([1, [2, 3, [4], [ [ [5, 6], 7] ], 8] ])
// -> [1, 2, 3, 4, 5, 6, 7, 8]
```

```javascript
flatten([1])
// -> [1]
```

```javascript
flatten([])
// -> []
```

## 4. Next Biggest Number

Implement a function that takes a positive integer number, and returns the next-biggest number formed by the same digits. If no bigger number can be made, the function returns `-1`.

Examples:

```javascript
next_biggest(12)
// -> 21
```

```javascript
next_biggest(534976)
// -> 536479
```

```javascript
next_biggest(9)
// -> -1
```

```javascript
next_biggest(4321)
// -> -1
```
