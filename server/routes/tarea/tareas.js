const Tarea = require('../../models/tarea.model');


//Agregar cliente
exports.add = async (req, res) => {
    const tarea = new Tarea(req.body);
    try {
        await tarea.save();
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
        const tarea = await Tarea.find({})
            .populate({
                path: 'arrDesarrollador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrTester',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrAdministrador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'idProyecto',
                model: 'Proyecto',
            })
        res.json(tarea);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

//primera accion: listar tarea por status
exports.listTareaF = async (req, res) => {
    try {
        const tarea = await Tarea.find({ strStatus: 'Finalizada' })
            .populate({
                path: 'arrDesarrollador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrTester',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrAdministrador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'idProyecto',
                model: 'Proyecto',
            })
        res.json(tarea);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

//primera accion: listar tarea por status
exports.listTareaP = async (req, res) => {
    try {
        const tarea = await Tarea.find({ strStatus: 'Pendiente' })
            .populate({
                path: 'arrDesarrollador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrTester',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrAdministrador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'idProyecto',
                model: 'Proyecto',
            })
        res.json(tarea);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};
exports.listTareaXidUsuarioDev2 = async (req, res) => {
    try {
        const tarea = await Tarea.find({ 'arrDesarrollador.idUsuario': req.params.id } && { 'idProyecto': req.params.idProyecto })
            .populate({
                path: 'arrDesarrollador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrTester',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrAdministrador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'idProyecto',
                model: 'Proyecto',
            })
        res.json(tarea);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

exports.listTareaXidUsuarioTester2 = async (req, res) => {
    try {
        const tarea = await Tarea.find({ 'arrTester.idUsuario': req.params.id } && { 'idProyecto': req.params.idProyecto })
            .populate({
                path: 'arrDesarrollador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrTester',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrAdministrador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'idProyecto',
                model: 'Proyecto',
            })
        res.json(tarea);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

exports.listTareaXidUsuarioAdm2 = async (req, res) => {
    try {
        const tarea = await Tarea.find({ 'arrAdministrador.idUsuario': req.params.id } && { 'idProyecto': req.params.idProyecto })
            .populate({
                path: 'arrDesarrollador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrTester',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrAdministrador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'idProyecto',
                model: 'Proyecto',
            })
        res.json(tarea);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

//primera accion: listar tarea por status
exports.listTareaXidUsuarioDev = async (req, res) => {
    try {
        const tarea = await Tarea.find({ 'arrDesarrollador.idUsuario': req.params.id })
            .populate({
                path: 'arrDesarrollador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrTester',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrAdministrador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'idProyecto',
                model: 'Proyecto',
            })
        res.json(tarea);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

//
exports.listTareaXidUsuarioTester = async (req, res) => {
    try {
        const tarea = await Tarea.find({ 'arrTester.idUsuario': req.params.id })
            .populate({
                path: 'arrDesarrollador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrTester',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrAdministrador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'idProyecto',
                model: 'Proyecto',
            })
        res.json(tarea);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

//
exports.listTareaXidUsuarioAdm = async (req, res) => {
    try {
        const tarea = await Tarea.find({ 'arrAdministrador.idUsuario': req.params.id })
            .populate({
                path: 'arrDesarrollador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrTester',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrAdministrador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'idProyecto',
                model: 'Proyecto',
            })
        res.json(tarea);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

// leer cliente por id
exports.show = async (req, res, next) => {
    try {
        const tarea = await Tarea.findById(req.params.id)
            .populate({
                path: 'arrDesarrollador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'arrTester',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            })
            .populate({
                path: 'idProyecto',
                model: 'Proyecto',
            })
            .populate({
                path: 'arrAdministrador',
                populate: {
                    path: 'idUsuario',
                    model: 'Usuario'
                }
            });
        if (!tarea) {
            res.status(404).json({ message: 'La tarea no existe' });
        }

        res.json(tarea);
    } catch (error) {
        res.status(400).json({ message: 'Error al procesar la peticion' });
    }
}

//Actualizar cliente
exports.update = async (req, res, next) => {
    try {
        const tarea = await Tarea.findOneAndUpdate(
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
        await Tarea.findByIdAndDelete({ _id: req.params.id });
        res.json({ mesagge: 'La tarea ha sido eliminada' })
    } catch (error) {
        res.status(400).json({
            mesagge: 'Error al procesar la petición'
        });
    }
}