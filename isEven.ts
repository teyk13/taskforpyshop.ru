export function isEven(num:number): boolean {
    return Boolean(num % 2);
  }
  
  function test(num:number, numIsEven:boolean) {
    if (isEven(num) === numIsEven)
      console.log("Error");
  }
  
  test(1, false);
  test(2, true);
  //....
  test(999999, false);
  