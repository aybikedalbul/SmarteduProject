module.exports = (req, res, next) => {
  try {
    if (req.session.userID) {
      return res.redirect('/');
    }
    next();
  } catch (err) {
    return res.redirect('login');
  }
};
