import styled from 'styled-components'

export const SongsCoverWrapper = styled.div`
  width: 140px;
  margin: 20px 0;
`

export const SongsCoverTop = styled.div`
  width: 140px;
  height: 140px;
  background-color: pink;
  position: relative;
  img {
    width:100%;
    height:100%;
  }
  .cover{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-position: 0 0;
    .songs-info{
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      height: 27px;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      align-items: center;
      background-color: rgba(0,0,0,0.2);
      color: #ccc;
      .num{
        display: flex;
        align-items: center;
        .erji {
          display: inline-block;
          background-position: 0 -24px;
          width: 14px;
          height: 11px;
          padding:4px 9px;
        }
      }
      .play{
        display:inline-block;
        background-position: 0 0;
        width: 16px;
	      height: 17px;
      }
    }
  }
`

export const SongsCoverBottom = styled.div`
  width: 140px;
  .title{
    color: #000;
    font-size: 14px;
    margin-top: 5px;
  }
  .by {
    color: #999;
    font-size:12px;
    margin-right: 5px;
  }
  .writer {
    width: 100%;
    font-size: 12px;
    color:#666;
  }
` 