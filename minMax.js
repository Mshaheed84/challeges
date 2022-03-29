function minMax(arr){
    /* Set first answers */
    var min = arr[0]
    var max = arr[0]
    console.log(min, max)
    /* Check answers  */
    for(let i = 0; i < arr.length; i++){
        
       if(max < arr[i]){
           max = arr[i] /* Update answer if needed  */ }
       if(min > arr[i]){
           min = arr[i]/* Update answer if needed */ }}
    console.log(min, max)/* Return final answer */}
minMax([5, 2, 3, 4, 1,4,3,2,4,5]) /* [1, 5] */
minMax([2334454, 5]) /* [5, 2334454] */
minMax([1]) /* [1, 1] */