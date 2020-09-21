import styled from "styled-components"

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  color: #fff;
  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
      display: inline-block;
      width: 176px;
      height: 69px;
      background-position:0 0;
  }
  .select-list {
    display: flex;
    line-height: 70px;
    .list-item{
      position: relative;
      a {
        display: block;
        color: #ccc;
        padding: 0 20px;
        font-size: 14px;
      }
      :last-of-type {
        position: relative;
        &::after{
          content: "";
          position: absolute;
          width: 26px;
          height: 13px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -192px 0;
          right: -20px;
          top: 18px;
        }
      }
      &:hover a, .active{
        text-decoration: none;
        background: #000;
        color: #fff;
      }
      .active .icon {
        display: block;
        background-position: -226px 0;
        width: 12px;
        height: 6px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`

export const HeaerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #ccc;
  font-size: 12px;
  .search {
    border-radius: 20px;
    width: 158px;
    height: 32px;
    margin-right: 16px;
    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }
  .center {
    background: #242424;
    color: #ccc;
    border-radius: 20px;
    border: 1px solid #4F4F4F;
    padding:6px 16px;
    margin-right: 16px;
    &:hover {
      border: 1px solid #ccc;
      color: #fff;
    }
  }
  .login {
    width: 28px;
    color: #787878;
    margin-right: 16px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

