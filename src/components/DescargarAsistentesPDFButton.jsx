import axios from "../api/axiosConfig";

export default function DescargarAsistentesPDFButton({ eventoId }) {
    const descargarPDF = async () => {
        try {
            const response = await axios.get(`/eventos/${eventoId}/pdf`, {
                responseType: "blob"
            });
            const url = window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `asistentes_evento_${eventoId}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            alert("Error al descargar el PDF de asistentes");
        }
    };

    return <button onClick={descargarPDF}>PDF Asistentes</button>;
}