'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 */
 
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

module.exports.each = each;

/**
 * identity: Designed to take in a value and return it.
 * 
 * @param {value} any value type
 * @returns {value}
 * 
 */

function identity(value) {
    return value;
}

module.exports.identity = identity;

/** 
 * typeOf: will return the value type of any input value
 *
 * @param {value} any value type: to be tested by a conditional statement
 * @returns {dataType}
 * 
 */

function typeOf(value) {

    let dataType;
    if (value === null) {
        dataType = 'null';
    } else if (value instanceof Date === true) {
        dataType = 'date';
    } else if (typeof value === 'function') {
        dataType = 'function'; 
    } else if (value === undefined) {
        dataType = 'undefined';
    } else if (typeof value === 'string') {
        dataType = 'string';
    } else if (typeof value === 'boolean') {
        dataType = 'boolean';
    } else if (typeof value === 'number') {
        dataType = 'number';
    } else if (Array.isArray(value) === true) {
        dataType = 'array';
    } else if (typeof value == 'object') {
        dataType = 'object';
    }
    return dataType;
}

module.exports.typeOf = typeOf;

/** 
 * first: returns every value in an array up to the given number
 *
 * @param {array} function will test to ensure it is an array
 * @param {number} will return array contents up to this number
 * 
 * @returns {arr} arr meets the criteria of number and contains the contents
 *                of arr up to the given number
 */

function first(array, number) {
    let arr = [];
    if (Array.isArray(array) === false) {
        return [];
    } else if (number === undefined || typeof(number) !== 'number') {
        return array[0];
    } else if (number < 0) {
        return [];
    } else if (number > array.length) {
        for (let i = 0; i < array.length; i++) {
            arr.push(array[i]);
        }
    } else {
      for (let i = 0; i < number; i++) {
        arr.push(array[i]);
      }
    }
    return arr;
}

module.exports.first = first;

/** 
 * last: will return the last 'number' of indices in an array as specified by
 *       the given number
 * 
 * @param {array} function will check to ensure it is an array
 * @param {number} determines how many of the last indices to return
 *
 * @returns {arr} an array containing the last 'number' elements as specified
 *                by 'number'
 */

function last(array, number) {
    let arr = [];
    if (Array.isArray(array) === false) {
        return [];
    } else if (number === undefined || typeof(number) !== 'number') {
        return array[array.length-1];
    } else if (number < 0) {
        return [];
    } else if (number > array.length) {
        for (let i = 0; i < array.length; i++) {
            arr.push(array[i]);
        }
    } else {
        for (let i = array.length-1; i >= array.length-number; i--) {
            arr.unshift(array[i]);
            }
        }
    return arr;
}

module.exports.last = last;

/**
 *
 * indexOf: takes an array and returns the index of the specified value. If the
 *          value isn't in the array, returns -1
 * 
 * @param {array} loop through the array searching for 'value'
 * @param {value} check each index to see if it contains 'value'
 * 
 * @returns {number} index of array or -1: the return value will depend on if
 *                   'value' is found in 'array', and where its index is
 */

function indexOf(array, value) {
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== value) {
        return -1;
    }
  }
}

module.exports.indexOf = indexOf;

/**
 * 
 * contains: returns a boolean value based on whether or not 'value' is 
 * an element of 'array'
 * 
 * @param {array} for loop will sweep the contents of 'array'
 * @param {value} conditional statement comparing 'value' to array[i]
 * 
 * @returns {boolean} using the ternary operator to check if 'bool' equals true 
 * 
 */

function contains(array, value) {
  let bool;
  for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
          bool = true;
      }
  } 
  return bool ? true : false;  
}

module.exports.contains = contains;

