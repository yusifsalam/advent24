import type { InputType } from "../utils/readInput.ts";

const main = async (input: InputType = "input") => {
  const file = `./${input.toString()}.txt`;
  const text = await Deno.readTextFile(file);

  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
  const matches = text.matchAll(regex);
  let sum = 0;
  for (const match of matches) {
    const x = parseInt(match[1]);
    const y = parseInt(match[2]);
    sum += x * y;
  }
  console.log("sum is ", sum);
  return sum;
};

// main("example");
main("input");
