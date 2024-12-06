// Question:
// Given a string s, find the longest substring where no character repeats more
// than twice and return both the substring and its length.

// s = "aaabbccddeeff"
// Output: { maxSubstring: "aabbccddeeff", maxLength: 12 }

// solutions

let s = "aaabbccddeeff";

function longestSubstring(s) {
  let left = 0,
    maxLength = 0,
    maxStart = 0;
  const charCount = Array(256).fill(0);

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    charCount[char.charCodeAt(0)]++;

    while (charCount[char.charCodeAt(0)] > 2) {
      const leftChar = s[left];
      charCount[leftChar.charCodeAt(0)]--;
      left++;
    }

    const currentLength = right - left + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
      maxStart = left;
    }
  }

  const maxSubstring = s.slice(maxStart, maxStart + maxLength);
  return { maxSubstring, maxLength };
}

console.log(longestSubstring(s));
