import React , {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import sanityClient from '../../client'
import ImageUrlBuilder from '@sanity/image-url';
import BlockContent from "@sanity/block-content-to-react";


import Loading from '../../components/Loading/Loading.js';
import Layout from '../../components/Layout';
import './Styles.css'

// const builder = ImageUrlBuilder(sanityClient)
// function urlFor(source) {
//   return builder.image(source)
// }


const Takim = () => {
  const [singlePost, setSinglePost] = useState([])
  const [loading, setloading] = useState(true)
  const { slug } = useParams();

  useEffect(() => {
    
    sanityClient.fetch(`*[slug.current == "${slug}" ]{
        title,
        _id,
        content,
        yonetim,
        altyapi,
        slug,
        publishedAt,
        "imageUrl": mainImage1.asset->url,
        "imageUrl2": mainImage2.asset->url,
        "imageUrl3": mainImage3.asset->url,
        bodyOne,
        bodyTwo,
        bodyThree,
        }`).then((data) => setSinglePost(data[0]),
        setloading(false)
        )
        .catch((err) => console.log(err))
    
  }, [slug])

  if (loading) return (<Loading />);

  return (
    <Layout>
      <div className="singlePage">  
        <div className="singlePage__aside">
          <div className="klup__left__top">
              <div className="header">Kulup Yönetimi</div>
              <div className="block"></div>
              <div className="message">{singlePost.yonetim}</div>
              <div className="submessage">Üç aylık durum</div>
            </div>
            <div  className="klup__left__middle">
              <div className="header">Altyapı</div>
              <div className="block"></div>
              <div className="message">{singlePost.altyapi}</div>
              <div className="submessage">Güncel</div>                 
            </div>
        </div>
        <div className="singlePage__main">
          <div className="singlePage__header">
            <h1 className="singlePage__head"> {singlePost.title} </h1>
            <h4 className="singlePage__subtitle"> {singlePost.content} </h4>
            <p className="singlePage__time"> {new Date(singlePost.publishedAt).toLocaleDateString()} </p>
          </div>
          <div className="singlePage__content">
            <div className="singlePage__body">
              <BlockContent 
                blocks={singlePost.bodyOne}
                projectId="tmiy5cbg"
                dataset="production"
              />
              { singlePost.imageUrl ? 
              <img src={singlePost.imageUrl} alt="" 
              className="foto" />
              : null }
              <BlockContent 
                blocks={singlePost.bodyTwo}
                projectId="tmiy5cbg"
                dataset="production"
              />
              { singlePost.imageUrl2 ? 
              <img src={singlePost.imageUrl2} alt="" 
              className="foto" />
              : null }
              <BlockContent 
                blocks={singlePost.bodyThree}
                projectId="tmiy5cbg"
                dataset="production"
              />
              { singlePost.imageUrl3 ? 
              <img src={singlePost.imageUrl3} alt="" 
              className="foto" />
              : null }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Takim
