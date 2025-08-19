function m1(req, res, next) {
    console.log("Middleware 1 executed");
    req.userId = "4";
}
function m2(req, res, next) {
    console.log("Middleware 2 executed");
    console.log(req.userId);
    req.IsAdmin = true;

}
module.exports = { m1, m2 };