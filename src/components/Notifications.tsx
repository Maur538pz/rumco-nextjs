'use client'
import { useNotifications } from '@/hooks/useNotifications'

export const Notifications = () => {
  const { notifications } = useNotifications()
  return (
    <div>
      <h1>Notificaciones</h1>
      <ul>
        {
          notifications.map(notifi => 
          <li key={notifi.id}>
            <strong>{notifi.title}</strong>
            <p>{notifi.text}</p>
          </li>)
        }
      </ul>
    </div>
  )
}
