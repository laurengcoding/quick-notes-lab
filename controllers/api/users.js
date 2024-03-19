const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    create, 
    createJWT,
    login,
    checkToken
};

async function create(req, res) {
    try {
        // add user to the database
        const user = await User.create(req.body);
        // token will be a string
        const token = createJWT(user);
        // use res.json to send back just a string
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    };
    // res.json({
    //     user: {
    //         name: req.body.name,
    //         email: req.body.email
    //     }
    // });
};

function createJWT(user) {
    return jwt.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h'}
    );
};

async function login(req, res) {
    try {
        const user = await User.findOne({email: req.body.email});
        const match = await bcrypt.compare(req.body.password, user.password);

        if (!match) throw new Error('Invalid username or password');

        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    }
}

function checkToken(req, res) {
    // req.user will always be there when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
}