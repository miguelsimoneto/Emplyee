const Employee = require('../models/Employee')
const { response } = require('express')
 
//mostra a lista empregados

const index = (req, res, next) => {
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:"um erro ocorreu"
        })
    })
}

//mostrar um empregado
const show =  (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
     .then(response => {
       res.json({
       response
       })
    })
    .catch(error => {
        res.json({
            message: 'um erro ocorreu'
        })
    })
}

const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()
    .then(response => {
        res.json({
        message: "Funcionario acresentado"
        })
    })
    .catch(error => {
        res.json({
        message: "Deu erro na insercao"
        })
    })
}

//atualizar
const update = (req, res, next) => {
    let employeeID = req.body.employeeID
    let updatedData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,  
        phone: req.body.phone,
        age: req.body.age
    }

Employee.findByIdAndUpdate(employeeID, {$set: updatedData})
.then(() => {
     res.json({
        message: 'Empregado atualizado'
     })
})
.catch(error   => {
    res.json({
    message : 'Um erro ocorreu'   
    })
})
}

//deletando

const destroy = (req, res, next) => {
     let employeeID = req.body.employeeID
     Employee.findByIdAndDelete(employeeID)
     .then(() => {
        res.json({
            message: 'Empregado deletado'
        })
    })
      .catch(error => {
        res.json ({
            message: 'Um erro ocorreu'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}