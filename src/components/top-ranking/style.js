import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  width: 230px;
  .more{
    display: flex;
    align-items: center;
    justify-content:flex-end;
    margin-right: 28px;
    height: 32px;
    .all {
      color: #000;
      display: block;
    }
  }
`
export const TopRankingTop = styled.div`
  display: flex;
  .left-top {
    position: relative;
    padding:20px 0 0 21px;
    img {
      width: 80px;
      height: 80px;
    }
    a {
      position: absolute;
      top: 20px;
      left: 21px;
      width: 80px;
      height: 80px;
      background-position: -145px -57px;
    }
  }
  .right-top {
    padding: 26px 10px 0 12px;
    .title {
      font-weight: 700;
      font-size: 14px;
      color: #000;
    }
    .btn {
      display: flex;
      align-items: center;
      margin-top: 8px;
      .play {
        background-position: -267px -205px;
        width: 22px;
        height: 22px;
        cursor: pointer;
        &:hover {
          background-position: -267px -235px;
        }
      }
      .add {
        background-position: -300px -207px;
        width: 20px;
        height: 19px;
        cursor: pointer;
        margin-left: 10px;
        &:hover {
          background-position: -300px -237px;
        }
      }
    }
  }
`
export const TopRankingCenter = styled.div`
  margin-top: 20px;
  .item-list {
    margin-left: 12px;
    margin-right: 12px;
    height: 32px;
    display: flex;
    align-items: center;
    .index {
      display: block;
      width: 38px;
      height: 32px;
      line-height:32px;
      text-align: center;
      color: #666;
      font-size: 16px;
    }
    &:nth-child(-n+3) .index{
      color: #c10d0c;
    }
    .name {
      width: 170px;
    }
    .icon {
      width: 70px;
      display: none;
      .play {
        margin-right: 6px;
        background-position: -267px -268px;
        width: 17px;
        height: 17px;
        display: inline-block;
        &:hover {
          background-position: -267px -288px;
        }
      }
      .add {
        margin-right: 6px;
        background-position: 0 -698px;
        width: 17px;
        height: 17px;
        display: inline-block;
        &:hover {
          background-position: -21px -697px;
        }
      }
      .file-add {
        background-position: -297px -268px;
        width: 17px;
        height: 17px;
        display: inline-block;
        &:hover {
          background-position: -297px -288px;
        }
      }
    }
    &:hover {
      .icon{
        display: block;
      }
      .name {
        width: 96px;
      }
    }
  }
`