const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        const show = this.props.show
        const session = this.props.session
        console.log(show)
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
                        {
                            show ==='yes'?
                            <div>
                                <a href='/thoughts'>
                                    <div class='page-title'>Pet Thoughts</div>
                                </a>
                                <div class='page-sub-title no-shadow'>
                                    <div>From</div><div>The</div><div>Minds</div><div>Of</div><div>Pups</div>
                                </div>
                                <hr />
                            </div>
                            :
                            <div></div>
                        }
                    </header>

                    <main>
                        {this.props.children}
                    </main>

                    <br /><hr />

                    <footer>
                        <div><a href="https://github.com/fxcircus/petthoughts-CRUD" target="_blank">
                            GitHub Project</a>
                        </div>
                        {
                            session?
                            <div className="user-area">
                                Logged in as: {session.username} <a href="/user/logout"><button>Logout</button></a>
                            </div>
                            :
                            <div className="user-area">
                                <a href="/user/signup"><button>Signup </button></a> OR <a href="/user/login"><button>Login</button></a>                             
                            </div>
                        }
                        <div>© Roy Daniel</div>
                    </footer>

                </body>

            </html>
        )
    }
}

module.exports = DefaultLayout