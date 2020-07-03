const router = require("express").Router();
const { User } = require("../../models");

const login = async (req, res) => {
    // expects {email: 'email@mail.com', password: 'password1'}
    const user = await User.findOne({
        where: {
            email: req.body.email,
        },
    });

    if (!user) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
    }

    const validPassword = await user.checkPassword(req.body.password);
    if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
    }

    req.session.save(() => {
        req.session.user_id = user.id;
        req.session.full_name = user.full_name;
        req.session.loggedIn = true;

        res.json({ user, message: "You are now logged in!" });
    });
};

router.post("/", async (req, res) => {
    try {
        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
            // Conventional is default, add checkbox to switch to Synthetic
        });
        if (user) {
            // user was created, log in now.
            login(req, res)
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post("/login", login);

module.exports = router;