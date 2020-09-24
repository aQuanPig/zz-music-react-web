import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getSongDetailAction } from '../store/actionCreators'
import { getSizeImage, getPlaySong } from '@/utils/format-utils'
import dayjs from 'dayjs'

import {
  MJPlayBarWrapper,
  MJPlayBarLeft,
  MJPlayBarCenter,
  MJPlayBarRight
} from './style'
import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';
export default memo(function MJPlayBar() {
  //props and state
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // redux hook
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hook
  const audioRef = useRef()
  useEffect(() => {
    dispatch(getSongDetailAction(411214279))
  }, [dispatch])
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
  }, [currentSong])

  //other handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ""
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手"
  const duration = currentSong.dt || 0  //duration 毫秒

  // handle function 
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])
  const timeUpdate = (e) => {
    // currentTime 是秒，需要转成毫秒
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000)
      setProgress(currentTime)
    }
  }
  const sliderChange = useCallback((value) => {
    setIsChanging(true)
    setProgress(value)
    setCurrentTime(value)
  }, [])

  const sliderAfterChange = useCallback((value) => {
    // currentTime 是秒 value是毫秒 所以需要转为秒
    audioRef.current.currentTime = value / 1000
    setCurrentTime(value)
    setIsChanging(false)
    if (!isPlaying) {
      playMusic()
    }
  }, [isPlaying, playMusic])

  const formatter = useCallback((value) => {
    return dayjs(value).format("mm:ss")
  }, [])
  return (
    <MJPlayBarWrapper className="sprite_playbar">
      <div className="center wrap-v2">
        <MJPlayBarLeft isPlaying={isPlaying}>
          <button className="sprite_playbar left"></button>
          <button className="sprite_playbar play"
            onClick={e => playMusic()}></button>
          <button className="sprite_playbar right"></button>
        </MJPlayBarLeft>
        <MJPlayBarCenter>
          <NavLink to="/discover/player">
            <img src={getSizeImage(picUrl, 35)} alt="" />
          </NavLink>
          <div className="info">
            <div className="song">
              <NavLink to="/discover/player" className="song-name">{currentSong.name}</NavLink>
              <span className="singer-name">{singerName}</span>
            </div>
            <div className="progress">
              <Slider tipFormatter={formatter}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
                max={duration} />
              <div className="time">
                <span className="now-time">{dayjs(currentTime).format("mm:ss")}</span>
                <span className="divider">/</span>
                <span className="total-time">{dayjs(duration).format("mm:ss")}</span>
              </div>
            </div>
          </div>
        </MJPlayBarCenter>
        <MJPlayBarRight>
          <div className="left">
            <button className="sprite_playbar btn add"></button>
            <button className="sprite_playbar btn send"></button>
          </div>
          <div className="right">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </MJPlayBarRight>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} />
    </MJPlayBarWrapper>
  )
})
