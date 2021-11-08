import React , {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import sanityClient from '../../client'
import BlockContent from "@sanity/block-content-to-react";


import Loading from '../../components/Loading/Loading.js';
import Layout from '../../components/Layout';
import './Styles.css'



const KulupSingle = () => {
  const [singlePost, setSinglePost] = useState([])
  const [loading, setloading] = useState(true)
  const { slug } = useParams();

  useEffect(() => {
    
    sanityClient.fetch(`*[slug.current == "${slug}" ]{
        title,
        _id,
        content,
        kaynak,
        kaynak2,
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
              <div className="header">Kaynak</div>
              <div className="block"></div>
              { singlePost.kaynak ?  
              <div className="message">{singlePost.kaynak}</div>
              :
              <div className="submessage">Götüm</div>}
          </div>
          {singlePost.kaynak2 ?
          <div className="klup__left__top">
              <div className="header">Kaynak</div>
              <div className="block"></div>
              <div className="message">{singlePost.kaynak2}</div>
          </div>
            : null }
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

export default KulupSingle