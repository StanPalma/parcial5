const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");
const { codigoExiste, existeAduanaPorId } = require("../helpers/db-validators");

const {
  aduanaGGet,
  aduanaGPut,
  aduanaGPost,
  aduanaGDelete,
  aduanaGPatch,
} = require("../controllers/aduanasG");

const router = Router();

router.get("/", aduanaGGet);

router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeAduanaPorId),
    validarCampos,
  ],
  aduanaGPut
);

router.post(
  "/",
  [
    // check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    // check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    // check('correo', 'El correo no es válido').isEmail(),
    check("codigo").custom(codigoExiste),
    validarCampos,
  ],
  aduanaGPost
);

router.delete(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeAduanaPorId),
    validarCampos,
  ],
  aduanaGDelete
);

router.patch("/", aduanaGPatch);

module.exports = router;
