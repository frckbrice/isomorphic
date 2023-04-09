//function to check if two string are isomorphic

const isIsomorphic = (str1, str2) => {
  //checking first if the two strings are the same length. if not nothing to search
  if (str1.length !== str2.length) {
    console.log("invalid intry");
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    /* run trough each string and looking for the mapping between characters of both strings. we use index intead of character. this method is to avoid using map() */
    let ind1 = str1.indexOf(str1[i]);
    let ind2 = str2.indexOf(str2[i]);
    if(str2[ind1] !== str2[i] || str1[ind2] !== str1[i]) {
        return false;
    }
  }
  return true;
};

let str1 = "egg";
let str2 = "add";
console.log("checking for  "+str1+"  and  "+ str2);
console.log();
console.log(isIsomorphic(str1,str2));