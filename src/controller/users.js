const userModel = require("./../models/users");

// because get data is asynchronous we use async await
const getAllUsers = async (req, res) => {
  try {
    // in [data], we use array because default response data mysql2 is: rows & fields, & we don't need fields
    const [data] = await userModel.getAllUsers(); // so, i just rename [rows] => became [data]
    res.json({
      message: "GET All Users Success",
      data: data,
    });
  } catch (error) {
    res.status(500);
    res.json({
      message: "Failed to connect database",
      serverMessage: `${error}`,
    });
  }
};

const createNewUsers = async (req, res) => {
  const { body } = req;

  if(!body.name || !body.email || !body.address) {
    return res.status(400).json({
        message: 'Data input was wrong or empty, please re-check again',
        data: null
    })
  }

  try {
    await userModel.createNewUser(body);
    res.status(201);
    res.json({
      message: "CREATE NEW Users Success",
      data: req.body,
    });
  } catch (error) {
    res.status(500);
    res.json({
      message: "Failed to connect database",
      serverMessage: `${error}`,
    });
  }
};

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const {body} = req
  
  try {
    await userModel.updateUser(body, idUser)
    res.status(201);
    res.json({
        message: "update user was success",
        data: {
            id: idUser,
            ...body
        }
      });
  } catch (error) {
    res.status(500);
    res.json({
      message: "Failed to connect database",
      serverMessage: `${error}`,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    await userModel.deleteUser(idUser)
    res.json({
        message: "deleted user was success",
        data: null
      });
  } catch (error) {
    res.status(500);
    res.json({
      message: "Failed to connect database",
      serverMessage: `${error}`,
    });
  }
};

module.exports = { getAllUsers, createNewUsers, updateUser, deleteUser };
