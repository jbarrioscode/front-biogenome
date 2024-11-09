export interface IInformedConsent {
    name: string
    description?: string
    protocol_id: number | null
    text_body: string
}