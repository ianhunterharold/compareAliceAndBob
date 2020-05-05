// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  let bobScore = 0;
  let aliceScore = 0;

  for (let i=0; i <a.length; i++){
    if (a[i] > b[i]){
      aliceScore++
    } else if ( a[i] < b[i]){
      bobScore++;
    }
  }
return [aliceScore,bobScore];
}
const alice= [5,6,7];  
const bob = [3,6,10]; 
compareTriplets(alice,bob);


// compare array at each value 
// keep track of alice score and bobs score 
//return array with alice an bob score