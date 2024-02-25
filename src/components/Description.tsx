import '@/styles/description.css'

interface Props {
    title: string
    text : string
}
export const Description = ( { title, text } : Props) => {
  return (
    <article className='article'>
        <h3>{title}</h3>
        <p>{text}</p>
    </article>
  )
}
