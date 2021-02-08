module.exports = {
    index: (req, res) => {
        res.render("index")
    },
    header:(req, res)=>{
        res.render("headerFooter")
    }
}