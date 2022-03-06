const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        const { thoughts } = this.props
        return(
            <html lang='en'>
                <head>
                    <meta charSet='UTF-8' />
                    <meta httpEquiv='X-UA-Compatible' contend='IE-edge'/>
                    <meta name='viewport' content='width=device-width, initial scale=1.0'/>
                    <title>Pet Thoughts</title>
                    <link rel='stylesheet' href='/css/app.css' />
                </head>
                <body>
                    <header>
                        <h1>Pet Thoughts</h1>
                        <h3>From The Minds Of Pups</h3>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                    <footer>
                        <hr />
                        © Roy Daniel
                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout