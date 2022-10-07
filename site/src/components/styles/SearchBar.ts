import styled from 'styled-components'

export const SearchBar_wrapper = styled.div`
width: 80%;
margin: 2rem auto 1rem;

@media (max-width: 768px){
    width: 92%;
}
`

export const SearchBar_input = styled.input`
height: 3rem;
padding: 10px;
width: 20rem;
font-size: 1.5rem;

@media (max-width: 768px){
    width: 15rem;
}`

export const SearchBar_label = styled.label`
margin-left:2rem;
margin-right: 1rem;
height: 3rem;
font-family: 'IBM Plex Serif',serif;
color: #090808;
font-size: 2rem;
font-weight:500;`