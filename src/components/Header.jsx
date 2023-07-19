function Header() {
    return <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">React Shop</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a
                    href="https://github.com/axlrose023/react_shop/deployments/activity_log?environment=github-pages"
                    rel='noreferrer'>Repo</a>
                </li>
            </ul>
        </div>
    </nav>
}

export {Header};