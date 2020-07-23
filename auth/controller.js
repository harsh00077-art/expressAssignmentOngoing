const users = [];

const register =  (req, res) => {
    let { body } = req;
    users.push(body);
    return res.status(201).json({ message: "Registered", users: users });
};

const login =  (req, res) => {
    let { body } = req;
    let user = users.find((user) => {
        return user.name == body.name && user.password == body.password;
    });
    if(user){
        res.status(201).json({ message: "login works",user:user })
    }else{
        res.status(404).send('User not found please register')
    }
  
};

module.exports = {
    register,
    login
}
