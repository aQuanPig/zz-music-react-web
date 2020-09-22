import styled from 'styled-components'

export const UseLoginWrapper = styled.div`
  background-position: 0 0;
  width: 250px;
  height: 126px;
  .note {
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
    color: #666;
  }
  .login {
    margin: 0 auto;
    background-position: 0 -195px;
    width: 100px;
	  height: 31px;
    display: block;
    line-height: 31px;
    text-align: center;
    text-shadow: 0 1px 0 #8a060b;
    color: #fff;
    &:hover {
      background-position: -110px -195px;
      text-decoration: none;
    }
  }
`