var colshapeHandler = (function () {

    var instance;

    function init () {
        var colshapes = [];

        mp.events.add({
            'playerJoin': (player) => {
                player.colshapes = [];
            },
            'playerEnterColshape': (player, shape) => {
                let colshape = findColshape(shape.name)
                if (colshape) {
                    player.colshapes.push(shape.name)
                }
            },
            'playerExitColshape': (player, shape) => {
                let index = player.colshapes.findIndex(colshape => colshape === shape.name)
                if (index > -1) {
                    player.colshapes.splice(index, 1)
                }
            }
        })

        function findColshape(name) {
            let search = colshapes.find(shape => shape.name === name)
            if(search == null) {
                return false;
            }
            return search;
        }

        return {
            addColshape: function (name) {
                if (findColshape(name)) {
                    throw "A colshape with the name " + name + " already exists.";
                }
                colshapes.push({
                    name: name
                })
            },
            findColshape: function () {
                return findColshape;
            },
            returnColshapes: function () {
                return colshapes;
            }
        }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

module.exports = colshapeHandler;