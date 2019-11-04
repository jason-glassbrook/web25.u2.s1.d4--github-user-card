"use strict";
/***********************************************************
  HTML Elements
***********************************************************/

/*--------------------------------------
  newElem
----------------------------------------
  - shorthand for `document.createElement`
--------------------------------------*/
const newElem = (tag) => (document.createElement (tag));

/*--------------------------------------
  splitClassStrings
----------------------------------------
  1. takes a list of class strings
  2. splits at whitespace
  3. flattens
--------------------------------------*/
const splitClassStrings = (classStrings) => {
  return (classStrings.map ((el) => (el.split (/\s+/))).flat ());
};

/*--------------------------------------
  Element.hasClass
----------------------------------------
  - checks if an Element has multiple classes
  - accepts whitespace-separated class strings
--------------------------------------*/
Element.prototype.hasClass = function (...args) {
  const r = splitClassStrings(args)
    .map (
      (el) => (this.classList.contains (el))
    )
    .every (
      (el) => (el)
    );
  /// return ///
  return (r);
};

/*--------------------------------------
  Element.upClass
----------------------------------------
  - adds multiple classes to an Element
  - accepts whitespace-separated class strings
--------------------------------------*/
Element.prototype.upClass = function (...args) {
  /// modify ///
  this.classList.add (...splitClassStrings(args));
  /// return new class list ///
  return (this.classList);
};

/*--------------------------------------
  Element.upClass
----------------------------------------
  - removes multiple classes from an Element
  - accepts whitespace-separated class strings
--------------------------------------*/
Element.prototype.dnClass = function (...args) {
  /// modify ///
  this.classList.remove (...splitClassStrings(args));
  /// return new class list ///
  return (this.classList);
};

/*--------------------------------------
  Element.toggleClass
----------------------------------------
  - toggles multiple classes
  - accepts whitespace-separated class strings
--------------------------------------*/
Element.prototype.toggleClass = function (...args) {
  /// modify ///
  this.classList.toggle (...splitClassStrings(args));
  /// return new class list ///
  return (this.classList);
};

/*--------------------------------------
  Element.swapClass
----------------------------------------
  - swaps an new set of classes for an old set of classes
  - accepts whitespace-separated class strings
--------------------------------------*/
Element.prototype.swapClass = function (oldClass , newClass) {
  /// modify ///
  /* this.classList.replace (oldClass , newClass); */
  this.dnClass (oldClass);
  this.upClass (newClass);
  /// return new class list ///
  return (this.classList);
};
