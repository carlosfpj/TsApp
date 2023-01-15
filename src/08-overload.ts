//Carlos => [C,a,r,l,o,s] => string => string[]
//[C,a,r,l,o,s] => Carlos => string[] => string


function parseStr(input: string | string[]): string|string[] {
  if(Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Carlos');
console.log('rtaArray: Carlos ', ' => ', rtaArray);

const rtaString = parseStr(['C','a','r','l','o','s']);
console.log('rtaString: ["C","a","r","l","o","s"] => ' + rtaString);

