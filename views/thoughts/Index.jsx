const React = require('react')
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { thoughts } = this.props
        return(
            <DefaultLayout>
                <div>
                    testtext
                    {/* {
                        thoughts.map((thought) => {
                            return(
                                <article>
                                    <a href={`/thoughts/${thought._id}`}>
                                        <h2>
                                            {thought.name}
                                        </h2>
                                    </a>
                                </article>
                            )
                        })
                    } */}
                </div>
            </DefaultLayout>   
        )
    }
}

module.exports = Index