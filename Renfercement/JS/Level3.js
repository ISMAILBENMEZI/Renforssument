let array =
    [
        {
            id: 1,
            name: "Alice",
            department: "Engineering",
            skills: ["JavaScript", "React", "Node.js"],
            projects: [
                { title: "Website Redesign", status: "completed", budget: 12000 },
                { title: "API Integration", status: "in-progress", budget: 8000 }
            ]
        },
        {
            id: 2,
            name: "Bob",
            department: "Marketing",
            skills: ["SEO", "Content", "Analytics"],
            projects: [
                { title: "SEO Campaign", status: "completed", budget: 5000 },
                { title: "Brand Refresh", status: "in-progress", budget: 7000 }
            ]
        },
        {
            id: 3,
            name: "Carol",
            department: "Engineering",
            skills: ["Python", "Django", "React"],
            projects: [
                { title: "Data Pipeline", status: "completed", budget: 15000 },
                { title: "ML Dashboard", status: "in-progress", budget: 20000 }
            ]
        },
        {
            id: 4,
            name: "David",
            department: "Design",
            skills: ["Figma", "Illustrator", "CSS"],
            projects: [
                { title: "Mobile UI Kit", status: "completed", budget: 6000 },
                { title: "Design System", status: "pending", budget: 9000 }
            ]
        }
    ];



let skills = [];

array.forEach(ele => {
    skills = [...skills, ...ele.skills];
});

// let unique = [...new Set(skills)];

// let unique = skills.filter((item, index) => { return skills.indexOf(item) === index });

skills.sort((a, b) => a.localeCompare(b));

for (let i = 0; i < skills.length - 1; i++) {
    if (skills[i] === skills[i + 1])
        skills.splice(i + 1, 1);
}

// console.table(skills);

// ------------------------------------------------------------

let employees = [];

array.forEach(ele => {
    for (let i = 0; i < ele.skills.length; i++) {
        if (ele.skills[i] === 'React')
            employees.push(ele);
    }
});

employees = array.filter(ele => ele.skills.includes('React'));
// console.table(employees);

// -----------------------------------------
let total = 0;

array.forEach(ele => {
    ele.projects.forEach(element => {
        total += element.budget;
    })
})
// console.log(total);


total = array.reduce((acc, ele) => {
    ele.projects.forEach(element => {
        acc += element.budget;
    })
    return acc;
}, 0);

// console.log(total);
// ----------------------------------------------------------------

let status = [];

array.forEach(ele => {
    ele.projects.forEach(element => {
        if (element.status === 'in-progress')
            status.push(ele.name);
    });
});

// console.table(status);
// -----------------------------------------------------------------

let max = 0;
let maxObject = {};
array.forEach(ele => {
    let total = ele.projects.reduce((acc, ele) => ele.budget + acc, 0);
    if (total > max) {
        max = total;
        maxObject = ele;
    }
});

// console.log(maxObject);
// ---------------------------------------------------------------------

let number = [];

array.forEach(ele => {
    let maxcomplated = 0;
    ele.projects.forEach(element => {
        if (element.status === 'completed') {
            maxcomplated += 1;
        }
    });

    let obj = { 'name': ele.name, 'completedProjects': maxcomplated }

    number.push(obj);
});

// console.log(number);
// ----------------------------------------------------------------------


let lest = [];

array.forEach(ele => {
    ele.projects.forEach(element => {
        lest.push(element.title);
    });
});

// console.log(lest);
// -----------------------------------------------------------------


let employeesSkilles = [];

array.forEach(ele => {
    if (ele.department === 'Engineering') {
        employeesSkilles = [...employeesSkilles, ...ele.skills];
    }
});

employeesSkilles = [...new Set(employeesSkilles)];
// console.log(employeesSkilles)
// -------------------------------------------------------------------


let totalBudget = array.map(ele => {
    let total = ele.projects.reduce((acc, item) => item.budget + acc, 0);
    return { 'name': ele.name, 'totalBudget': total };
});

// console.log(totalBudget);

// ------------------------------------------------------------------

let bud = [];
array.forEach(ele => {
    let total = 0;
    ele.projects.forEach(element => {
        total += element.budget;
    });
    bud.push({ 'name': ele.name, 'totalBudget': total });
})

// console.log(bud);
// ----------------------------------------------------------------------


let pro = [];

array.forEach(ele => {
    let title = [];
    ele.projects.forEach(element => {
        if (element.status === 'pending')
            title.push(element.title);
    });

    if (title.length)
        pro.push({ 'name': ele.name, 'title': title });
});

console.log(pro);