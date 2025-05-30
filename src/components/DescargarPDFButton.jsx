import axios from "../api/axiosConfig";

export default function DescargarPDFButton() {
    const descargarPDF = async () => {
        try {
            const response = await axios.get("/usuarios/pdf", {
                responseType: "blob"
            });
            const url = window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "socios.pdf");
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            alert("No se pudo descargar el PDF");
        }
    };

    return (
        <button onClick={descargarPDF}>Descargar informe PDF</button>
    );
}