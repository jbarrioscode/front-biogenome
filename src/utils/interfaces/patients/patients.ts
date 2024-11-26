export interface IPatients {
    id: Number,
    tipo_doc: String,
    numero_documento: String,
    grupo_sanguineo: String,
    email: String,
    telefono_celular: Number
}

export interface IPatientInformedConsent {
    tipo_consentimiento_informado_id: number;
    paciente_id: number;
    firma: string; // Puede ser base64 u otro formato
    nombre_completo: string;
    tipo_documento: string; // Ejemplo: "CC", "TI", "PASAPORTE"
    documento: string; // Número de documento en formato string
    relacion_sujeto: string; // Ejemplo: "Padre", "Madre", "Tutor"
    direccion: string; // Dirección completa del firmante
    firmante_id: number; // ID del firmante en el sistema
}