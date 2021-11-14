class HomeController {
  index(req, res){
    res.json({status: "ok"});
  }
}

export default new HomeController();
