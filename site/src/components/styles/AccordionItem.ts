import styled from 'styled-components';

export const Accordion_Item_Wrapper = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  padding-bottom: .7rem;
  border-bottom: 1px solid #cccaca;
  margin-top: 1.2rem;
  transition: all 1s ease-in-out;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
`
export const Accordion_Item_Title = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  color: #284B63;
  cursor: pointer;
  max-width: auto;
  
  h5{
    font-family: 'IBM Plex Serif', serif;
    font-size: 1.85rem;
    font-weight: 500;
  }
`
export const Accordion_Item_Content = styled.div`
  
  flex-direction: column;
  margin: 1rem 0rem 0.8rem 2rem;
  font-family: 'IBM Plex Sans Thai Looped', sans-serif;
  /* display: flex ; */
  display: none;
  transition: all 1s ease-in-out;

  &.show{
    display: flex;
    transition: all 1s ease-in-out;

  }

  h5{
    
    font-size: 1.6rem;
    font-weight: 600;
    color: #777B84;
    
  }
  section{
    font-family: 'IBM Plex Serif', serif;
    margin: .5rem 0rem 2rem ;
    font-size: 1.6rem;
    font-weight: 500;
    color: #14274E;

    &:last-child{
      margin: .5rem 0rem .2rem ;
    }
  }

  a{
    font-family: 'IBM Plex Serif', serif;
    margin: .5rem 0rem 2rem ;
    font-size: 1.45rem;
    font-style: italic;
    font-weight: 500;
    color: #132470;
    word-wrap: break-word;
  }

  @media (max-width: 768px){
    h5{
      font-size: 1.4rem;
    }
  }
`