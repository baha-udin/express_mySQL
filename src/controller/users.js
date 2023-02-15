const getAllUsers = (req, res) => {
    //dummy data
    const data = {
        id: "1",
        name: "Prawito",
        email: "prawito@email.com"
    }
     res.json({
        message: "GET All Users Success",
        data: data
     });
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