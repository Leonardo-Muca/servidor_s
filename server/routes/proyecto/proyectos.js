const Proyecto = require('../../models/proyecto.model');

//Agregar cliente
exports.add = async (req, res) => {
    const proyecto = new Proyecto(req.body);
    try {
        await proyecto.save();
        res.json({ message: 'Información insertada correctamente' });

    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la petición'
        });
    }
};


//primera accion: list
exports.list = async (req, res) => {
    try {
        const proyecto = await Proyecto.find({})

        res.json(proyecto);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

// leer cliente por id
exports.show = async (req, res, next) => {
    try {
        const proyecto = await Proyecto.findById(req.params.id);
        if (!proyecto) {
            res.status(404).json({ message: 'La tarea no existe' });
        }
        res.json(proyecto);
    } catch (error) {
        res.status(400).json({ message: 'Error al procesar la peticion' });
    }
}

//Actualizar cliente
exports.update = async (req, res, next) => {
    try {
        const proyecto = await Proyecto.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        res.json({ message: 'Información insertada correctamente’' });
    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la petición'
        });
    }

}

//eliminar cliente
exports.delete = async (req, res, next) => {
    try {
        await Proyecto.findByIdAndDelete({ _id: req.params.id });
        res.json({ mesagge: 'La tarea ha sido eliminada' })
    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la petición'
        });
    }
}