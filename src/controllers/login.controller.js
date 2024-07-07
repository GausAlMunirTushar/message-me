const login = (req, res, next) => {
  res.render("index", { title: "Login - Message Me" });
};

module.exports = {
    login,
}
