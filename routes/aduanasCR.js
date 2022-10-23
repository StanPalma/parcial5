
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { codigoCRExiste, existeCRAduanaPorId } = require('../helpers/db-validators');

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
    check('nombreproyecto', 'El nombre es obligatorio').not().isEmpty(),
    check('paisqueejecuta', 'El pais que ejecuta es obligatorio').not().isEmpty(),
    check('fechacierre', 'El correo no es válido').not().isEmpty(),
    check('codigo').custom( codigoCRExiste ),
    validarCampos
], aduanaCRPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeCRAduanaPorId ),
    validarCampos
],aduanaCRDelete );

router.patch('/', aduanaCRPatch );

module.exports = router;