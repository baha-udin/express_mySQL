const dbPool = require('./../config/database')

// CREATE Models query: get All users from database
const getAllUsers = (req, res) => {
    const SQLQuery = 'SELECT * from usersas' 

    return dbPool.execute(SQLQuery)
}

module.exports = {getAllUsers}