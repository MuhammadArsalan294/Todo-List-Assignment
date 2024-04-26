#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let todosList = [];
let condition = true;
while (condition === true) {
    // ---------------SELECT AN OPTION----------------
    let selectOption = await inquirer.prompt([{
            name: "option",
            type: "list",
            message: chalk.underline.green("Please Select an option:"),
            choices: ["Add", "Update", "Delete", "View", "Exit"]
        }]);
    // ---------------------ADD-----------------------
    if (selectOption.option === "Add") {
        let addTodo = await inquirer.prompt([{
                name: "todo",
                type: "input",
                message: chalk.magenta("Add items in the list:")
            }]);
        todosList.push(addTodo.todo);
        console.log(todosList);
    }
    //---------------------UPDATE---------------------
    if (selectOption.option === "Update") {
        let updateTodo = await inquirer.prompt([{
                name: "todo",
                type: "list",
                message: chalk.magenta("Update item in the list:"),
                choices: todosList.map(item => item)
            }]);
        let addTodo = await inquirer.prompt([{
                name: "todo",
                type: "input",
                message: chalk.magenta("Add items in the list:")
            }]);
        let newTodo = todosList.filter(val => val !== updateTodo.todo);
        todosList = [...newTodo, addTodo.todo];
        console.log(todosList);
    }
    //---------------------Delete----------------------
    if (selectOption.option === "Delete") {
        let deleteTodo = await inquirer.prompt([{
                name: "todo",
                type: "list",
                message: chalk.magenta("Delete item in the list:"),
                choices: todosList.map(item => item)
            }]);
        let newTodo = todosList.filter(val => val !== deleteTodo.todo);
        todosList = [...newTodo];
        console.log(todosList);
    }
    //---------------------View-----------------------
    if (selectOption.option === "View") {
        console.log(chalk.magenta("*****To-Do List*****"));
        console.log(todosList);
    }
    //---------------------Exit------------------------
    if (selectOption.option === "Exit") {
        console.log(chalk.magenta("*****Exiting List*****"));
        condition = false;
    }
}
