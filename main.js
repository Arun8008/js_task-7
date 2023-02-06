/*-------7-------*/
const isObject=function(val){
	 if(val===null){
		 
		 return false;
	 }
	 return typeof val==='Object';
 };
 
const person = {
    first_name: 'Monica',
    last_name: 'Geller',
    phone: '915-996-9739',
    email: 'monica37@gmail.com',
    address: {
        street: {
            street_num: '495',
            street_name: 'Grove Street',
        },
        city: 'New York',
        country: 'USA',
    },
};
 
 const nestedObject=function(obj){
	 for(const key in obj){
		 
		 if(isObject(obj[key])){
			nestedObject(obj[key]);
		 }
		 else{
			 console.log(`${key}===>${obj[key]}`);
		 }
	 }
 };
 nestedObject(person);
 
// /*--------1-------*/
// const users =[
  // {
    // first_name: 'Mike',
    // last_name: 'Sheridan'
  // },
  // {
    // first_name: 'Tim',
    // last_name: 'Lee'
  // },
  // {
    // first_name: 'John',
    // last_name: 'Carte'
  // }
// ];
// let name=users.map(function (user){
	// return user.first_name+user.last_name;
// })
// document.write(name);
// console.log(name);
 
// /*--------2-------*/
// const users = [
  // {
    // first_name: 'Mike',
    // last_name: 'Sheridan',
    // age: 30
  // },
  // {
    // first_name: 'Tim',
    // last_name: 'Lee',
    // age: 45
  // },
  // {
    // first_name: 'John',
    // last_name: 'Carte',
    // age: 25
  // }
// ];
// let name=users.map(function (user){
	// return user.last_name;
// })
// document.write(name);
// console.log(name);

// /*--------3-------*/
// const users = [
  // {
    // first_name: 'Mike',
    // location: 'London'
  // },
  // {
    // first_name: 'Tim',
    // location: 'US'
  // },
  // {
    // first_name: 'John',
    // location: 'Australia'
  // }
// ];

// let name=users.map(function(user){
	// return `${user.first_name} lives in ${user.last_name}`
// })
// document.write(name);
// console.log(name);

// /*-----------4---------*/

// /*-----------Find---------*/

// const employees = [
				 // { 
				 // name: "David Carlson", 
				 // age: 30 
				 // },
				 // { 
				 // name: "John Cena", 
				 // age: 34 
				 // },
				 // { 
				 // name: "Mike Sheridan",
				 // age: 25
				 // },
				 // {
				 // name: "John Carte",
				 // age: 50
				 // }
				// ];
	// const employee = employees.find(function (user) {
	// return user.name.indexOf('John')>-1;
	// });
	    // console.log(employee);
		// document.write("<br>",	JSON.stringify(employee));
		
// /*-----------IndexOf---------*/

// const employees1 = [
					// { 
					// name: 'David Carlson',
					// age: 30 
					// },
					// { 
					// name: 'Arun Cena', 
					// age: 34 
					// },
					// { 
					// name: 'Mike Sheridan',
					// age: 25
					// },
					// {
					// name: 'John Carte',
					// age: 50
					// }
				  // ];

		// const employ = employees1.findIndex(function (employee) {
		// return employee.name.indexOf('John')>-1;
		// });
		   // console.log(employ);
		   // document.write("<br>",	JSON.stringify(employ));
		   
// /*-----------5---------*/		   
		   
// const employees2 = [
				    // { 
					// name: 'David Carlson', 
					// age: 30 
					// },
					// { 
					// name: 'John Cena', 
					// age: 34 
					// },
					// { 
					// name: 'Mike Sheridan', 
					// age: 25 
					// },
					// { 
					// name: 'John Carte', 
					// age: 50 
					// }
				// ];

    // const employe = employees2.filter(function (employee) {
    // return employee.name.indexOf('John') > -1;
	// });
	   // console.log(employe);
	   // document.write("<br>",	JSON.stringify(employe));
	  
// /*----------6--------*/

// const numbers = [1, 2, 3, 4, 5];
			// const mul = numbers.reduce(function (v1, v2) {
			// arun= v1 * v2;
				  // return arun;
				// });
			// console.log(mul/3);
			// document.write("<br>",mul/3);