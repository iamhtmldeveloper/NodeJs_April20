const homeFunction = (req, res) => {
    res.render("homePage");
}

const loginFunction = (req, res) => {
    res.render("loginPage");
}

const registerFunction = (req, res) => {
    res.render("registerPage");
}

export {
    homeFunction,
    loginFunction,
    registerFunction
}