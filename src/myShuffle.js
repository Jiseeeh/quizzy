// will fail if there are 5 or more elements in the array.
// because it will take a long time to rewind every time the element is existing.
export default function shuffle(arr) {
  let indices = [];
  let arrLength = arr.length;

  // store indices
  for (let i in arr) indices.push(i);

  let randomized = [];

  // randomize
  for (let i = 0; i < arrLength; i++) {
    //get random value from array
    const randomValue = arr[Math.floor(Math.random() * indices.length)];

    //remove that value from array
    arr.filter((e) => e != randomValue);

    // push that value into randomized if not existing
    // else rewind the loop
    if (!randomized.includes(randomValue)) randomized.push(randomValue);
    else i--;
  }

  return randomized;
}
