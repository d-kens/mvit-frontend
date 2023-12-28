import { Link } from 'react-router-dom';

const Public = () => {
    const content = (
        <section className='public'>
            <div className='left'>
                <h1>Tomato Leaf Disease Classification</h1>
                <p>Powered by MobileViT Model</p>
            </div>
            <div className='right'>
                <div className='top'>
                    <h2>Tomato Leaf Disease Classification</h2>
                    <p>powered by mobilevit-v2 model</p>
                </div>
                <div className='get-started'>
                    <h2>Get Started</h2>
                    <div className='links'>
                        <Link to="/login" className='btn'>Login</Link>
                        <Link to="/register" className='btn'>Register</Link>
                    </div>
                </div>
            </div>
        </section>
    )
    return content
}
export default Public


/*

    

*/