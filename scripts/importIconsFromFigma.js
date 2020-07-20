const { writeFile } = require("fs").promises;
const path = require("path");

async function main() {
  if (!process.env.FIGMA_ACCESS_TOKEN) throw new Error("No Figma access token");

  const fileName = `icon-${new Date().getTime()}`;
  const dummyIcon = "<svg></svg>";
  await writeFile(
    path.resolve(__dirname, `../packages/package-B/src/${fileName}.svg`),
    dummyIcon
  );
}

main();
