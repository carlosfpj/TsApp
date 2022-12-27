let anyVar: any;
anyVar = true;
anyVar = null;
anyVar = 1;
anyVar = {};

let isNew: boolean = anyVar;

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = {};

unknownVar.doSomething();

if(typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

if(typeof unknownVar === 'boolean') {
  let isNewV2: boolean = unknownVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}


let x: unknown = 10;
let v1: number = x;
let v2: object = x;
let v3: string = x;
