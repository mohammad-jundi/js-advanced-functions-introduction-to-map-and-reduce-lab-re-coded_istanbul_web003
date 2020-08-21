function mapToNegativize(sourceArray){
    let newArr = []
    for (let x of sourceArray) {
        newArr.push(x *-1)
    }
    return newArr
}
function mapToNoChange(dune){
    return dune
}

function mapToDouble(sourceArray){
    let doublArr = []
    for (let x of sourceArray) {
        doublArr.push(x * 2)
    }
    return doublArr
}

function mapToSquare(sourceArray){
    let squarArr = []
    for (let x of sourceArray){
        squarArr.push( x * x)
    }
    return squarArr
}

function reduceToTotal(sourceArray, startFrom=0){
    let result = startFrom;
    for(let x of sourceArray){
        result += x;
    }
    return result
}

function reduceToAllTrue(sourceArray){
    let result = false;
    for (let x of sourceArray){
        if(x){
            result = true;
        } else {
            return false
        }
    }
    return result
}

function reduceToAnyTrue(sourceArray){
    let result = true;
    for (let x of sourceArray){
        if(!x){
            result = false
        } else{
            return true;
        }
    }
    return result
}
