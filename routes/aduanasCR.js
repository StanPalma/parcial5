
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { codigoExiste, existeAduanaPorId } = require('../helpers/db-validators');

const { aduanaCRGet,
        aduanaCRPut,
        aduanaCRPost,
        aduanaCRDelete,
        aduanaCRPatch } = require('../controllers/aduanasCR');

const router = Router();


router.get('/', aduanaCRGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    // check('id').custom( existeProductoPorId ),
    validarCampos
],aduanaCRPut );

router.post('/',[
    // check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    // check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    // check('correo', 'El correo no es válido').isEmail(),
    check('codigo').custom( codigoExiste ),
    validarCampos
], aduanaCRPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeAduanaPorId ),
    validarCampos
],aduanaCRDelete );

router.patch('/', aduanaCRPatch );

module.exports = router;