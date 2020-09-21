import styled from 'styled-components'

export const ThemeHeaderWrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid #C10D0C;
  background-position:-235px -156px;
  padding:10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    .title {
      font-size: 20px;
      margin-left: 2px;
    }
    .keyword {
      display: flex;
      margin-left: 20px;
      align-items: center;
      .link {
        cursor: pointer;
        padding: 0 3px;
      }
      .divider{
        margin: 0 15px;
        color: #ccc;
      }
    }
    
  }
  .right {
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`