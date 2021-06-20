const fs = require('fs')

fs.readFile('de.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  doom=data.split("\n")
  

  for(var i=0 ; i < doom.length ; i++){
      //doom[i]=parseInt(doom[i]);
      console.log(doom[i])
  }
  //console.log(parseInt(doom[0] + doom[1]))
  
})