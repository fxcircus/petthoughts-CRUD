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
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                </head>
                <body>
                    <header>
                        <a href='/thoughts'><div class='page-title'>Pet Thoughts</div></a>
                        <div class='page-sub-title no-shadow'>
                            <div>From</div><div>The</div><div>Minds</div><div>Of</div><div>Pups</div>
                        </div>
                        <hr />
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                </body>
                {/* <hr /> */}
                <footer>
                    <div><a href="https://github.com/fxcircus/petthoughts-CRUD" target="_blank">
                        GitHub Project</a>
                    </div>
                    <div>© Roy Daniel</div>
                </footer>
            </html>
        )
    }
}

module.exports = DefaultLayout