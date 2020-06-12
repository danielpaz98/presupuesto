import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, Badge } from "reactstrap";
import Paginacion from "./Paginacion";

export default function ListadoGasto({ gastos }) {
    const [itemsPorPagina] = useState(3);
    const [paginaActual, actualizarPaginaActual] = useState(1);
    const indexUltimoItem = paginaActual * itemsPorPagina;
    const indexPrimerItem = indexUltimoItem - itemsPorPagina;
    const itemsActuales = gastos.slice(indexPrimerItem, indexUltimoItem);

    return (
        <Fragment>
            {itemsActuales.map((gasto) => (
                <Row className="justify-content-center align-items-center" key={gasto.id}>
                    <Col xs="10">
                        <p className="font-weight-bold">{gasto.nombre}</p>
                    </Col>
                    <Col xs="2" className="p-0">
                        <Badge color="primary">
                            <h6>$ {gasto.cantidad}</h6>
                        </Badge>
                    </Col>
                    <hr style={{ width: "92%" }} />
                </Row>
            ))}
            {gastos.length ? (
                <Paginacion
                    itemsPorPagina={itemsPorPagina}
                    totalItems={gastos.length}
                    paginaActual={paginaActual}
                    actualizarPaginaActual={actualizarPaginaActual}
                />
            ) : null}
        </Fragment>
    );
}

ListadoGasto.propTypes = {
    gastos: PropTypes.array.isRequired,
};
