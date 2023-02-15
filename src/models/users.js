const dbPool = require('./../config/database')

// Model query: get All users from database
const getAllUsers = (req, res) => {
    const SQLQuery = 'SELECT * from users' 
    //dbPool.execute is syntax from mysql2 to connect db
    return dbPool.execute(SQLQuery)
}

// Model query: create new users to database
const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO users (name, email, address) 
                    VALUES ('${body.name}', '${body.email}', '${body.address}')`

    return dbPool.execute(SQLQuery)
}

// Model query: update data users
const updateUser = (body, idUser) => {
    const SQLQuery = `UPDATE users 
                    SET name='${body.name}', email='${body.email}', address='${body.address}'
                    WHERE id=${idUser} `
    return dbPool.execute(SQLQuery)
}

// Model query: delete users
const deleteUser = (iduser) => {
    const SQLQuery = `DELETE FROM users WHERE id='${iduser}'`

    return dbPool.execute(SQLQuery)
}

module.exports = {getAllUsers, createNewUser, updateUser, deleteUser}