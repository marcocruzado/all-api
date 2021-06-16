"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProjects = getProjects;
exports.getOneProject = getOneProject;
exports.createProject = createProject;
exports.deleteProject = deleteProject;
exports.updateProject = updateProject;

var _Project = _interopRequireDefault(require("../models/Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Obtener todos los Proyectos
function getProjects(_x, _x2) {
  return _getProjects.apply(this, arguments);
} //obtener un projecto por id


function _getProjects() {
  _getProjects = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var projects;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Project["default"].findAll();

          case 3:
            projects = _context.sent;
            res.json({
              data: projects
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getProjects.apply(this, arguments);
}

function getOneProject(_x3, _x4) {
  return _getOneProject.apply(this, arguments);
} //Crear un proyecto


function _getOneProject() {
  _getOneProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, project;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return _Project["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            project = _context2.sent;
            res.status(200).json({
              message: "proyecto encontrado",
              project: project
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getOneProject.apply(this, arguments);
}

function createProject(_x5, _x6) {
  return _createProject.apply(this, arguments);
} //eliminar un proyecto


function _createProject() {
  _createProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre, prioridad, descripcion, fecha_entrega, newProject;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, prioridad = _req$body.prioridad, descripcion = _req$body.descripcion, fecha_entrega = _req$body.fecha_entrega;
            _context3.prev = 1;
            _context3.next = 4;
            return _Project["default"].create({
              nombre: nombre,
              prioridad: prioridad,
              descripcion: descripcion,
              fecha_entrega: fecha_entrega
            }, {
              fields: ['nombre', 'prioridad', 'descripcion', 'fecha_entrega']
            });

          case 4:
            newProject = _context3.sent;

            if (!newProject) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'proyecto creado satisfatoriaente',
              newProject: newProject
            }));

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: "algo internamente fallo",
              data: {}
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _createProject.apply(this, arguments);
}

function deleteProject(_x7, _x8) {
  return _deleteProject.apply(this, arguments);
} //editar el proyecto 


function _deleteProject() {
  _deleteProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Project["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.status(200).json({
              message: "Se elimino el proyecto con el id:".concat(id),
              deleteRowCount: deleteRowCount
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _deleteProject.apply(this, arguments);
}

function updateProject(_x9, _x10) {
  return _updateProject.apply(this, arguments);
}

function _updateProject() {
  _updateProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, nombre, prioridad, descripcion, fecha_entrega, projects;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, prioridad = _req$body2.prioridad, descripcion = _req$body2.descripcion, fecha_entrega = _req$body2.fecha_entrega;
            _context6.prev = 2;
            _context6.next = 5;
            return _Project["default"].findAll({
              attributes: ['id', 'nombre', 'prioridad', 'descripcion', 'fecha_entrega'],
              where: {
                id: id
              }
            });

          case 5:
            projects = _context6.sent;

            //con esto sabemos que almenos ay una fila 
            if (projects.length > 0) {
              projects.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(project) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return project.update({
                            nombre: nombre,
                            prioridad: prioridad,
                            descripcion: descripcion,
                            fecha_entrega: fecha_entrega
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: "proyecto actualizado satisfactoriamente",
              projects: projects
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 10]]);
  }));
  return _updateProject.apply(this, arguments);
}