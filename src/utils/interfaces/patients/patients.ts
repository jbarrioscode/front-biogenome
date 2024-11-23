export interface IPatients {
    id: Number,
    tipo_doc: String,
    numero_documento: String,
    grupo_sanguineo: String,
    email: String,
    telefono_celular: Number
}

export interface IPatientInformedConsent {
    tipo_consentimiento_informado_id: Number,
    paciente_id: Number,
    firma: String
}