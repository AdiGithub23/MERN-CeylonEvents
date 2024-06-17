import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:4000/api/v1/message/send", 
      { name, email, subject, message },
      // { withCredentials: true, headers: {"Content-Type": "application/json"}}
    )
    .then((res)=>{
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    })
    .catch((error) => {
      toast.error('Error while sending message', error?.res?.data.message);
    });

  };


  return (
    <>
      <div className="contact container">

        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>247/16 Nidiya Sewana, Kadawatha</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>+94-76-466-9755</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>ceylonevents@gmail.com</p>
          </div>
        </div>

        <div className="banner">
          <div className="item">
            <iframe src="https://www.google.com/maps/embed?pb=!4v1718639806301!6m8!1m7!1suV_bNmklygZdDNJZRNMp2g!2m2!1d7.019887359968097!2d79.95231166890912!3f139.28516296693107!4f-1.309700893074492!5f0.5034588712777969" 
              width="600" 
              height="450" 
              style={{ border: 0, width: "100%", height: "450px" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="item">
            <form 
            onSubmit={handleSendMessage}
            >
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact