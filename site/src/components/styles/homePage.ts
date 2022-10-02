import styled from "styled-components";



export const Wrapper = styled.div`
    width: 100vw;
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Container = styled.div`
    /* height: 100vh;   */
    width: 90%;
    background-color: #e5e5e5;
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */

    h1{ 
        width: 80%;
        font-size:3rem;
        font-family: 'IBM Plex Serif', serif;
        font-weight: 500;
        text-align: center;
        margin: 4rem auto 0rem;
        color: #090808;
        
        padding-bottom: 1rem;
        border-bottom: 1px solid #7B8487;

        span{ 
            font-family: 'Great Vibes', cursive;
            font-size: 3.6rem;
        }
    }

    p{ 
        text-align: center;
        font-size: 1.8rem;
        width: 80%;
        margin: 5rem auto 0rem;
        color: #777B84;
        font-family: 'IBM Plex Sans Thai Looped', sans-serif;
    }
`
// export const Container = styled.div``
