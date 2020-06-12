import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Pregunta from "./components/Pregunta";
import FormularioGasto from "./components/FormularioGasto";

export default function App() {
    const [gastos, guardarGastos] = useState([]);
    const [presupuesto, guardarPresupuesto] = useState(0);

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs="10">
                    <h1 className="text-white mt-4 mb-4">Gasto Semanal</h1>
                    {presupuesto === 0 ? (
                        <Pregunta guardarPresupuesto={guardarPresupuesto} />
                    ) : (
                        <FormularioGasto
                            gastos={gastos}
                            guardarGastos={guardarGastos}
                            presupuesto={presupuesto}
                        ></FormularioGasto>
                    )}
                </Col>
            </Row>
        </Container>
    );
}
