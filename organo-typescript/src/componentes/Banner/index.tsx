import './Banner.css'


interface BannerProps {
    src: string,
    alt?: string
}

const Banner = ({ src, alt } : BannerProps) => {
    return (
        <header className="banner">
            <img src={src} alt={alt}></img>
        </header>
    )
}

export default Banner