const React = require('react')
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const { thought } = this.props
        return(
            <DefaultLayout>
                <div>
                    <article>
                        <h2>
                            {thought.name}
                        </h2>
                        <h3>{thought.location}</h3>
                        <a href={`/thoughts/${ thought._id }/edit`}><button>edit</button></a>
                        <form action={`/thoughts/${ thought.id }?_method=DELETE`} method='POST'>
                            <input type='submit' value="Delete" />
                        </form>
                        <a href='/thoughts'><button>Back to main</button></a>
                    </article>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show