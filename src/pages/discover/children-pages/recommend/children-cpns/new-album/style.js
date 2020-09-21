import styled from 'styled-components'

export const AlbumWrapper = styled.div`
  margin-top: 50px;
  .content{
    height: 180px;
    background: #f5f5f5;
    border: 1px solid #d3d3d3bd;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content:center;
    .album{
      width: 645px;
      .page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
      }
    }
    .arrow{
      width: 8px;
	    height: 14px;
      cursor: pointer;
    }
    .arrow-left{
      background-position: -265px -77px;
      &:hover {
        background-position:-285px -77px;
      }
    }
    .arrow-right{
      background-position: -305px -77px;
      &:hover {
        background-position: -325px -77px;
      }
    }
  }
`