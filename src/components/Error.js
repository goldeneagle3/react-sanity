import React from 'react'
import RiseLoader from "react-spinners/RiseLoader";

import './Loading/Loading.css'

const Error = ({loading, color}) => {
  return (
    <div className="loading">
      <div className="loading__content">
        <h4 className="baslık">
          Berbat Bir Şuttu ! Hey Biliyorsun Atan Alır ! 
        </h4>
        <div className="iconic">
        <RiseLoader color={'#ccc'}  loading={loading} size={50} />
        </div>
        <a className="back" href="/">Paslaşmaya Geri Dön</a>
      </div>
    </div>
  )
}

export default Error
