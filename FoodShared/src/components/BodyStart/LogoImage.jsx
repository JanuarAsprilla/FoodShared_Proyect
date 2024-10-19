import { BodyImage } from './BodyStart'

const LogoImage = (props) => {
  return (
    <>
      <BodyImage
        src={props.src}
        alt={props.alt}
        margin={props.margin}
        width={props.width}
        height={props.height}
      />
    </>
  )
}

export default LogoImage
