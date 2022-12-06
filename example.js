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
    console.log(JSONdata[key].age); // <- Logging : 51 : 32
}
