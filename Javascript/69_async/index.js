// async = makes a function return a Promise
// await = makes a function wait for a Promise

async function loadFile() {
  let fileLoaded = true;

  if (fileLoaded) {
    return "File loaded";
  } else {
    throw "File NOT loaded";
  }
}

loadFile()
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
