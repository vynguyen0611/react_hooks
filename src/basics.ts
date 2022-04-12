// Generics: It's simply helps you write functions which are type safe yet flexible.
// They work with any type, but then once a certain type is used for that function, execution, that type is locked in and known.

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

stringArray[0].split(''); 

console.log(updatedArray);