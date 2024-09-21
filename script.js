/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((element) => {
    if(element.profession === "developer") {
      console.log(element);
      
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((element) => {
    if (element.profession === "developer") {
      console.log(element);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  let admins = arr.filter((element) => element.profession === "admin");

  admins.forEach(admin => {
    let index = arr.indexOf(admin);
    arr.splice(index, 1);
  })

  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "tim", age: "30", profession: "writer" },
    { id: 6, name: "tom", age: "25", profession: "devops" },
    { id: 7, name: "trav", age: "22", profession: "lead" },
  ];

  arr = arr.concat(arr2);
  console.log(arr);
}
