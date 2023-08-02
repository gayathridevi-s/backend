import express from "express";
import Employee from "./Employee";
const employeeRouter = express.Router();

const employees: Employee[] = [
    {
        id: 1,
        name: "name1",
        email: "name1@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        name: "name2",
        email: "name2@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
    }
]
let count: number = employees.length;
employeeRouter.get('/', (req, res) => {

    console.log(req.url);

    res.status(200).send(employees);
})
employeeRouter.post('/', (req, res) => {

    console.log("Booooooody",req.body);
    const newEmployee=new Employee();
    newEmployee.email=req.body.email;
    newEmployee.name=req.body.name;
    newEmployee.id=count++;
    newEmployee.createdAt=new Date();
    newEmployee.updatedAt=new Date();

    employees.push(newEmployee);
    res.status(200).send("employee created");
})
employeeRouter.delete('/:id', (req, res) => {

    console.log(req.url);

    const id: number = Number(req.params.id);
    const index = employees.findIndex(employee => {
        return employee.id === id;
      })
console.log(index);
employees.splice(index,1);
    res.status(201).send("employee deleted");
})

employeeRouter.put('/:id', (req, res) => {

    const id: number = Number(req.params.id);
    const employee = employees.find(employee => {
        return employee.id === id;
      })
      employee.name = req.body.name;
      employee.email =req.body.email;
      employee.updatedAt = new Date();
    res.status(200).send(employee);
})



export default employeeRouter;