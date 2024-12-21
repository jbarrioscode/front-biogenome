export const clinicalInformationTabs = [
    /*{
        name: 'Evolución',
        value: 1,
        status: true,
        children: []
    },*/
    {
        name: 'Antecedentes',
        value: 2,
        status: false,
        children: [
            /*{
                name: 'Hallazgos',
                value: 3,
                status: true
            },*/
            {
                name: 'Patologicos',
                value: 4,
                status: true
            },
            {
                name: 'Farmacológicos',
                value: 5,
                status: true
            },
            /*{
                name: 'Otros Labs',
                value: 6,
                status: true
            },*/
            /*{
                name: 'Otros Antecedentes',
                value: 7,
                status: true
            },*/
        ]
    },
    {
        name: 'Laboratorios',
        value: 8,
        status: false,
        children: [
            {
                name: 'Hematológicos',
                value: 9,
                status: true
            },
            {
                name: 'Bioquímico',
                value: 10,
                status: true
            },
            {
                name: 'Hormonales',
                value: 11,
                status: true
            },
        ]
    },
    {
        name: 'Imágenes',
        value: 12,
        status: true,
        children: []
    },
    {
        name: 'Anexos',
        value: 13,
        status: true,
    },
]