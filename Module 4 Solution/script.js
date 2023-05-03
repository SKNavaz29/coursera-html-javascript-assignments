(function(){
  
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (let name of names) {
  var firstLetter = name.toLowerCase();
  if (firstLetter.charAt(0)=="j") {
    
   
    byeSpeaker.speak(name);
  } 
  
  else {
    helloSpeaker.speak(name);
  }
}
})();


