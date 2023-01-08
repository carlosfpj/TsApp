const withoutEnd = () => {
  while (true) {
    console.log('nunca parar de aprender');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if(typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('no match');
}

console.log(example('hola'));
console.log(example([1,2,3,4]));
console.log(example(1212));
console.log(example('hola despues del fail'));
