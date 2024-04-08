# Problem Solving

### Introduction
You may face some problem that you don't know how to solve it or step you need to take to make it easier

---

### How to improve your solving skill

#### 1). Devise a plan for solving problems

How do you approach the problem, strategies to break it down

#### 2). Master Common Problem Solving Patterns

A lots of problems can be categories, identify and pull out some algorithm

---

### Problem Solving Steps

#### 1.) Understand Problem

Before you start coding on your problem, just recheck these steps

1. Can you restate the problem in my own words ?,

    not word to word but the word in your mind

2. What are the inputs that go into the problem ?

3. What should the output looks like ?

4. Can the outputs be determined from the inputs ?

    Do you have enough information to solve the problem ?

5. How should I label the important pieces of data that are a part of the problem ?

#### For example, Write a function which takes two numbers and return their sum

1. Create function to return the sum 2 arguments
2. what kind of input they are undefined/null, Integer, Long, Float, string, array, etc.
3. Integer, Float or String ? (It is depends on input type ?)
4. What if someone pass only 1 arg, what do we do ?, do we return null, undefined or sum with 0 ?
5. Maybe we can name function as "add", receive num1 and num2 as params, and return sum as result

---

#### 2.) Explore Concrete Examples

Helps you to understand problem better and provide sanity check for you solution

Apply for any scale like User Stories, Uni Tests

1. Start with Simple Examples
   
   Write three simple examples

2. Progress to More Complex Examples

3. Explore Examples with Empty Inputs

4. Explore Example with Invalid Inputs


#### For example, Write function to takes a string and returns counts of each char

##### Simple Examples

"aaaa" -> {a: 4}
"aabc" -> {a: 2, b:1, c: 1}
"a" -> {a: 1, b: 0, c: 0, ...}

##### Complex Examples
"phone number 12345" -> number included ?
"Hello hi" -> case sensitive ?

##### Empty Inputs

"" -> {} or undefined ?

##### Invalid Inputs

Undefined, Number, Char -> ?

---

#### 3.) Break It Down

1. Explicitly write out the steps you need to take

Forces you to think about the code you'll write before you write it

Helps you layouts steps, highlight the problem you might not be confident about

```` 
charCount(str) {
   // create object to store count
   
   // loop other string on each char
      // if char is number/letter and key in object then increase by 1
      // if char is number/letter not then add it with value of 1
      // if char is something else then do nothing
   
   // return result
}
````

For simple step it might not help much but for complex it might be lifesaver

---

#### 4.) Solve/Simplify

Sometimes you're not confident for all things, you may simplify them

##### Simply

1. Find the core of difficulty
2. Temporarily ignore that difficulty
3. Write a simplified solution
4. incorporate that difficulty back in

If you have sometimes with looping, start with create var for count and return result

Then you can try to break down loop by try to do with first char and then turn them into loop

---

#### 5.) Look Back and Refactor

Look at individual components line by line, talk about the parts you dont like

how it looks how it reads ?

Refactoring Questions

1. Can you check the result ? 

   Obviously, just make sure your code work

2. Can you derive the result differently ?

   Any other way you could think

3. Can you understand it at a glance ?

   How intuitive Does it make sense

4. Can you use the result or method for some other problem ?

   sort of solve some problem and help to solve another problem

5. Can you improve the performance of your solution ?

   may not be able to refactor, just point out still good

6. Can you think of other ways of refactor ?

   Follow company guideline ?, best practice to language ?

7. How have other people solved this problem ?

   Simplest solution, unexpected way to solve it even though it's not efficient

   Sometimes you may find another solution in another languages which their library not be available in your language still you can get the idea of that solution and compare to your solution