(() => {
  // alias type
  type UserId = string | number;
  let userId: UserId;

  // literal type
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'L';
  shirtSize = 'M';
  shirtSize = 'XL';
  shirtSize = 'M';

  function greeting(myText: UserId, size: Sizes) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    }
  }

  greeting(111, 'M');
  greeting('111', 'XL');
})();
