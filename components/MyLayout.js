import Header from './Header'

let imgUrl = 'static/png/web/background.png'
let styles = {
    root: {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: 'cover',
        overflow: 'hidden',
    }
}

export default function Layout(props) {
    return (
        <div style={styles.root}>
            Suh
            <Header />
            {props.children}
        </div>
    )
}
