(()=>{
  let prices = [1,2,2,1,1,212, 'hola', true];
  // prices.push('asas');
  // prices.push(true);
  // prices.push({});
  prices.push(121212);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2];
  numbers.map(item => item * 2);
})();
