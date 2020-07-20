const { writeFile } = require("fs").promises;
const path = require("path");

async function main() {
  const fileName = `icon-${new Date().getTime()}`;
  const dummyIcon = "<svg></svg>";
  await writeFile(
    path.resolve(__dirname, `../packages/package-B/src/${fileName}.svg`),
    dummyIcon
  );
}

main();
