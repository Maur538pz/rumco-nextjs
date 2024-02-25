import { KeyObject } from "crypto"

export interface Notification {
    id: string
    type: TypeNotification
    title :string
    text: string
}

export type TypeNotification = keyof typeof TemplateNotification
export const TemplateNotification = {
    correction : {
        title: 'Advertensia',
        text: 'Llene correctamente el formulario'
    },
    error: {
        title: 'Error!',
        text: 'Lo sentimos Hubo un error...'
    },
    send: {
        title: 'Enviado',
        text: 'Mensaje enviado exitosamente!'
    }
}