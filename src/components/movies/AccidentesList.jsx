import React, { useState, useEffect } from "react";
import { Row, Col, Container, Badge, CardTitle } from "reactstrap";
import { getAllAccidentes } from "../../utils/apicalls.js";

import Header from "../Header.jsx";
import RowAccidente from "./RowAccidente.jsx";

export default function MovieList() {
  const [accidentes, setAccidentes] = useState(null);

  const getAccidentes = () => {
    getAllAccidentes().then((accidentes) => {
      setAccidentes(accidentes);
    });
  };

  useEffect(() => {
    getAccidentes();
  }, []);

  return accidentes === null ? (
    <div>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <h1 class="text-white">Loading...</h1>
      </Row>
    </div>
  ) : (
    <div>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Container>
        <CardTitle tag="center">
          <Badge pill color="dark">
            Total accidentes found: {accidentes.length}
          </Badge>
        </CardTitle>
          <table class="table table-sm table-dark">
            <tr style={{position: 'sticky', top: '0', backgroundColor: 'black'}}>
              <th>Fecha</th>
              <th>Localización</th>
              <th>Distrito</th>
              <th>Tipo Accidente</th>
              <th>Tipo Vehículo</th>
              <th>Tipo Persona</th>
              <th>Rango Edad</th>
              <th>Sexo</th>
              <th>Lesividad</th>
              <th>Positiva Alcohol</th>
              <th>Positiva Droga</th>
            </tr>
            {accidentes.map((accidente) => {
              return (
                  <RowAccidente accidente={accidente} />
              );
            })}
            
          </table>
      </Container>
    </div>
  );
}
