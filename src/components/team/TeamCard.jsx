
import React from "react"
import { team } from "../../dummydata"
import "./team.css";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather"
const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className='items shadow' style={{marginTop:"150px", marginBottom:"100px"}}>
          <div className='img'>
            <img src={val.cover} alt='' style={{width:"300px", height:"300px", padding:"5px", border:"3px solid black", borderRadius:"10px"}}/>
            <div className='overlay' style={{display:"inline-block", marginLeft:"35%", gap:"30px"}}>
              <Facebook/><Instagram/><Linkedin/>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard

