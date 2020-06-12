import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";
import { colorAlertaRestante } from "../scripts/helpers";

export default function ControlPresupuesto({ presupuesto, restante }) {
    return (
        <Fragment>
            <p className="text-center font-weight-bold">Presupuesto:</p>
            <Alert color="primary">Inicial: $ {presupuesto}</Alert>
            <Alert color={colorAlertaRestante(presupuesto, restante)}>Restante: $ {restante}</Alert>
        </Fragment>
    );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired,
};
