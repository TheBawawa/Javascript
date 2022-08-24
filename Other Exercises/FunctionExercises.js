//Task 1
function letterFinder(word, match) {
  //Task 2
  for (var i=0; i< word.length; i++) {
    //Task 3
    if (word[i] == match) {
      //Task 4
      console.log("Found the", match, "at", i)
    }
    //Task 5
    else {
      console.log("---No match found at", i)
    }
  }
}

//Task 6
letterFinder("test", "t")