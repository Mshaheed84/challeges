function filterArray(arr){
    var rv = []
    arr.forEach(element => {
       if(typeof element === "number")
            rv.push(element)
    });
    var nDup = [... new Set(rv)]
    console.log(nDup)
}
filterArray([1, 2, "a", "b",4, 7,1,1,7,8,9])// ➞ [1, 2]

filterArray([1, "a", "b", 0, 15]) //➞ [1, 0, 15]

filterArray([1, 2, "aasf", "1", "123", 123])// ➞ [1, 2, 123]