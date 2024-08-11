const connectionMySql = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs');
}

const postCreateUser = (req, res) => {

    const {email, name, city} = req.body;
    
    connectionMySql.query(
        ` INSERT INTO 
            Users (email, name, city)
            VALUES(?, ?, ?) `,
            [email, name, city],
        function (err, results) {
            console.log(email);
            res.send('Tao moi thanh cong')
        }
    );
};

module.exports = {
    getHomePage,
    postCreateUser
}