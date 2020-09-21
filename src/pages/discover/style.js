import styled from 'styled-components'  

export const DiscoverWrapper = styled.div`
  .top{
    height: 30px;
    background-color: #c20c0c;
  }
`

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  
  .item{
    position: relative;
    top: -4px;
    a {
      display: inline-block;
      color: #fff;
      padding: 0 13px;
      margin: 7px 17px 0;
      height: 20px;
    }
    a:hover,a.active{
      background-color: #9B0909;
      text-decoration: none;
      border-radius: 20px;
    }
  }
`