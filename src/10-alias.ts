(()=>{
  type UserID = string | number;
  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 's';

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
   }
   greeting(1111, 'S');
   greeting('1111', 'XL');

})();
