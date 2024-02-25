'use client'
import { useContext } from 'react'
import { NotificationContext } from '@/context/NotificationsContext'
import { TypeNotification , Notification, TemplateNotification} from '@/interfaces/Notifications'

export const useNotifications = () => {
    const { notifications, setNotification } = useContext(NotificationContext )
    //const context = useContext(NotificationContext)
    //if (!context) throw new Error('Este componente no puede aceder al contexto del useNotifications')

    const addNotification = (type: TypeNotification) => {
      const newNotification: Notification  = {
        id: crypto.randomUUID(),
        type: type,
        title: TemplateNotification[type].title,
        text: TemplateNotification[type].text
      }
      setNotification(prevState => [...prevState,newNotification])

    }

  return {
    notifications,
    addNotification

  }
}
