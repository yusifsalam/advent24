import { type InputType, readInput } from "../utils/readInput.ts";

const main = async (input: InputType = "input") => {
  const { left, right } = await readInput(input);
  const a = left.toSorted();
  const b = right.toSorted();
  const result = a.reduce((prev, curr, i) => {
    return prev + Math.abs(b[i] - curr);
  }, 0);
  console.log("result", result);
  return result;
};

main("example");
main("input");
