import styled from 'styled-components'

export const HotRadioWrapper = styled.div`
  .center {
    padding: 0 16px;
    display: flex;
    align-items: center;
    margin-top: 14px;
    .items {
      width: 40px;
      height: 40px;
      .image{
        width: 40px;
        height: 40px;
      }
    }
    .info {
      padding-left: 10px;
      .author {
        display: flex;
        align-items: center;
        .title {
          color: #333;
          font-weight: 700;
        }
        .vip {
          margin-left: 3px;
          background-position: 0 0;
          width: 11px;
          height: 12px;
          display: block;
          margin-top: -1px;
        }
      }
      .name {
        color: #666;
      }
    }
  }
`