const numbers: ReadonlyArray<number> = [1,2,3,4];

//now i can't mutate the array
numbers.push(1);
numbers.pop();
numbers.unshift(1);


//but i can...
numbers.filter(()=> 1);
numbers.reduce(()=> 0);
