import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, Form, FormGroup, FormFeedback, Input, Button } from "reactstrap";
import { validarCantidad } from "../scripts/helpers";

export default function Pregunta({ guardarPresupuesto }) {
    const [cantidad, guardarCantidad] = useState("");

    function onSubmit(e) {
        e.preventDefault();
        const validacion = validarCantidad(cantidad);
        if (Object.keys(validacion).length && validacion.tipo.valid) {
            // SE GUARDA EL PRESUPUESTO
            guardarPresupuesto(parseInt(cantidad));
        }
    }

    return (
        <Card body className="pt-4 pb-5">
            <CardTitle>
                <h2 className="text-info">Coloca tu presupuesto</h2>
            </CardTitle>
            <Form autoComplete="off" onSubmit={onSubmit}>
                <FormGroup>
                    <Input
                        type="number"
                        name="cantidad"
                        placeholder="Coloca tu presupuesto"
                        required
                        onChange={(e) => guardarCantidad(e.target.value)}
                        {...validarCantidad(cantidad).tipo}
                    />
                    <FormFeedback>{validarCantidad(cantidad).mensaje}</FormFeedback>
                </FormGroup>
                <Button type="submit" color="info" className="mt-3" block>
                    DEFINIR PRESUPUESTO
                </Button>
            </Form>
        </Card>
    );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
};
