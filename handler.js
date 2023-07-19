"use strict";

const db = require("./db/database");

module.exports.createTodo = async (event) => {
  try {
    const id = event.arguments.id;
    const name = event.arguments.name;
    const description = event.arguments.description;

    let a = await db.query(
      `insert into public.user (id,name,description) values (${id},'${name}','${description}')`
    );
    return {
      id,
      name,
      description,
    };
  } catch (error) {
    return "can not create a todo";
  }
};

module.exports.getTodos = async (event) => {
  try {
    let a = await db.query(`select * from public.user`);
    return a.rows;
  } catch (error) {
    return "can not fetch the value from the databse";
  }
};

module.exports.getOneTodo = async (event) => {
  try {
    const id = event.arguments.id;
    let a = await db.query(`select * from public.user where id=${id}`);

    return a.rows[0];
  } catch (error) {
    return "not found the id";
  }
};

module.exports.deleteTodo = async (event) => {
  try {
    const id = event.arguments.id;
    let a = await db.query(`delete from public.user where id=${id}`);
    return { id: id };
  } catch (err) {
    return null;
  }
};

module.exports.updateTodo = async (event) => {
  try {
    const id = event.arguments.id;
    const name = event.arguments.name;
    const description = event.arguments.description;
    let a = await db.query(`UPDATE public.user
SET name = '${name}', description = '${description}'
WHERE id=${id};`);

    return {
      id,
      name,
      description,
    };
  } catch (error) {
    console.log(
      "🚀 ~ file: handler.js ~ line 65 ~ module.exports.updateTodo= ~ error",
      error
    );

    return null;
  }
};
