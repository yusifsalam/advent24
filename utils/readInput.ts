export type InputType = "input" | "example";

export const readInput = async (fileType: InputType) => {
  const file = `./${fileType.toString()}.txt`;
  const text = await Deno.readTextFile(file);
  const lines = text.split("\n").filter((l) => l !== "");
  const a: number[] = [];
  const b: number[] = [];
  lines.forEach((l) => {
    const parts = l.split("   ");
    a.push(parseInt(parts[0]));
    b.push(parseInt(parts[1]));
  });
  return { left: a, right: b };
};
