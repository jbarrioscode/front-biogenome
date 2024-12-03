export const QUESTION_FORM = {
    "status": "Success",
    "statusCode": 200,
    "counter": 4,
    "message": "ok",
    "data": [
        {
            "id": 1,
            "created_at": "2024-10-26T00:00:00.000000Z",
            "updated_at": "2024-10-26T00:00:00.000000Z",
            "deleted_at": null,
            "nombre": "DEMOGRAFÍA:",
            "descripcion": "DEMOGRAFÍA:",
            "orden_grupo": 1,
            "protocolo_id": 1,
            "preguntas": [
                {
                    "orden_pregunta": 1,
                    "nombre_pregunta": "Altura",
                    "descripcion_pregunta": "ALTURA",
                    "id_pregunta": 1,
                    "id_tipo_pregunta": 1,
                    "tipo_pregunta": "INPUT",
                    "fileJson": null,
                    "opciones": [],
                    "propiedades": [
                        {
                            "parametro": "placeholder",
                            "pregunta_id": 1,
                            "propiedad": "Ingrese la altura"
                        },
                        {
                            "parametro": "class",
                            "pregunta_id": 1,
                            "propiedad": "form-control"
                        },
                        {
                            "parametro": "class-label",
                            "pregunta_id": 1,
                            "propiedad": "col-form-label"
                        },
                        {
                            "parametro": "type",
                            "pregunta_id": 1,
                            "propiedad": "number"
                        },
                        {
                            "parametro": "min",
                            "pregunta_id": 1,
                            "propiedad": "0"
                        },
                        {
                            "parametro": "max",
                            "pregunta_id": 1,
                            "propiedad": "1000"
                        },
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 1,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 1,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 2,
                    "nombre_pregunta": "Peso",
                    "descripcion_pregunta": "PESO",
                    "id_pregunta": 2,
                    "id_tipo_pregunta": 1,
                    "tipo_pregunta": "INPUT",
                    "fileJson": null,
                    "opciones": [],
                    "propiedades": [
                        {
                            "parametro": "placeholder",
                            "pregunta_id": 2,
                            "propiedad": "Ingrese la altura"
                        },
                        {
                            "parametro": "class",
                            "pregunta_id": 2,
                            "propiedad": "form-control"
                        },
                        {
                            "parametro": "class-label",
                            "pregunta_id": 2,
                            "propiedad": "col-form-label"
                        },
                        {
                            "parametro": "type",
                            "pregunta_id": 2,
                            "propiedad": "number"
                        },
                        {
                            "parametro": "min",
                            "pregunta_id": 2,
                            "propiedad": "0"
                        },
                        {
                            "parametro": "max",
                            "pregunta_id": 2,
                            "propiedad": "1000"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 2,
                            "propiedad": "12"
                        },
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 2,
                            "propiedad": "6"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 3,
                    "nombre_pregunta": "¿Te consideras parte de alguna de las siguientes etnias?",
                    "descripcion_pregunta": "ETNIA",
                    "id_pregunta": 3,
                    "id_tipo_pregunta": 2,
                    "tipo_pregunta": "SELECTOR",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 1,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "AFRO",
                            "pregunta_id": 3
                        },
                        {
                            "id": 2,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "MESTIZO",
                            "pregunta_id": 3
                        },
                        {
                            "id": 3,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "BLANCO",
                            "pregunta_id": 3
                        },
                        {
                            "id": 4,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "ASIÁTICO",
                            "pregunta_id": 3
                        },
                        {
                            "id": 5,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "PUEBLOS INDÍGENAS",
                            "pregunta_id": 3
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 3,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 3,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 4,
                    "nombre_pregunta": "¿Dónde naciste? (País)",
                    "descripcion_pregunta": "¿Dónde naciste? (País)",
                    "id_pregunta": 4,
                    "id_tipo_pregunta": 2,
                    "tipo_pregunta": "SELECTOR",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 6,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "COLOMBIA",
                            "pregunta_id": 4
                        },
                        {
                            "id": 7,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "VENEZUELA",
                            "pregunta_id": 4
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 4,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 4,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 5,
                    "nombre_pregunta": "¿Dónde naciste? (ciudad)",
                    "descripcion_pregunta": "¿Dónde naciste? (ciudad)",
                    "id_pregunta": 5,
                    "id_tipo_pregunta": 2,
                    "tipo_pregunta": "SELECTOR",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 8,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "COLOMBIA",
                            "pregunta_id": 5
                        },
                        {
                            "id": 9,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "VENEZUELA",
                            "pregunta_id": 5
                        },
                        {
                            "id": 101,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "Barranquilla",
                            "pregunta_id": 5
                        }
                    ],
                    "propiedades": [],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 6,
                    "nombre_pregunta": "¿Cuál es su ciudad de residencia actual? ",
                    "descripcion_pregunta": "¿Cuál es su ciudad de residencia actual? ",
                    "id_pregunta": 10,
                    "id_tipo_pregunta": 2,
                    "tipo_pregunta": "SELECTOR",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 102,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "Bogota",
                            "pregunta_id": 10
                        }
                    ],
                    "propiedades": [],
                    "subpreguntas": []
                }
            ]
        },
        {
            "id": 2,
            "created_at": "2024-10-26T00:00:00.000000Z",
            "updated_at": "2024-10-26T00:00:00.000000Z",
            "deleted_at": null,
            "nombre": "CONDUCTAS DE SALUD:",
            "descripcion": "A continuación, te haremos una serie de preguntas orientadas a entender tus hábitos de salud. Todas sus respuestas serán confidenciales. Por favor, sea honesto",
            "orden_grupo": 2,
            "protocolo_id": 1,
            "preguntas": [
                {
                    "orden_pregunta": 7,
                    "nombre_pregunta": "¿Eres fumador o has sido fumador toda tu vida?",
                    "descripcion_pregunta": "¿Eres fumador o has sido fumador toda tu vida?",
                    "id_pregunta": 8,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 10,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "FUMADOR",
                            "pregunta_id": 8
                        },
                        {
                            "id": 11,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "EX-FUMADOR",
                            "pregunta_id": 8
                        },
                        {
                            "id": 12,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NUNCA HE FUMADO",
                            "pregunta_id": 8
                        },
                        {
                            "id": 13,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "DESCONOCIDO",
                            "pregunta_id": 8
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 8,
                            "propiedad": "6"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 8,
                    "nombre_pregunta": "¿Tiene presión arterial alta?",
                    "descripcion_pregunta": "¿Tiene presión arterial alta?",
                    "id_pregunta": 9,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 14,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI",
                            "pregunta_id": 9
                        },
                        {
                            "id": 15,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 9
                        },
                        {
                            "id": 16,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 9
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 9,
                            "propiedad": "6"
                        }
                    ],
                    "subpreguntas": [
                        {
                            "nombre_subpregunta": "¿Estás tomando algún medicamento para controlarla? Cuál:",
                            "id_subpregunta": 1,
                            "condicion_seleccion": "Si",
                            "id_tipo_pregunta": 2,
                            "tipo_pregunta": "SELECTOR",
                            "propriedadesSubPregunta": [
                                {
                                    "parametro": "placeholder",
                                    "sub_pregunta_id": 1,
                                    "propiedad": "Ingrese SubPregunta"
                                },
                                {
                                    "parametro": "type",
                                    "sub_pregunta_id": 1,
                                    "propiedad": "number"
                                },
                                {
                                    "parametro": "fileJson",
                                    "sub_pregunta_id": 1,
                                    "propiedad": "drugList"
                                }
                            ]
                        }
                    ]
                },
                {
                    "orden_pregunta": 9,
                    "nombre_pregunta": "¿Tienes niveles altos de colesterol? ",
                    "descripcion_pregunta": "¿Tienes niveles altos de colesterol? ",
                    "id_pregunta": 11,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 17,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI",
                            "pregunta_id": 11
                        },
                        {
                            "id": 18,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 11
                        },
                        {
                            "id": 19,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 11
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 11,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 11,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 10,
                    "nombre_pregunta": "¿Con qué frecuencia consumes bebidas alcohólicas?",
                    "descripcion_pregunta": "¿Con qué frecuencia consumes bebidas alcohólicas?",
                    "id_pregunta": 12,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 20,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NUNCA",
                            "pregunta_id": 12
                        },
                        {
                            "id": 21,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "MENSUAL",
                            "pregunta_id": 12
                        },
                        {
                            "id": 22,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "2 -4 VECES / MES",
                            "pregunta_id": 12
                        },
                        {
                            "id": 23,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "2 -3 VECES / SEMANA",
                            "pregunta_id": 12
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 12,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 12,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 11,
                    "nombre_pregunta": "Su madre tiene una afección o enfermedad crónica no transmisible (¿Hipertensión Arterial, Diabetes Mellitus, Cáncer, Enfermedad Renal Crónica, etc.?",
                    "descripcion_pregunta": "Su madre tiene una afección o enfermedad crónica no transmisible (¿Hipertensión Arterial, Diabetes Mellitus, Cáncer, Enfermedad Renal Crónica, etc.?",
                    "id_pregunta": 13,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 24,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI",
                            "pregunta_id": 13
                        },
                        {
                            "id": 26,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 13
                        },
                        {
                            "id": 25,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 13
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 13,
                            "propiedad": "4"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 13,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 12,
                    "nombre_pregunta": "Su Padre tiene una afección o enfermedad crónica no transmisible (¿Hipertensión Arterial, Diabetes Mellitus, Cáncer, Enfermedad Renal Crónica, etc.?",
                    "descripcion_pregunta": "Su Padre tiene una afección o enfermedad crónica no transmisible (¿Hipertensión Arterial, Diabetes Mellitus, Cáncer, Enfermedad Renal Crónica, etc.?",
                    "id_pregunta": 14,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 27,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI",
                            "pregunta_id": 14
                        },
                        {
                            "id": 28,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 14
                        },
                        {
                            "id": 29,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 14
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 14,
                            "propiedad": "4"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 14,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 13,
                    "nombre_pregunta": "Su Hermano tiene una afección o enfermedad crónica no transmisible (¿Hipertensión Arterial, Diabetes Mellitus, Cáncer, Enfermedad Renal Crónica, etc.?",
                    "descripcion_pregunta": "Su Hermano tiene una afección o enfermedad crónica no transmisible (¿Hipertensión Arterial, Diabetes Mellitus, Cáncer, Enfermedad Renal Crónica, etc.?",
                    "id_pregunta": 15,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 30,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI",
                            "pregunta_id": 15
                        },
                        {
                            "id": 31,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 15
                        },
                        {
                            "id": 32,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 15
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 15,
                            "propiedad": "4"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 15,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                }
            ]
        },
        {
            "id": 3,
            "created_at": "2024-10-26T00:00:00.000000Z",
            "updated_at": "2024-10-26T00:00:00.000000Z",
            "deleted_at": null,
            "nombre": "INFORMACIÓN DE SALUD:",
            "descripcion": "",
            "orden_grupo": 3,
            "protocolo_id": 1,
            "preguntas": [
                {
                    "orden_pregunta": 14,
                    "nombre_pregunta": "¿Alguna vez su médico le ha diagnosticado enfermedades cardíacas y/o cardiovasculares (por \tejemplo, \tenfermedades \tcardíacas, \tcomo \tataques \tcardíacos, \taccidentes cerebrovasculares o insuficiencia cardíaca)?",
                    "descripcion_pregunta": "¿Alguna vez su médico le ha diagnosticado enfermedades cardíacas y/o cardiovasculares (por \tejemplo, \tenfermedades \tcardíacas, \tcomo \tataques \tcardíacos, \taccidentes cerebrovasculares o insuficiencia cardíaca)?",
                    "id_pregunta": 16,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 33,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI",
                            "pregunta_id": 16
                        },
                        {
                            "id": 34,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 16
                        },
                        {
                            "id": 35,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 16
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 16,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 16,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 15,
                    "nombre_pregunta": "¿Alguna vez su médico le ha diagnosticado enfermedades pulmonares?",
                    "descripcion_pregunta": "¿Alguna vez su médico le ha diagnosticado enfermedades pulmonares?",
                    "id_pregunta": 17,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 36,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI",
                            "pregunta_id": 17
                        },
                        {
                            "id": 37,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 17
                        },
                        {
                            "id": 38,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 17
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 17,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 17,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 16,
                    "nombre_pregunta": "¿Alguna vez su médico le ha diagnosticado enfermedades endocrinas o metabólicas (por ejemplo, diabetes, trastornos del colesterol, enfermedades de la tiroides, etc.)?",
                    "descripcion_pregunta": "¿Alguna vez su médico le ha diagnosticado enfermedades endocrinas o metabólicas (por ejemplo, diabetes, trastornos del colesterol, enfermedades de la tiroides, etc.)?",
                    "id_pregunta": 18,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 39,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI",
                            "pregunta_id": 18
                        },
                        {
                            "id": 40,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 18
                        },
                        {
                            "id": 41,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 18
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 18,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 18,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 17,
                    "nombre_pregunta": "¿Alguna vez le han diagnosticado enfermedades digestivas y/o hepáticas (estómago y/o intestinos; y/o hígado)?",
                    "descripcion_pregunta": "¿Alguna vez le han diagnosticado enfermedades digestivas y/o hepáticas (estómago y/o intestinos; y/o hígado)?",
                    "id_pregunta": 19,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 42,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI, DIGESTIVO (ESTÓMAGO Y/O INTESTINOS)",
                            "pregunta_id": 19
                        },
                        {
                            "id": 45,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 19
                        },
                        {
                            "id": 46,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 19
                        },
                        {
                            "id": 43,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI, HEPÁTICA (HIGADO)",
                            "pregunta_id": 19
                        },
                        {
                            "id": 44,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI, AMBOS",
                            "pregunta_id": 19
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 19,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 19,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 18,
                    "nombre_pregunta": "¿Alguna vez le han diagnosticado enfermedades renales?",
                    "descripcion_pregunta": "¿Alguna vez le han diagnosticado enfermedades renales?",
                    "id_pregunta": 20,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 47,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI",
                            "pregunta_id": 20
                        },
                        {
                            "id": 48,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 20
                        },
                        {
                            "id": 49,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 20
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 20,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 20,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 19,
                    "nombre_pregunta": "¿Alguna vez le han diagnosticado enfermedades neurológicas (por ejemplo, esclerosis múltiple, Alzheimer, Parkinson) y/o mentales (por ejemplo, depresión)?",
                    "descripcion_pregunta": "¿Alguna vez le han diagnosticado enfermedades neurológicas (por ejemplo, esclerosis múltiple, Alzheimer, Parkinson) y/o mentales (por ejemplo, depresión)?",
                    "id_pregunta": 21,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 50,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI",
                            "pregunta_id": 21
                        },
                        {
                            "id": 51,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 21
                        },
                        {
                            "id": 52,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 21
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 21,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 21,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 20,
                    "nombre_pregunta": "¿Alguna vez te han diagnosticado enfermedades dermatológicas (de la piel)?",
                    "descripcion_pregunta": "¿Alguna vez te han diagnosticado enfermedades dermatológicas (de la piel)?",
                    "id_pregunta": 22,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 53,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI",
                            "pregunta_id": 22
                        },
                        {
                            "id": 54,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 22
                        },
                        {
                            "id": 55,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 22
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 22,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 22,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 21,
                    "nombre_pregunta": "¿Alguna vez le han diagnosticado enfermedades reumáticas (por ejemplo, artritis)?",
                    "descripcion_pregunta": "¿Alguna vez le han diagnosticado enfermedades reumáticas (por ejemplo, artritis)?",
                    "id_pregunta": 23,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 56,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI",
                            "pregunta_id": 23
                        },
                        {
                            "id": 57,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 23
                        },
                        {
                            "id": 58,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 23
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 23,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 23,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 22,
                    "nombre_pregunta": "¿Ha recibido un diagnóstico de cáncer de su médico en los últimos 5 años?",
                    "descripcion_pregunta": "¿Ha recibido un diagnóstico de cáncer de su médico en los últimos 5 años? ",
                    "id_pregunta": 24,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 59,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI",
                            "pregunta_id": 24
                        },
                        {
                            "id": 60,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 24
                        },
                        {
                            "id": 61,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 24
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 24,
                            "propiedad": "4"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 24,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": [
                        {
                            "nombre_subpregunta": "¿De qué tipo?",
                            "id_subpregunta": 2,
                            "condicion_seleccion": "Si",
                            "id_tipo_pregunta": 2,
                            "tipo_pregunta": "SELECTOR",
                            "propriedadesSubPregunta": []
                        }
                    ]
                },
                {
                    "orden_pregunta": 23,
                    "nombre_pregunta": "¿Alguna vez tu médico te ha diagnosticado alguna de las siguientes afecciones?",
                    "descripcion_pregunta": "¿Alguna vez tu médico te ha diagnosticado alguna de las siguientes afecciones?",
                    "id_pregunta": 25,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 62,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SÍNDROME DE INMUNODEFICIENCIA ADQUIRIDA (SIDA)",
                            "pregunta_id": 25
                        },
                        {
                            "id": 63,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "CHAGAS",
                            "pregunta_id": 25
                        },
                        {
                            "id": 64,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "DENGUE",
                            "pregunta_id": 25
                        },
                        {
                            "id": 65,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "FIEBRE AMARILLA",
                            "pregunta_id": 25
                        },
                        {
                            "id": 66,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "CHIKUNGUNYA",
                            "pregunta_id": 25
                        },
                        {
                            "id": 67,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO ME HAN DIAGNOSTICADO NINGUNO DE LOS ANTERIORES",
                            "pregunta_id": 25
                        },
                        {
                            "id": 68,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SÉ",
                            "pregunta_id": 25
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 25,
                            "propiedad": "4"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 25,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 24,
                    "nombre_pregunta": "¿Te has hecho análisis de sangre en los últimos 6 meses?",
                    "descripcion_pregunta": "¿Te has hecho análisis de sangre en los últimos 6 meses?",
                    "id_pregunta": 26,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 69,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI",
                            "pregunta_id": 26
                        },
                        {
                            "id": 70,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 26
                        },
                        {
                            "id": 71,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 26
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 26,
                            "propiedad": "4"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 26,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                }
            ]
        },
        {
            "id": 4,
            "created_at": "2024-10-26T00:00:00.000000Z",
            "updated_at": "2024-10-26T00:00:00.000000Z",
            "deleted_at": null,
            "nombre": "Información de salud relacionada con el COVID-19",
            "descripcion": "D. Información de salud relacionada con el COVID-19",
            "orden_grupo": 4,
            "protocolo_id": 1,
            "preguntas": [
                {
                    "orden_pregunta": 25,
                    "nombre_pregunta": "¿Alguna vez ha tenido un resultado positivo en la prueba del virus que causa el COVID-19",
                    "descripcion_pregunta": "¿Alguna vez ha tenido un resultado positivo en la prueba del virus que causa el COVID-19",
                    "id_pregunta": 27,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 72,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI",
                            "pregunta_id": 27
                        },
                        {
                            "id": 73,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 27
                        },
                        {
                            "id": 74,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 27
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 27,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 27,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 26,
                    "nombre_pregunta": "¿Te has vacunado contra el virus COVID-19?",
                    "descripcion_pregunta": "¿Te has vacunado contra el virus COVID-19?",
                    "id_pregunta": 28,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 75,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "SI",
                            "pregunta_id": 28
                        },
                        {
                            "id": 76,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO",
                            "pregunta_id": 28
                        },
                        {
                            "id": 77,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "NO SE",
                            "pregunta_id": 28
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 28,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 28,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                },
                {
                    "orden_pregunta": 27,
                    "nombre_pregunta": "Si se ha vacunado, ¿qué vacuna recibió? ",
                    "descripcion_pregunta": "Si se ha vacunado, ¿qué vacuna recibió? ",
                    "id_pregunta": 29,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 78,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "Pfizer",
                            "pregunta_id": 29
                        },
                        {
                            "id": 79,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "Janssen (J&J",
                            "pregunta_id": 29
                        },
                        {
                            "id": 80,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "AstraZeneca",
                            "pregunta_id": 29
                        },
                        {
                            "id": 81,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "Moderna",
                            "pregunta_id": 29
                        },
                        {
                            "id": 82,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "Sputnik",
                            "pregunta_id": 29
                        },
                        {
                            "id": 83,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "Sinovac",
                            "pregunta_id": 29
                        },
                        {
                            "id": 84,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "No aplica",
                            "pregunta_id": 29
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 29,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 29,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": [
                        {
                            "nombre_subpregunta": "¿Cuántas dosis ha recibido? ",
                            "id_subpregunta": 3,
                            "condicion_seleccion": "<> No aplica",
                            "id_tipo_pregunta": 1,
                            "tipo_pregunta": "INPUT",
                            "propriedadesSubPregunta": [
                                {
                                    "parametro": "type",
                                    "sub_pregunta_id": 3,
                                    "propiedad": "number"
                                },
                                {
                                    "parametro": "placeholder",
                                    "sub_pregunta_id": 3,
                                    "propiedad": "# Dosis"
                                }
                            ]
                        }
                    ]
                },
                {
                    "orden_pregunta": 28,
                    "nombre_pregunta": "Si tuvo un resultado positivo para COVID-19, ¿cuánto tiempo tardó o está tardando en recuperarse desde el momento en que se enteró de su diagnóstico de COVID-19?",
                    "descripcion_pregunta": "Si tuvo un resultado positivo para COVID-19, ¿cuánto tiempo tardó o está tardando en recuperarse desde el momento en que se enteró de su diagnóstico de COVID-19?",
                    "id_pregunta": 32,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 96,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "2 - 4 Semanas",
                            "pregunta_id": 32
                        },
                        {
                            "id": 97,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "4 -8 Semanas",
                            "pregunta_id": 32
                        },
                        {
                            "id": 98,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "8 - 12 Semanas",
                            "pregunta_id": 32
                        },
                        {
                            "id": 99,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "Mas de 12 semanas",
                            "pregunta_id": 32
                        },
                        {
                            "id": 95,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "1 Semana",
                            "pregunta_id": 32
                        },
                        {
                            "id": 100,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "No aplica",
                            "pregunta_id": 32
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 32,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 32,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": [
                        {
                            "nombre_subpregunta": "Si respondió con la opción e. (más de 12 semanas); anote en el diagrama cuáles de los síntomas aún persisten o persisten después de 12 semanas desde que se enteró de su diagnóstico de COVID-19 (todos los que se aplican de los 50 más comunes, o agregue ",
                            "id_subpregunta": 5,
                            "condicion_seleccion": "Si",
                            "id_tipo_pregunta": 2,
                            "tipo_pregunta": "SELECTOR",
                            "propriedadesSubPregunta": [
                                {
                                    "parametro": "fileJson",
                                    "sub_pregunta_id": 5,
                                    "propiedad": "symptomsList"
                                }
                            ]
                        }
                    ]
                },
                {
                    "orden_pregunta": 28,
                    "nombre_pregunta": "Si tuvo un resultado positivo para COVID-19, ¿experimentó síntomas de esta afección? ",
                    "descripcion_pregunta": "Si tuvo un resultado positivo para COVID-19, ¿experimentó síntomas de esta afección? ",
                    "id_pregunta": 30,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 85,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "Si",
                            "pregunta_id": 30
                        },
                        {
                            "id": 86,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "No",
                            "pregunta_id": 30
                        },
                        {
                            "id": 87,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "No se",
                            "pregunta_id": 30
                        },
                        {
                            "id": 88,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "No aplica",
                            "pregunta_id": 30
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 30,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 30,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": [
                        {
                            "nombre_subpregunta": "¿qué síntomas tuvo? (tenga en cuenta en el diagrama a continuación todos los que se aplican de los 50 más comunes, o agregue cualquier síntoma adicional que haya experimentado personalmente) ",
                            "id_subpregunta": 4,
                            "condicion_seleccion": "Si",
                            "id_tipo_pregunta": 2,
                            "tipo_pregunta": "SELECTOR",
                            "propriedadesSubPregunta": [
                                {
                                    "parametro": "fileJson",
                                    "sub_pregunta_id": 4,
                                    "propiedad": "symptomsList"
                                }
                            ]
                        }
                    ]
                },
                {
                    "orden_pregunta": 28,
                    "nombre_pregunta": "¿Alguna vez ha sido hospitalizado debido al COVID-19?",
                    "descripcion_pregunta": "¿Alguna vez ha sido hospitalizado debido al COVID-19?",
                    "id_pregunta": 31,
                    "id_tipo_pregunta": 4,
                    "tipo_pregunta": "RADIOBUTTON",
                    "fileJson": null,
                    "opciones": [
                        {
                            "id": 90,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "Sí, he estado hospitalizado y fue necesario ingresar a la Unidad de Cuidados Intensivos",
                            "pregunta_id": 31
                        },
                        {
                            "id": 89,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "Sí, he estado hospitalizado y no fue necesario ingresar a la Unidad de Cuidados Intensivos ",
                            "pregunta_id": 31
                        },
                        {
                            "id": 91,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "Sí, he estado hospitalizado, pero no sé si ingresé a la Unidad de Cuidados Intensivos",
                            "pregunta_id": 31
                        },
                        {
                            "id": 92,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "No",
                            "pregunta_id": 31
                        },
                        {
                            "id": 93,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "No se",
                            "pregunta_id": 31
                        },
                        {
                            "id": 94,
                            "created_at": "2024-10-26T00:00:00.000000Z",
                            "updated_at": "2024-10-26T00:00:00.000000Z",
                            "deleted_at": null,
                            "opcion": "No aplica",
                            "pregunta_id": 31
                        }
                    ],
                    "propiedades": [
                        {
                            "parametro": "colsWidthXL",
                            "pregunta_id": 31,
                            "propiedad": "6"
                        },
                        {
                            "parametro": "colsWidthSM",
                            "pregunta_id": 31,
                            "propiedad": "12"
                        }
                    ],
                    "subpreguntas": []
                }
            ]
        }
    ]
}