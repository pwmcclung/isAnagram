// write the function isAnagram
var isAnagram = function(test, original) {
  if (test.length !== original.length){
  return false
  }else {
    let t = test.toLowerCase()
    t = t.split('').sort().join('');
   let o = original.toLowerCase()
   o = o.split('').sort().join('')
    return t === o;
    }
  }
  
