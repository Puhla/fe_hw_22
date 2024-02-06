const  greeting:string = "Hello, TypeScript!";
console.log(greeting);

function mult(a:number, b:number):number{
    return a * b;
}
console.log(mult(56,6));

function isEven(a:number):boolean{
    return a%2 === 0;
}
const numberToCheck = 10;
const result = isEven(numberToCheck);
console.log(result);

function greetUser(username: string): void {
    console.log(`Привет, ${username}! Добро пожаловать!`)};
    const userName = "Karo";
    greetUser(userName);


    function filterPositiveNumbers(numbers: number[]): number[] {
        return numbers.filter((num) => num > 0);
    }
    
    const inputArray: number[] = [5, -2, 10, -8, 3, 0];
    const resultArray: number[] = filterPositiveNumbers(inputArray);
    
    console.log(resultArray);