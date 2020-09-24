import styled from 'styled-components'

export const MJPlayBarWrapper = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 -1px;
  background-repeat: repeat;
  .center {
    display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`

export const MJPlayBarLeft = styled.div`
  .left,.right {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }
  .left {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }
  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    cursor: pointer;
    position: relative;
    top: 3px;
    background-position: 0 ${props => props.isPlaying ? "-165px" : "-204px"};
    &:hover {
      background-position: -40px ${props => props.isPlaying ? "-165px" : "-204px"};
    }
  }
  .right {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }
`

export const MJPlayBarCenter = styled.div`
  display: flex;
  align-items: center;
  margin-left: 26px;
  .song {
    color: #e1e1e1;
    position: relative;
    top: 8px;
    left: 8px;
    .song-name {
      color: #e8e8e8;
    }
    .singer-name {
      color: #a1a1a1;
      margin-left: 10px;
    }
  }
  .info {
    width: 608px;
    .progress {
      width: 608px;
      display: flex;
      align-items: center;
      .ant-slider {
        width: 493px;
        .ant-slider-rail {
          height: 8px;
          background: url(${require("@/assets/img/progress_bar.png")}) right 0;
        }
        .ant-slider-track {
          height: 8px;
          background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
        }
        .ant-slider-handle {
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
        }
      }
      .time {
        .now-time {
          color: #a1a1a1;
        }
        .divider,
        .total-time {
          color: #797979;
        }
      }
    }
  }
`

export const MJPlayBarRight = styled.div`
  display: flex;
  position: relative;
  top: 5px;
  left: -10px;
  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .left {
    .add {
      background-position: -88px -163px;
      &:hover {
        background-position: -88px -189px;
      }
    }
    .send {
      background-position: -114px -163px;
      &:hover {
        background-position: -114px -189px;
      }
    }
    &::after {
      content: "";
      margin: 0 10px;
      width: 3px;
      height: 6px;
      position: relative;
      top: 5px;
      background-color: #000;
    }
  }
  .right {
    .volume {
      background-position: -2px -248px;
      &:hover {
        background-position: -31px -248px;
      }
    }
    .loop {
      background-position: -66px -248px;
      &:hover {
        background-position: -93px -248px;
      }
    }
    .playlist {
      position: relative;
      top: -3px;
      width: 56px;
	    height: 23px;
      background-position: -42px -68px;
      &:hover {
        background-position: -42px -98px;
      }
    }
  }
`