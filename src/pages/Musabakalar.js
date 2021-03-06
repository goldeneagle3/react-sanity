import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {HiArrowCircleDown, HiArrowCircleUp} from 'react-icons/hi'
import ReactPaginate  from 'react-paginate'



import sanityClient from '../client.js'
import Layout from '../components/Layout.js'
import Loading from '../components/Loading/Loading.js'

const Musabakalar = () => {
  const [search, setSearch] = useState('')
  const [loading, setloading] = useState(true)
  const [postData, setPostData] = useState([]);
  const [takim, setTakim] = useState(null)
  const [oyuncu, setOyuncu] = useState(null)
  const [content, setContent] = useState(null)
  const [clicked, setclicked] = useState(null)
  const [pageNumber, setPageNumber] = useState(0);


  const usersPerPage = 20;
  const pagesVisited = pageNumber * usersPerPage;

  const toggle = index => {
    if (clicked === index) {
      return setclicked(null)
    }
    setclicked(index)
  }

  useEffect(() => {

      sanityClient
      .fetch(`
      *[_type == "oyuncular"] | order(_createdAt desc){
        title,
        subtitle,
        content,
        lastUpdated,
        slug,
        publishedAt,
      
      }`).then((data) => setOyuncu(data),
      setloading(false)).catch((err) => console.log(err))

      sanityClient
      .fetch(`
      *[_type == "musabakalar"] | order(_createdAt desc){
        title,
        subtitle,
        content,
        lastUpdated,
        slug,
        publishedAt,
      
      }`).then((data) => setPostData(data),
      setloading(false)).catch((err) => console.log(err))


      sanityClient
      .fetch(`
      *[_type == "takimlar"] | order(_createdAt desc){
        title,
        subtitle,
        content,
        lastUpdated,
        slug,
        publishedAt,
      
      }`).then((data) => setTakim(data),
      setloading(false)).catch((err) => console.log(err))

      sanityClient
      .fetch(`
      *[_type == "contents"] | order(_createdAt desc){
        haftaninmaci,
        sonrakimac,
        
      
      }`).then((data) => setContent(data),
      setloading(false)).catch((err) => console.log(err))
      
      
  }, [])

  const filteredData = postData.filter(data  => {
    return data.content.toLowerCase().includes(search.toLowerCase())
  })

  const displayUsers = filteredData
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((data,index) => {
      return (
        <div className="kulup__cart" key={index} >
              <h1 className="kulup__title"> {data.title} </h1>
              <div className="accordion" onClick={() => toggle(index)} >
                <h3 className="kulup__subtitle"> {data.subtitle}  </h3>
                <span> {clicked === index ? <HiArrowCircleUp/> : <HiArrowCircleDown/>  }   </span>
              </div>
              {clicked === index ? (
              <div className="drop">
                <p className="kulup__content">{data.content} </p>
              </div>
              ) : null  }
              <p className="kulup__date">{new Date(data.publishedAt).toLocaleDateString()} </p>
              <Link to={"/musabakalar/" + data.slug.current} key={data.slug.current} className="kulup__link" >Devam??...</Link>
              
            </div>
      );
    });

    const pageCount = Math.ceil(postData.length / usersPerPage);

    const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  

  if(loading) return <Loading/>

  return (
    <Layout>
      <input className="search" type="text" placeholder="Ara.." onChange={e => setSearch(e.target.value)} />
        <div className="kulup">
          {content && content.map((data,index) => (
          <div className="klup__left" key={index} >
            <div className="klup__left__top">
              <div className="header">Haftan??n Ma????</div>
              <div className="block"></div>
              <div className="message"> {data.haftaninmaci} </div>
            </div>
            <div  className="klup__left__middle">
              <div className="header">Sonraki Ma??</div>
              <div className="block"></div>
              <div className="message">{data.sonrakimac}</div>               
            </div>
          </div>
            ))}
          
          <main className="kulup__main__side">
            {displayUsers}
          </main>
        
          <aside className="kulup__right">
            
            <div className="kulup__right__top">
              <div className="baslik">Tak??mlar</div>
            {takim && takim.map((data,index) => (
              <ul  key={index}  className="side__content">
                { data.lastUpdated === 'lastupdated' ?
                <div className="hey" >
                  <li>
                      <h1> {data.title} </h1>
                  </li>
                  <li>
                      <h4> {data.subtitle} </h4>
                  </li>
                  <li>
                      <Link  to={"/takimlar/" + data.slug.current} key={data.slug.current} className="side_data" > Devam??...  </Link>
                  </li>
                </div>
                : null  }
              </ul>
            ))}
            </div>

            <div className="kulup__right__middle">
              <div className="baslik">Oyuncular</div>
            {oyuncu && oyuncu.map((data,index) => (
              <ul  key={index}  className="side__content">
                { data.lastUpdated === 'lastupdated' ?
                <div className="hey">
                  <li>
                      <h1>{data.title}</h1>
                  </li>
                  <li>
                      <h4>{data.subtitle}</h4>
                  </li>
                  <li>
                      <Link  to={"/oyuncular/" + data.slug.current} key={data.slug.current} className="side_data"> Devam??...  </Link>
                  </li>
                </div>
                : null}
              </ul>
            ))}
            </div>
          </aside>
        
        </div>
        <ReactPaginate
              previousLabel={"??nceki"}
              nextLabel={"Sonraki"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
    </Layout>
  )
}

export default Musabakalar
