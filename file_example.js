// We delete the unnecessary file from our disk.
async function removeUncessaryTempFile(){
  // We delete all the uploaded unecessary files
  let userTempFiles = JSON.parse(JSON.stringify(req.files));
  // Now we break up the JSON data, and get the "key" of each selected file.
  // This is required to let us delete EVERY temp created files the user sent us.
  for (const key in userTempFiles) {
    if (Object.prototype.hasOwnProperty.call(userTempFiles, key)) {
      fs.unlink(userTempFiles[key].tempFilePath, (err) => {
        if(err) console.log(err);
      });
    }
  }
}
