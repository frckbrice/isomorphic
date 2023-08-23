//* bind html dom elements
const show = document.querySelector('.display')
const check = document.querySelector('.btn')
check.addEventListener('click', display)
check.addEventListener('keypress', (e) => {
  e.preventDefault()
  if (e.keyCode === 13) {
    display()
  }
})

//* function to display result of checking prcess
function display () {
  const str1 = document.querySelector('#str1').value.trim()
  const str2 = document.querySelector('#str2').value.trim()

  // basic validation
  if (str1.length === 0 || str2.length === 0) {
    window.alert('NO EMPTY STRING ALLOWED')
    return false
  }
  show.innerHTML = isIsomorphic(str1, str2)
}

//* function to check if two string are isomorphic

const isIsomorphic = (str1, str2) => {
  // checking first if the two strings are the same length. if not nothing to search
  if (str1.length !== str2.length) {
    return 'Strings are not the same length. Please inputs Strings with the same length'
  }
  for (let i = 0; i < str1.length; i++) {
    /* run trough each string looking for the mapping between characters of both strings. we use index intead of character to avoid using map() method */
    const ind1 = str1.indexOf(str1[i])
    const ind2 = str2.indexOf(str2[i])
    if (str2[ind1] !== str2[i] || str1[ind2] !== str1[i]) {
      return `<strong>FALSE!</strong><br/> <span>&nbsp;&nbsp;Thes Strings ${str1} and ${str2} are  not Isomorphic Strings<span>`
    }
  }
  return `<div class= 'to-show'><strong>TRUE!</strong><br/> <span>Thes Strings ${str1} and ${str2} are Isomorphic Strings<span></div>`
}

// let str1 = "egg";
// let str2 = "add";
// console.log("checking for  " + str1 + "  and  " + str2);
// console.log();
// console.log(isIsomorphic(str1, str2));
