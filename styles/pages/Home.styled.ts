import styled from "styled-components";

export const WrapperStyled = styled.div`
  width: 96%;
  height: 90%;
  border-radius: 1rem;
  border: 2px solid #15202b;
  box-shadow: 1px;
  background-color: #f1f1f1;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .first {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: -6rem;
    color: white;
    background-color: #15202b;
    border-radius: 0.5rem;
    width: 90%;
    height: 35%;
    .img {
      width: 22rem;
    }
    .texi {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 8rem;
      width: auto;
      h1 {
        color: #00f7ff;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .second {
    width: 90%;
    margin-bottom: -7rem;
    margin-top: 3rem;
    height: 40%;
    border-radius: 0.5rem;
    background-color: #15202b;
    color: white;
    padding-left: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .desc {
      height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      line-height: 2rem;
      width: 55%;
    }

    .tags {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 60%;
      width: 20%;
      a {
        &:hover {
          color: #00f7ff;
        }
      }
    }
  }

  @media screen and (max-width: 1189px) {
    justify-content: space-evenly;
    border: 0px ;
    .first {
      margin-top: 0rem;
      flex-direction: column;
      justify-content: space-around;
      .img {
        width: 15rem;
        margin-top: -3rem;
      }
      .texi {
        font-size: 0.8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        max-height: 5rem;
        margin-bottom: 1rem;
      }
    }
    .second {
      height: 50%;
      padding-left: 0;
      justify-content: space-around;
      align-items: center;
      padding: 0 1rem;
      flex-direction: column;
      margin-bottom: 0;
      .desc {
        margin-top: -1rem;
        line-height: 1.5rem;
        width: 90%;
      }
      .tags {
        margin-top: -2rem;
        width: 90%;
      }
    }
  }

  @media screen and (max-width: 708px) {
    .first {
      width: 96%;
      .texi {
        font-size: 0.6rem;
        max-height: 7rem;
        padding: 0 0.1rem;
      }
    }
    .second {
      width: 96%;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    .first {
      width: 96%;
      .img {
        width: 12rem;
      }
      .texi {
        font-size: 12px;
        h3 {
          font-size: 9px;
        }
        height: 7rem;
        width: 90%;
      }
    }
    .second {
      height: 60%;
      .desc {
        font-size: 15px;
        line-height: 1.4rem;
        width: 96%;
      }
      .tags {
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        height: 9rem;
        width: 90%;
        a {
          margin-right: 0.5rem;
          min-width: 6rem;
        }
      }
    }
  }
  /*  */
`;
