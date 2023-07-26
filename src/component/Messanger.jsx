import React,{forwardRef} from 'react'
import "../web/Style.css"

const Messanger =forwardRef(({message,username},ref) =>{
  const isUser = username ===message.username
  return (
    
    <div ref={ref} className= {`message  ${isUser && 'message__user'}`}>
          <div className={isUser ? "message__userCard" : "message__guestCard"}>

      <h2>{!isUser && `${message.username || "Unknown user"}: `}{message.message}</h2>
          </div>
    </div>
    
  )
})

export default Messanger
