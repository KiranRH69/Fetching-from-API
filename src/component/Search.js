import axios from 'axios'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import utube from './image/utube.png'

const Search = () => {
  const [search, setSearch] = useState('')
  const [item, setItem] = useState([])
  const apiKey = 'AIzaSyAF-ByPKNvBqma0OD-IB-viyqvF9SGU_BM'

  // const fetchData = () =>{
  //   axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${apiKey}`).then(res=>{
  //     console.log(res);
  //     setItem(res.data.items)
  //   }).catch(err=>{
  //     console.log(err);
  //   })
  // }

  const fetchData = async () => {
    try {
      let res = await axios.get('https://ce4kvluf13.execute-api.ap-south-1.amazonaws.com/stage/video-list')
      console.log(res.data.items);
      setItem(res.data.items)
    } catch (err) {
      console.log(err);
    }


  }
  return (
    <div className='container'>

      <img src={utube} height='80px' width='75px' />
      <input className='input'
        type='text'
        value={search}
        placeholder='search here ...'
        onChange={(e) => { setSearch(e.target.value) }}
      />
      <button onClick={fetchData}>search</button>
      {
        item.map((v, i) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img src={v.snippet.thumbnails.default.url} variant='top' />
              <Card.Body>
                <Card.Title>{v.snippet.title}</Card.Title>
                <Card.Text>{v.snippet.description}</Card.Text>
              </Card.Body>
            </Card>
          )
        })
      }
    </div>
  )
}

export default Search
