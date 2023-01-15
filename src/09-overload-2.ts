//Carlos => [C,a,r,l,o,s] => string => string[]
//[C,a,r,l,o,s] => Carlos => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;


// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split(''); // string[]
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if(typeof(input) === 'string') {
    return input.split(''); // string[]
  } else if (typeof (input) === 'number') {
    return true; // boolean
  }
}

const rtaArray = parseStr('Carlos');
rtaArray.reverse();
// if(Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log('rtaArray: Carlos ', ' => ', rtaArray);


const rtaString = parseStr(['C', 'a', 'r', 'l', 'o', 's']);
rtaString.toLowerCase();
// if(typeof rtaString === 'string') {
//   rtaString.toLowerCase();
// }
console.log('rtaString: ["C","a","r","l","o","s"] => ' + rtaString);

const rtaBoolean = parseStr(9);
console.log(rtaBoolean);

