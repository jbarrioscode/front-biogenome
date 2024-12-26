export const positions = {
    "status": "Success",
    "statusCode": 200,
    "counter": 1,
    "message": "ok",
    "data": [
        {
            "id": 1,
            "created_at": "2024-12-03T00:00:00.000000Z",
            "updated_at": "2024-12-03T00:00:00.000000Z",
            "deleted_at": null,
            "nombre": "CENTRAL",
            "descripcion": "CENTRAL",
            "estantes": [
                {
                    "id": 1,
                    "created_at": "2024-12-03T00:00:00.000000Z",
                    "updated_at": "2024-12-03T00:00:00.000000Z",
                    "deleted_at": null,
                    "nombre": "ESTANTE A",
                    "descripcion": "ESTANTE A",
                    "ubicacion_bio_bancos_id": 1,
                    "cajas": [
                        {
                            "id": 1,
                            "created_at": "2024-12-03T00:00:00.000000Z",
                            "updated_at": "2024-12-03T00:00:00.000000Z",
                            "deleted_at": null,
                            "descripcion": "CAJA A",
                            "nevera_estante_id": 1,
                            "positions": [
                                {
                                    "num_fila": "1",
                                    "num_columna": "A",
                                },
                                {
                                    "num_fila": "1",
                                    "num_columna": "B",
                                },
                                {
                                    "num_fila": "1",
                                    "num_columna": "C",
                                }
                            ]
                        },

                    ]
                }
            ]
        }
    ]
}