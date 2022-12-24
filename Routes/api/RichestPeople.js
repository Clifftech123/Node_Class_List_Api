const express = require( "express" );
const list = require('../../RichestList')
const router = express.Router();

router.get( '/', ( req, res ) => {
    res.json(list)
})

module.exports = router;
