let JSONdata = {
    John: {
        username: "John Doe",
        age: "51"
    },
    Steve: {
        username: "Steve Elephant",
        age: "32"
    }
}

for (const key in JSONdata) {
  if (Object.prototype.hasOwnProperty.call(JSONdata, key)) {
    console.log(key); // <- Logging : John : Steve
  }
}
