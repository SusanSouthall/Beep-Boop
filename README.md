# Beep Boop Translator

#### A program that changes a number into a range of numbers with some text. 3/30/18

#### By **Susan Southall**

## Description

A web application that translates a number from a user into a list of numbers with the words "Beep!" replacing 0's, "Boop!" replacing 1's, and "I'm sorry Dave, I'm afraid I can't do that." replacing a number divisible by 3.  Precedence is given from the last condition to the first.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program replaces a 0  with "Beep!"** | User Input: 0 | Output: "Beep!" |
| **Program replaces a 1 with "Boop!"** | User Input: 1 | Output: "Beep!, Boop!" |
| **Program replaces a number divisible by 3 with "I'm sorry Dave, I can't do that."** | User Input: 3 | Output: "Beep!, Boop!, I'm sorry Dave, I can't do that." |
| **If a number has both a one and a zero, the response "Boop!" will be shown.** | User Input: 10 | Output: "Beep!, Boop!, "I'm sorry Dave, I can't do that., 4, 5, I'm sorry Dave, I can't do that., 7, 8, "I'm sorry Dave, I can't do that., Boop!" |

## Setup/Installation Requirements

1. In your terminal, cd to the folder you want to save the file.
2. Use Git clone to save this project locally.
3. Open index.html in your browser to view this project.

## Known Bugs
* No known bugs at this time.

## Technologies Used
  * HTML
  * CSS
  * Bootstrap
  * JavaScript

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **_Susan Southall_**
