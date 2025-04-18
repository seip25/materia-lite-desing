function theme(theme_ = false) {
    let theme = theme_ ? theme_ : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    if (theme_) {
        localStorage.setItem('theme', theme_);
    }
    if (localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === 'light') {
        theme = localStorage.getItem('theme');
    }
    document.documentElement.setAttribute('data-theme', theme)

    return theme;
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    theme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
})
