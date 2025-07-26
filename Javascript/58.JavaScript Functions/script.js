function n(name){
          console.log("Hey " + name + " Good morning!")                  
          console.log("Hey " + name + " Nice too meet you!")                  
          console.log("Hey " + name + " how are you!")                  
          console.log("Hey " + name + " bye!")                  
}
n("Rushi")
n("RX")

function sum(a, b, c = 3) {
    // console.log(a + b)
//     console.log(a, b, c)
    return a + b
}
result = sum(5,6)
console.log("The sum of this numbers is: ", result)