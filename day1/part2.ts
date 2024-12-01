import { type InputType, readInput } from "../utils/readInput.ts";

const main = async (input: InputType = "input") => {
  const { left, right } = await readInput(input);
  const a = left.toSorted();
  const b = right.toSorted();
  const result = a.reduce((prev, curr) => {
    const occurences = b.filter((n) => n === curr).length;
    return prev + curr * occurences;
  }, 0);
  console.log("result", result);
  return result;
};

main("example");
main("input");
