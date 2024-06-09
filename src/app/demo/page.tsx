// src/app/demo/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { mockGuias } from "./mockData";

interface Guia {
  id: string;
  status: string;
}

const DemoPage: React.FC = () => {
  const [status, setStatus] = useState("");
  const [guias, setGuias] = useState<Guia[]>([]);

  useEffect(() => {
    const fetchGuias = async () => {
      // Simulando llamada a la API con datos mock
      const filteredGuias = status
        ? mockGuias.filter((guia) => guia.status === status)
        : mockGuias;
      setGuias(filteredGuias);
    };

    fetchGuias();
  }, [status]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Filtrar Guías de Envío
      </Typography>
      <TextField
        select
        label="Estado"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        fullWidth
        margin="normal"
      >
        <MenuItem value="">Todos</MenuItem>
        <MenuItem value="En tránsito">En tránsito</MenuItem>
        <MenuItem value="Entregado">Entregado</MenuItem>
        <MenuItem value="En espera">En espera</MenuItem>
      </TextField>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {guias.map((guia) => (
              <TableRow key={guia.id}>
                <TableCell>{guia.id}</TableCell>
                <TableCell>{guia.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DemoPage;
