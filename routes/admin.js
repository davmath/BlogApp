const express = require("express")
const router = express.Router()

router .get('/',(req, res)=>{
    res.render("admin/index")
})

router.get('/posts', (req, res)=>{
    res.send("Página de posts")
})

router.get("/categorias", (req, res)=>{
    res.send("Página de categorias")
})

router.get("/teste", (req, res)=>{
    res.send("Isso é um fucking teste xd")
})


module.exports = router