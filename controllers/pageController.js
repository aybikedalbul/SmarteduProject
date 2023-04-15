const nodemailer = require("nodemailer");

exports.getIndexPage = (req, res) => {
  console.log(req.session.userID);
  res.status(200).render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
 };

exports.getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render('login', {
    page_name: 'login',
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};
exports.sendEmail = async (req, res) => {
  try{
  const outputMessage = `
  <h1>Mail Details </h1>
  <ul>
  <li>Name: ${req.body.name} </li> 
  <li>Email: ${req.body.email} </li>
  </ul>
  <h1>Message </h1>
  <p>${req.body.message}</p>
  `
  // Created using Ethereal.mail: 
   let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: "geovanny18@ethereal.email",
      pass: "mdQAcrXcfkjpwK5ex1sil"
    }
  });

  let info = await transporter.sendMail({
    from: '"Smart EDU Contact  Form" , <geovanny18@ethereal.email>',
    to: 'aybikedalbul@hotmail.com',
    subject: 'Smart EDU contact from new message',
    html: outputMessage,
  });

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  req.flash("success","We received your mesage succesfully");
  res.status(200).redirect('contact')
}catch(err){
  // req.flash("error",`Something happened! ${err}`);
  req.flash("error","Something happened!");
  res.status(200).redirect('contact')
}
}