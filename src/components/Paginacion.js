import React from "react";
import PropTypes from "prop-types"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default function Paginacion({ itemsPorPagina, totalItems, paginaActual, actualizarPaginaActual }) {
    const numeroPaginas = Array(Math.ceil(totalItems / itemsPorPagina)).fill(1).map((x, y) => x + y);

    return (
        <Pagination>
            {paginaActual !== 1 ? (
                <PaginationItem>
                    <PaginationLink first onClick={() => actualizarPaginaActual(1)} />
                </PaginationItem>
            ) : null}
            <PaginationItem disabled={paginaActual === 1 ? true : false}>
                <PaginationLink previous onClick={() => actualizarPaginaActual(paginaActual - 1)} />
            </PaginationItem>
            {numeroPaginas.map((pagina) => (
                <PaginationItem key={pagina} active={paginaActual === pagina}>
                    <PaginationLink onClick={() => actualizarPaginaActual(pagina)}>{pagina}</PaginationLink>
                </PaginationItem>
            ))}
            <PaginationItem disabled={paginaActual === numeroPaginas.length}>
                <PaginationLink next onClick={() => actualizarPaginaActual(paginaActual + 1)} />
            </PaginationItem>
            {paginaActual !== numeroPaginas.length ? (
                <PaginationItem>
                    <PaginationLink last onClick={() => actualizarPaginaActual(numeroPaginas.length)} />
                </PaginationItem>
            ) : null}
        </Pagination>
    );
}

Paginacion.propTypes = {
	itemsPorPagina: PropTypes.number.isRequired,
	totalItems: PropTypes.number.isRequired,
	paginaActual: PropTypes.number.isRequired,
	actualizarPaginaActual: PropTypes.func.isRequired,
}