import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

import './Loading.css'

const Loading = ({loading, color}) => {
  return (
    <div className="loading">
      <div className="loading__content">
        <h4 className="baslık">
          Orta Saha 'da Hazırlık Pasları Yapılıyor...
        </h4>
        <div className="iconic">
        <ClipLoader color={'#ccc'}  loading={loading} size={50} />
        </div>
      </div>
    </div>
  )
}

export default Loading
