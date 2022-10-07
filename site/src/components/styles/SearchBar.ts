import styled from 'styled-components'

export const SearchBar_wrapper = styled.div`
width: 80%;
margin: 2rem auto 1rem;

@media (max-width: 768px){
    width: 92%;
}
`

export const SearchBar_input = styled.input`
margin-left:2rem;
height: 3rem;
padding: 10px;
width: 20rem;
font-size: 1.5rem;

@media (max-width: 768px){
    width: 15rem;
}`

export const SearchBar_button = styled.button`
height: 3rem;
padding: 0 4px 0 4px;
font-size: 1.5rem;`