const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");

async function getDiff() {
  const options = {
    output: {
      errorColor: {
        red: 255,
        green: 0,
        blue: 0,
        brightness: 50,
      },
      errorType: "movement",
      //   transparency: 0.3,
      largeImageThreshold: 1200,
      useCrossOrigin: false,
      outputDiff: true,
    },
    scaleToSameSize: true,
    // ignore: "antialiasing",
  };

  const data = await compareImages(
    await fs.readFile("./assets/reference.png"),
    await fs.readFile("./assets/test.png"),
    options
  );

  await fs.writeFile("./output.png", data.getBuffer());
}

getDiff();
