import {Logo} from '../components/'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage' // where the styled components are stored
import {Link} from 'react-router-dom'

const Landing = () => {
    return(
        <Wrapper>
            <nav>
                <Logo/>
            </nav>
            <div className="container page">
                {/* info */}
                <div className='info'>
                    <h1>AI-Powered Learning Experience</h1>
                    <p>Oh wow cool asf</p>
                    <Link to='/register' className='btn btn-hero'>Sign Up Now</Link>
                </div>
                <img src={main} alt='decor' className='img main-img'/>
            </div>
        </Wrapper>
    )
}

export default Landing