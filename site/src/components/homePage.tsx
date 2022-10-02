import React from 'react'
import {Link} from 'react-router-dom'
import * as Component from './styles/homePage'
import GitHubIcon from "@mui/icons-material/GitHub";
import Accordion from './Accordion'


const HomePage: React.FC= () => {
    return (
        <Component.Wrapper>
            <Component.Container>
                <h1>Competitions and Programs list <span>for</span> Students</h1>
                {/* <GitHubIcon className='icon' /> */}
                <p className="para">Here is awesome list of some of the great competitions and programs for college students, in which they can compete,learn,explore and experience. These experience will tighten their resume for jobs and will help them in their career growth.</p>

                <Accordion />
            </Component.Container>
        </Component.Wrapper>
    )
}

export default HomePage;