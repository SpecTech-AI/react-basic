import './ErrorMessage.css'

type Props = {
  message: string
}

function ErrorMessage({ message }: Props) {
  return (
    <div className="error-message">
      <p>エラーが発生しました</p>
      <p className="error-detail">{message}</p>
    </div>
  )
}

export default ErrorMessage
