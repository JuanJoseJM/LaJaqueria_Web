import LogoutButton from "./LogoutButton";
import SociosTable from "./SociosTable";
import CuotasTable from "./CuotasTable";
import CrearCuotaForm from "./CrearCuotaForm";
import DescargarPDFButton from "./DescargarPDFButton";
import CrearEventoForm from "./CrearEventoForm";
import EventosTable from "./EventosTable";
import { useState } from "react";

export default function Dashboard() {
    const [refrescarCuotas, setRefrescarCuotas] = useState(false);
    const [refrescarEventos, setRefrescarEventos] = useState(false);

    const handleNuevaCuota = () => {
        setRefrescarCuotas(!refrescarCuotas);
    };

    const handleNuevoEvento = () => {
        setRefrescarEventos(!refrescarEventos);
    };

    return (
        <div>
            <h1>Panel de Administración</h1>
            <LogoutButton />

            <h2>Socios</h2>
            <DescargarPDFButton />
            <SociosTable />

            <h2>Cuotas</h2>
            <CrearCuotaForm onCuotaCreada={handleNuevaCuota} />
            <CuotasTable key={refrescarCuotas} />

            <h2>Eventos</h2>
            <CrearEventoForm onEventoCreado={handleNuevoEvento} />
            <EventosTable key={refrescarEventos} />
        </div>
    );
}S