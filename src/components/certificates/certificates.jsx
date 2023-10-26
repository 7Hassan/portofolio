
import "./certificates.scss";
import { useState } from "react";
import { certificates } from "../../db/certificates";

export default function Certificates() {
  const [certificate, setCertificate] = useState(certificates[0])

  return <div className="certificates w-[100%]" id="certificates">
    <h1 className="head-sec">Certificates</h1>
    <div className="certificates-container">
      <div className="info">
        <div className="title">
          <h2>{certificate.name}</h2>
          <div className="text" >
            {certificate.desc}
          </div>
        </div>
        <div className="imgs-container">
          <div id="slide">
            {
              certificates.map((cert) => {
                return (
                  <div className={`item ${cert.name === certificate.name && 'show'}`}
                    key={cert.url}
                    onClick={() => { setCertificate(cert) }}>
                    <img src={cert.url} alt="certificate" />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div >

  </div >

}

