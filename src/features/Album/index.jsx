import React from 'react'
import PropTypes from 'prop-types'
import AlbumList from './components/AlbumList'

function AbumFeature(props) {
  const albumList = [
     {
        id: 1,
        name:"Chạy về khóc với anh",
        thumbnailUrl:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/6/d/e/c6def069a1a885c41fe479358fa7c506.jpg",
     },
     {
        id: 2,
        name:"Sau này nếu yêu lại",
        thumbnailUrl:"https://lyricvn.com/wp-content/uploads/2021/12/af2a52d9784647085f1466075e96c009.jpg",
     },
     {
        id: 3,
        name:"Áo lính phai mày",
        thumbnailUrl:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/9/d/d/19dd1eab5a5fb2457ce2152b5317dc70.jpg",
     }
  ]
  return (
    <div>
       <AlbumList albumList={albumList}/>
    </div>
  )
}

AbumFeature.propTypes = {}

export default AbumFeature
