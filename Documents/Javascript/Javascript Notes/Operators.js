Javascript runs program top to the bottom.


Comparison operators

Operator operations:
== is equal to
=== Is identical (is qual to and is if the same datatype)
!= Is not equal to
!== Is not identical
> Greater than
>= Greater than or equal to
< less than
<= less than or equal to

Assignment oprators:
= Assign
+= add
-= sub
*= mul
/= div
%= modulus



Switch statement:statement is used to select one of many blocks od code

switch(expression){
	case constant:code;
				  break;
	case constant:code;
				  break;
	default: code;}


While Loop:- while loop loops through a block of code as long as specified condition is true.
do while: will execute the code block once,before checking if the condition is true,then it will repeat the loop as long as the condition is true.a

Array Methods:
lengh of array.

->sort()
->pop(): removes the lastb item of array
->push():add new item to end of the array
->shift():remove the first item of array
->unshift():add new item begining of the array
->reverse()
->isArray():determines whether an object is array
->concat()
->indexOf():search specific items in array,and return its position
->toString():convert array into string
->splice():add new item to an array
he first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
->slice():The method then selects elements from the start argument, and up to (but not including) the end argument.
slice(1, 3).

Array iterations:-

map():
filter()
array reduce()


Synchronous:
Async: setTimeout() function is async.
Callback: calling a function inside anthor function.
resolve dependency problem ihn call back hell is promises function.a
Promises: -

    Pending
   /       \
resolve    Reject
   |         |
   |         |
   ^         ^
 .then     .catch
    \      /
     .finally


-Relationship betweem time and work.
-promise chaining
-Error handling using catch
-the .finally handler...it will run in all case whetherour promises resolve or rejected.

Async Await:-
you need to understand->
*try and catch keyword.
*use await keuword.

try,catch,finally


ES6:
JavaScript provides a function Object.freeze to prevent data mutation.
Object.freeze(variable_name);

Object.keys():-for returning keys value of object


Longest word in toString:
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}