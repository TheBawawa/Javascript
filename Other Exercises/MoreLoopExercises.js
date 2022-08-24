//Exercise 1
for (var i=1; i<=10; i++) {
  if (i==1) {
    console.log("Golden Medal")
  }
  else if (i==2) {
    console.log("Silver Medal")
  }
  else if (i==3) {
    console.log("Bronze Medal")
  }
  else {
    console.log(i)
  }
}

//Exercise 2
for (var i=1; i<=10; i++) {
  switch(i) {
    case 1:
      console.log("Golden Medal")
      break;
    case 2:
      console.log("Silver Medal")
      break;
    case 3:
      console.log("Bronze Medal")
      break;
    default:
      console.log(i)
  }
}
