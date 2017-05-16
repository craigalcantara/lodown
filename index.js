'use strict';


/* Identity takes one argument and returns it. 
* The function takes one parameter, value, and returns it.
* An input of "caput" would return "caput"
*/

function identity(value){
    return value;
}
module.exports.identity = identity;




function typeOf(value){
    if (value === null){
        return "null";
    }
    if (Array.isArray(value)=== true){
        return "array";
    }
    return typeof value;
}

module.exports.typeOf = typeOf;

function first(array, number){
    if (Array.isArray(array) === true){
        if(typeof number === "number") {
            if (array.length < number){
                return array;
            } else if (array.length > number && number > 0){
                return array.slice(0, number);
            } else if (number < 0){
                return [];
            } 
        }    
        
        else if (typeof number !== "number")
            return array[0];
        } else if (Array.isArray(array) === false){
            return [];
    }

}

module.exports.first = first;

function last(array, number){
     console.log(array, number);
    if (Array.isArray(array) === true){
        if(typeof number === "number") {
            if (array.length < number){
                return array;
            } else if (array.length > number && number > 0){
                return array.slice(array.length-number);
            } else if (number < 0){
                return [];
            } 
        }    
        
        else if (typeof number !== "number")
            return array[array.length-1];
        } else if (Array.isArray(array) === false){
            return [];
    }

}

module.exports.last = last;


function each(collection, func){
    if (Array.isArray(collection) === true){
        for(var i = 0; i < collection.length; i++){
            func(collection[i], i, collection)
        }
    } else 
     for (var key in collection){
         func(collection[key], key, collection)
     }
}

module.exports.each = each;

function indexOf(array, value){
    for (var i = 0; i < array.length; i++){
        if(array[i] === value){
            return i
        } 
    } 
    return -1
}

module.exports.indexOf = indexOf;


function filter(array, func){
    var newArray = [];
    each(array, function(e, i, a){
        if (func(e, i, a) === true){
            newArray.push(e)
        }
    })
    return newArray;
}

module.exports.filter = filter;


function reject(array, func){
   
   return filter(array, function(e, i, a){
            if (func(e, i, a) === true){
                return false;
            } 
            return true;
   })
    
    
}

module.exports.reject = reject;


function partition(array, action) => [filter(array, action), reject(array, action)];


module.exports.partition = partition;

function unique(array){
    var newArray = [];
   
    each(array, function(e){
       if (indexOf(newArray, e) === -1){
           newArray.push(e);
       }
    })
    
    return newArray;
}



function map(collection, action){
    
    var newArray = [];
    
    each(collection, function(e, i, a){
        newArray.push(action(e, i, a));
    })
    
    return newArray;
    
}

module.exports.map = map;


function pluck(array, property){
    var newArray = [];
    
   each(array, function(e, i, a){
       (newArray.push(e[property]))
   })
   return newArray;
}

module.exports.pluck = pluck;

function contains(array, value){
    
   return _.indexOf(array, value) > -1 ? true : false;
   
}

module.exports.contains = contains;
   



function every (collection, action){
  var indicate = true  
    each(collection, function(e, i, c){
        if (action !== undefined){
            if (action(e, i , c) === false){
                indicate = false;
            } 
        } else if (action === undefined){
            if (e === false){
                indicate = false
            } 
        }
    }) 
    
    return indicate
}


module.exports.every = every;

function some(collection, action){
    
    var indicate = false  
    each(collection, function(e, i, c){
        if (action !== undefined){
            if (action(e, i , c) === true){
                indicate = true;
            } 
        } else if (action === undefined){
            if (e === true){
                indicate = true
            } 
        }
    }) 
    
    return indicate
    
}

module.exports.some = some;

function reduce(array, action, seed){

var pr;


    if(typeof seed !== 'undefined'){
        pr = seed;
    } else {
        pr = array[0];
    }
   each(array, function(pr, e, i){
          pr = action(pr, e, i)
        });
        
return pr

}

module.exports.reduce = reduce;

// Still need to add/fix reduce and extend before publishing.

