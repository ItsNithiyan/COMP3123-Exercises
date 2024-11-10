const http = require("http");
const employeeModule = require('./employeeModule');

console.log("Lab 03 - NodeJs");

const port = process.env.PORT || 8082;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
        return;
    }

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end("<h1>Welcome to Lab Exercise 03</h1>");
    } else if (req.url === '/employee') {
        res.statusCode = 200;
        res.end(JSON.stringify(employeeModule.getAllEmployees()));
    } else if (req.url === '/employee/names') {
        res.statusCode = 200;
        res.end(JSON.stringify(employeeModule.getEmployeeNames()));
    } else if (req.url === '/employee/totalsalary') {
        res.statusCode = 200;
        res.end(JSON.stringify({ total_salary: employeeModule.getTotalSalary() }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});