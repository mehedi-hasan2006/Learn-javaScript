// array

let mark= [89,56,90,90];


// looping over array
// itaretor ==> string, object, array

let name = ["baizid", "atik", "sayed"];

// for print all array elements
for(let i=0; i<name.length; i++){

    console.log(name[i]);
}

//for of 
district =['kurigram', 'rangpur', 'lalmonirhat', 'gaibandha'];

for( let dis of district){
    console.log(dis.toUpperCase());
}


// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60] 
// Find the average marks of the entire class. 

// using for of loop
let student = [85, 97, 44, 37, 76, 60, 90];
let sum= 0;
for (let mark of student){
    sum += mark;
}

let avr = sum / student.length;
console.log(avr);


// using for loop
let marks = [85, 97, 44, 37, 76, 60];
let sume = 0;
for (let i = 0; i<marks.length; i++) {
    sume += marks[i];
}

let avg = sume / marks.length;
console.log('avg marks of the class =', avg);


// convert arrray into string

let items =["alu", "begun", "potol", 89, 55];
let converted = items.toString();
console.log(converted);



// concat() method ===> join multiple arrays
let rangpur1 = ["kurigram" , "rangpur", "nilphamari"];
let rangpur2 = ["gaibandha" , "thakurgaon", "panchagor"];
let rangpur3 = ["dinajpur" , "lalmonirhat", ];

let rangpurDivision = rangpur1.concat(rangpur2, rangpur3);
console.log(rangpurDivision);


//unshift() method ==> push = add element in first
let rajshahi = ["bogura", "natore", "pabna"];
rajshahi.unshift("naogaon");
console.log(rajshahi);

//shift() method ==> pop = delete element in first
let sylhet = ["sunamganj", "sylhet", "moulovibazar", "habiganj"];
let deleted = sylhet.shift();
console.log( sylhet);


//slice() ==> to print range value in array by using index
let dhaka = ["gazipur", "dhaka", "Tangail", "razbari", "kishoreganj"];
console.log(dhaka.slice(1, 4)); // last index er ager value porzotno print korbe


//splice()==> change origianl array (add, remove, replace)
// syntax ==> splice(start_index, delete_count, new_add)  

let arr =[1,2, 3, 4, 5, 6];
arr.splice(2, 2, 101, 102);

// add element
arr.splice(2, 0, 105);

//delete elemet 
arr.splice(3, 1);

//replace elemnt
arr.splice(5, 1, 100);




// Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//a. Remove the first company from the array
// let remove = companies.shift();
// console.log(remove);

// b. Remove Uber & Add Ola in its place
let addNew = companies.splice(2, 1, "Ola");
console.log(companies);

// c. Add Amazon at the end
let addEnd = companies.splice(6,0, "Amazon");
console.log(companies);

// c. Add Amazon at the end ==> using push() method 
console.log(companies.push('amazon'));