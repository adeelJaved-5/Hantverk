async function signin(req, res) {
  const users = [
    {
      username: "Kund",
      lastname: "William",
      password: "Hantverk",
      type: "Customer",
    },
    {
      username: "Medlem",
      lastname: "Hugo",
      password: "Hantverk",
      type: "Member",
    },
    {
      username: "Admin",
      lastname: "Oliver",
      password: "Hantverk",
      type: "Admin",
    },
  ];

  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      res.status(200).json({
        success: true,
        type: user.type,
        first_name: user.username,
        last_name: user.lastname,
        data: "Sign in successful",
      });
    } else {
      res.status(401).json({
        success: false,
        data: "Invalid credentials",
      });
    }
  } catch (err) {
    res.status(401).json({
      success: false,
      data: "Invalid credentials",
    });
  }
}

module.exports = {
  signin,
};
