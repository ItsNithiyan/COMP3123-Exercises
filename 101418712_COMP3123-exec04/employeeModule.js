
let employees = [
    { id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", salary: 5000 },
    { id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", salary: 4000 },
    { id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", salary: 5500 },
    { id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", salary: 9000 }
];

function getAllEmployees() {
    return employees;
}

function getEmployeeNames() {
    return employees
        .map(employee => `${employee.firstName} ${employee.lastName}`)
        .sort();
}

function getTotalSalary() {
    return employees.reduce((total, employee) => total + employee.salary, 0);
}

module.exports = { getAllEmployees, getEmployeeNames, getTotalSalary };
