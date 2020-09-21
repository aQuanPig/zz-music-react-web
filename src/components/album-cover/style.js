import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div`
  margin: 20px 0;
`

export const AlbumCoverTop = styled.div`
  width: ${props => props.width + "px"};
  height: ${props => props.size + "px"};
  position: relative;
  img {
    width: ${props => props.size + "px"};
    height: ${props => props.size + "px"};
  }
  .cover{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-position: 0 ${props => props.bgp};
  }
`

export const AlbumCoverBottom = styled.div`
  width: ${props => props.width + "px"};
  .title{
    color: #000;
    font-size: 12px;
    margin-top: 5px;
  }
  .writer {
    width: 100%;
    font-size: 12px;
    color:#666;
  }
` 