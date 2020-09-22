import styled from 'styled-components'

export const SellteSingerWrapper = styled.div`
  .singer-list {
    padding:0 16px;
    .items {
      width: 208px;
      height: 62px;
      display: flex;
      margin-top: 14px;
      background-color: #fafafa;
      &:hover {
        background-color: #f4f4f4;
        text-decoration:none;
      }
      .image {
        width: 62px;
        height: 62px;
      }
    }
    .info {
      margin: 6px 0 0 10px;
      .title {
        color: #000;
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 5px;
      }
    }
  }
`