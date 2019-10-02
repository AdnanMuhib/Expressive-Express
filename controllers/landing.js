exports.get_landing = function(req, res, next) {
  res.render("landing", { title: "Express" });
};

exports.submit_lead = function(req, res, nex) {
  console.log("lead email:", req.body.lead_email);
  res.redirect("/");
};
