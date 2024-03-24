import React from "react"
import { blog } from "../../dummydata"
import { ArrowUpCircle, Calendar, User, UserPlus } from "react-feather"

const BlogCard = () => {
  return (
    <>
      {blog.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
          </div>
          <div className='text'>
            <div className='admin flexSB'>
              <span>
                <UserPlus style={{fontSize:"14px"}}/>
                <label htmlFor=''>{val.type}</label>
              </span>
              <span>
                <Calendar style={{fontSize:"14px"}}/>
                <label htmlFor=''>{val.date}</label>
              </span>
              <span>
                <ArrowUpCircle style={{fontSize:"14px"}}/>
                <label htmlFor=''>{val.com}</label>
              </span>
            </div>
            <h1>{val.title}</h1>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogCard