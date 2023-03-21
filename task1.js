function longestWord(sentence) {
  const words = sentence.toLowerCase().match(/[a-z]+/g); // Extracting all the words in the sentence into an array
  let longest = '';
    words.forEach(word => {
        if (word.length > longest.length) { // If the current word is longer than the current longest word
        longest = word;
        } else if (word.length === longest.length) { // If the current word has the same length as the current longest word
          if (countVowels(word) > countVowels(longest)) { // Choose the word with the highest number of vowels
            longest = word;
          }
        }
    })
  return longest;
}

function countVowels(word) { // function to count vowels in a word
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
