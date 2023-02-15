const userModel = require('./../models/users')

// because get data is asynchronous we use async await
const getAllUsers = async (req, res) => {
    try {
    // in data, we use array because default response data mysql2 is: rows & fields, & we don't need fields
        const [data] = await userModel.getAllUsers() // so, i just rename [rows] => became [data]
        res.json({
            message: "GET All Users Success",
            data: data
        });
    } catch (error) {
        res.status(500);
        res.json({
            message: 'Failed to connect database',
            serverMessage: `${error}`
        })
    }
}

const createNewUsers = (req, res) => {
    console.log(req.body)
    res.json({
        message: "CREATE NEW Users Success",
         data: req.body
    })
}

const updateUser = (req, res) => {
    const {idUser} = req.params
    console.log(`id user: ${idUser}`)
    res.json({
        message: "update user was success",
        id: idUser,
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const {idUser} = req.params
    res.json({
        message: "deleted user was success",
        data: {
            id: idUser,
            name: "prawito",
            email: "prawito@email.com"

        }
    })
}

module.exports = {getAllUsers, createNewUsers, updateUser, deleteUser}