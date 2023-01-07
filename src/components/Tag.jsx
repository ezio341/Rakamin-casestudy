export default function Tag({text, variant}){
  return (
    <div className={`tag s-12 font-weight-400 ${variant}`}>
      {text}
    </div>
  )
}