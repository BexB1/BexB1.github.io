function appIndex (req, res){
  res.render('index');
}

module.exports = {
  index: appIndex
}