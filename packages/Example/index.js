const colshapeHandler = require('../Colshapes/index').getInstance()

const colshape = mp.colshapes.newSphere(34, 15, 69, 15, 0)
colshape.name = 'example'

colshapeHandler.addColshape('example')