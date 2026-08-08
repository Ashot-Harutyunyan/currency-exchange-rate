import './errorBoundary.style.scss'
import { Link, useRouteError } from 'react-router'

function ErrorBoundary() {

    const error = useRouteError()

    return <section className='error-page-content'>
        <h2>Something went wrong</h2>
        <div className='error-page-container-img'>
            <img src="/photo-of-the-error-page.png" alt="error"/>
        </div>
        <div>
            <span>{error?.status || 'Error'}</span>
            <p>{error?.statusText || error?.message || 'An unexpected error occurred.'}</p>
        </div>
        <Link to="/" className="error-page-button">Go to home</Link>
    </section>
}

export default ErrorBoundary