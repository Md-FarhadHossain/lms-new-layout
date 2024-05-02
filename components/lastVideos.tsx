"use client"
import React from 'react'



const lastVideos = () => {

    const getLastVideo = localStorage.getItem("lastVideo")
    if (getLastVideo) {
        console.log("first")
    }
  return (
    <div>lastVideos</div>
  )
}

export default lastVideos