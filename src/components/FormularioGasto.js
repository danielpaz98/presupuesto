import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardTitle, Form, FormFeedback, Label, Input, Button, FormGroup } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { validarCantidad } from "../scripts/helpers";
import ControlPresupuesto from "./ControlPresupuesto";
import ListadoGasto from "./ListadoGasto";

export default function FormularioGasto({ gastos, guardarGastos, presupuesto }) {
    const datosFormulario = { nombre: "", cantidad: "" };
    const [formulario, actualizarFormulario] = useState(datosFormulario);
    const { nombre, cantidad } = formulario;
    const [restante, guardarRestante] = useState(presupuesto);

    function onSubmit(e) {
        e.preventDefault();
        const validacion = validarCantidad(cantidad);
        if (Object.keys(validacion).length && validacion.tipo.valid) {
            // SE GUARDA EL RESTANTE Y EL GASTO
            if (restante) {
                if (cantidad <= restante) {
                    guardarGastos([...gastos, { ...formulario, id: uuidv4() }]);
                    guardarRestante(restante - cantidad);
                    actualizarFormulario(datosFormulario);
                } else {
                    alert("La cantidad no puede ser mayor que la del presupuesto restante");
                }
            } else {
                alert("Ya no queda más presupuesto");
                actualizarFormulario(datosFormulario);
            }
        }
    }

    return (
        <Card body className="pt-4 pb-5">
            <Row>
                <Col xs="12" xl="6" className="mb-4">
                    <CardTitle>
                        <h3 className="text-center text-info mb-4">Agrega tus gastos aquí</h3>
                    </CardTitle>
                    <Form autoComplete="off" onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="nombre" className="font-weight-bold">
                                Nombre Gasto
                            </Label>
                            <Input
                                id="nombre"
                                name="nombre"
                                placeholder="Ej: Transporte"
                                required
                                value={nombre}
                                onChange={(e) =>
                                    actualizarFormulario({ ...formulario, [e.target.name]: e.target.value })
                                }
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="cantidad" className="font-weight-bold">
                                Cantidad Gasto
                            </Label>
                            <Input
                                type="number"
                                id="cantidad"
                                name="cantidad"
                                value={cantidad}
                                required
                                onChange={(e) =>
                                    actualizarFormulario({ ...formulario, [e.target.name]: e.target.value })
                                }
                                {...validarCantidad(cantidad).tipo}
                            />
                            <FormFeedback>{validarCantidad(cantidad).mensaje}</FormFeedback>
                        </FormGroup>
                        <Button type="submit" color="info" block>
                            AGREGAR GASTO
                        </Button>
                    </Form>
                </Col>
                <Col xs="12" xl="6">
                    <CardTitle>
                        <h3 className="text-center text-info mb-4">Listado</h3>
                    </CardTitle>
                    <ListadoGasto gastos={gastos} />
                    <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
                </Col>
            </Row>
        </Card>
    );
}

FormularioGasto.propTypes = {
    gastos: PropTypes.array.isRequired,
    guardarGastos: PropTypes.func.isRequired,
    presupuesto: PropTypes.number.isRequired,
};
