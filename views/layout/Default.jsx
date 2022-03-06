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
                        <div class='page-title'>Pet Thoughts</div>
                        <div class='page-sub-title'>
                            <div>From</div><div>The</div><div>Minds</div><div>Of</div><div>Pups</div>
                        </div>
                        <hr />
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