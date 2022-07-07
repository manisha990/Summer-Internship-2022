# Programming Basics

Date: 2022, July 7

## Class and Object

### Class is a template to create other objects

### Object is a runtime instance of class

## Function

### Function is a block of code that can be reusable

## Scope

### There are two types of scope

<ul>
    <li>Global Scope</li>
    <li>Local Scope</li>
</ul>

## Conditionals

In programming there are conditional statements that we use when we have to evaluate conditions in the programming.
<br />

In Javascript there , when we deal with conditions we deal with <strong > Truthy </strong> or <strong> Falsy </strong> values. 

Falsy values are the values like Empty String , 0 , null, undefined, NaN (Not a number). 
All the values other than these values are termed as truthy values. 

for example : 
```
if(truthy value){
    This statement would execute
}
if(falsy value){
    Else block would execute.
}
```
Let's see some examples now,
```

const person1 = {
    name: 'John',
    age: 53
}
personAge = person1 && person1.age
console.log(personAge);

```
This statement would console the age as the person1 is a truthy value
But if we would insert the false condition like this

```
const person1 = {
    name: 'John',
    age: 53
}
personAge = false && person1 && person1.age
console.log(personAge);

```
It would return false. as false is a falsy value also if we would take any other falsy value it would result into same i.e.false.

Now if in place of <strong> && </strong> operator if we use the <storng> || </strong> operator. in case 1 we would get the person object returned as in case of || operator the first truthy value is returned and in case of && operator the last truthy value is returned.

## Equality Operator in javascript

<strong>Javascript comprises of 2 types of equality operator</strong>
<ul>
<li> == </li>
<li> === </li>
</ul>

The <strong> == </strong> operator actually looks for the value of variable and does not do type checking.
For eg:
```
console.log(1 == '1')
```
returns a true value. But, in case of array
```
console.log([1] == [1])
```
returns false.

After this, The <strong> === </strong> operator is a strict equality operator which performs the strict reading of variable and will return true only if both the enitity point towards a specific reference in the memory.
```
    const a = 10;
    const b = 10;
    const c = '10';
    const d = a;
```
Now, 
```
console.log(a === b);
// Returns false
```
```
console.log(a == b);
// Returns true
```
```
console.log(c === b);
// Returns false
```
```
console.log(a === a);
// Returns true
```
and so on.....

