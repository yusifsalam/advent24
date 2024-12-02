import type { InputType } from "../utils/readInput.ts";

const main = async (input: InputType = "input") => {
  const file = `./${input.toString()}.txt`;
  const text = await Deno.readTextFile(file);
  const lines = text.split("\n").filter((l) => l !== "");
  const result = lines.filter(isSafe).length;
  console.log("result", result);
  return result;
};

const isSafe = (a: string): boolean => {
  const nums = a.split(" ").map((s) => parseInt(s));
  const isIncreasing = nums[1] > nums[0];

  for (let i = 0; i < nums.length - 1; i++) {
    const diff = nums[i + 1] - nums[i];

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }

    // Check if direction is consistent
    if (isIncreasing && diff <= 0) {
      return false;
    }
    if (!isIncreasing && diff >= 0) {
      return false;
    }
  }

  return true;
};

// main("example");
main("input");
