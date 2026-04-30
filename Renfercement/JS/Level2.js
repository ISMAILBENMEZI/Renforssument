let array = [
    { id: 1, name: "Alice", department: "Engineering", salary: 4800, active: true },
    { id: 2, name: "Bob", department: "Marketing", salary: 3200, active: false },
    { id: 3, name: "Carol", department: "Engineering", salary: 5200, active: true },
    { id: 4, name: "David", department: "HR", salary: 2900, active: true },
    { id: 5, name: "Eva", department: "Marketing", salary: 3800, active: true },
    { id: 6, name: "Frank", department: "Engineering", salary: 4100, active: false },
    { id: 7, name: "Grace", department: "HR", salary: 3100, active: true }
];


let name = [];
array.forEach(key => {
    name.push(key.name);
});
// console.table(name);
const names = array.map(ele => ele.name);
// console.table(names);
let actives = [];
// ---------------------------------------------------------
array.forEach(ele => {
    if (ele.active)
        actives.push(ele);
})
// console.table(actives);
const active = array.filter(ele => ele.active);
// console.table(active);
// ---------------------------------------------------------------

for (let ele of array) {
    if (ele.name === 'Eva') {
        // console.log(ele);
        break;
    }
}

const employee = array.find(ele => ele.name === 'Eva');
// console.log(employee);
// ---------------------------------------------------------------
let employees = [];
array.forEach(ele => {
    if (ele.department === 'Engineering') {
        employees.push(ele);
    }
})
// console.log(employees);
employees = array.filter(ele => ele.department === 'Engineering');
// console.log(employees);
// ------------------------------------------------------------------------------


let total_salary = array.reduce((acc, ele) => {
    if (ele.active)
        return ele.salary + acc;
    return acc;
}, 0);

// console.log(total_salary);

total_salary = 0;

array.forEach(ele => {
    if (ele.active)
        total_salary += ele.salary;
})

// console.log(total_salary);
// ------------------------------------------------------------------------
let newArray = [];

array.forEach(ele => {
    newArray.push({ 'name': ele.name, 'salary': ele.salary });
})

// console.log(newArray);
newArray = array.map(ele => ({ 'name': ele.name, 'salary': ele.salary }));
// console.log(newArray);
// --------------------------------------------------------------------------


let index = array.findIndex(ele => ele.id === 6);
// console.log(index);

for (let i = 0; i < array.length; i++) {
    if (array[i].id === 6) {
        // console.log(i);
        break;
    }
}

// --------------------------------------------------------------------------------

array.forEach(ele => {
    if (ele.salary > 4000) {
        // console.log(ele);
    }
})

// -------------------------------------------------------------------

let above = array.filter(ele => ele.salary > 4000);
// console.log(above);
// -------------------------------------------------------------------


let newSalary = array.map(ele => {
    if (ele.name === 'David')
        ele.salary = 3500;
    return ele;
});

// console.log(newSalary);

array.forEach(ele => {
    if (ele.name === 'David')
        ele.salary = 3500;
});

// console.log(array);
// --------------------------------------------------------

// let sortBySalary = array.sort((a, b) => a.salary - b.salary);
// console.log(sortBySalary);

for (let i = 0; i < array.length; i++) {
    for(let j = 0 ; j < array.length - 1 - i; j++)
    {
        if(array[j].salary > array[j+i].salary)
        {
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
}

// console.log(array);
// ---------------------------------------------------




