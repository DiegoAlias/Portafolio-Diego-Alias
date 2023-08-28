import { Router } from "express"
const router = Router()

router.get("/", (req, res) => res.render("index", { title: "Inicio" }))

router.get("/about", (req, res) => res.render("about", { title: "Sobre mí" }))

router.get("/skill", (req, res) => res.render("skill", { title: "Habilidades" }))

router.get("/achievement", (req, res) => res.render("achievement", { title: "Logros" }))

router.get("/work", (req, res) => res.render("work", { title: "Proyectos" }))

router.get("/myworks", (req, res) => res.render("myworks", { title: "Proyectos" }))

router.get("/contact", (req, res) => res.render("contact", { title: "Contacto" }))

router.get("/contact", (req, res) => res.render("contact", { title: "Contacto" }))

export default router