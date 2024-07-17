// In Santa's workshop, a mischievous elf has been playing around with the gift production line, adding or removing an unplanned step.
// You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.
// Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string.

function findNaughtyStep(original, modified) {
  const originalSort = original.split("").sort();
  const modifiedSort = modified.split("").sort();
  let i = 0;
  while (i < modifiedSort.length || i < originalSort.length) {
    if (originalSort[i] !== modifiedSort[i]) {
      return modifiedSort.length > originalSort.length
        ? modifiedSort[i]
        : originalSort[i];
    }
    i++;
  }
  return "";
}

const original = "abcd";
const modified = "abcde";
console.log(findNaughtyStep(original, modified)); // 'e'

const original2 = "stepfor";
const modified2 = "stepor";
console.log(findNaughtyStep(original2, modified2)); // 'f'

const original3 = "abcde";
const modified3 = "abcde";
console.log(findNaughtyStep(original3, modified3)); // ''

// Please, keep in mind:

//     There will always be one different step or none.
//     The modification can occur anywhere in the string.
//     The original steps could be empty
