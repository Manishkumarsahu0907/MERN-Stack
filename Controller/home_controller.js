
module.exports.home = function(req, res){
    console.log('this is the home-Controller');
    return res.end("<h2> Express is up for project</h2>")
}