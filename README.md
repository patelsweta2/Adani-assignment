# questions 1. Write a JavaScript function which will take a single argument awards and return prizes in the below structure. 
  Time complexity of the solution should be O(n).

## solutions discussion:-  
- First I convert awards array into map and I uniquely identified a key combined with name, category and year. This allow for efficient lookups.
- Now I have the array which I transformed into new Array which prize contain category and year with list of winners.

# questions 2. Given a string s, find the longest substring where no character repeats more than twice and return both the substring and its length.

## Solutions discussion:- 
- I Have been Slide Window technique, I have used two pointers left and right to maintain a window over the string.
- An array (charCount) tracks how many times each character appears in the current window using ASCII values.
- If any character's count exceeds 2, the left pointer moves forward to shrink the window and reduce the character count.
- and whenever the maximum window length exceeds with max length 2, the starting position and length of the substring will be updated.
- and then function will return the solution with maximum string and maximum length

