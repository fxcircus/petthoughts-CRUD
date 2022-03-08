const React = require('react')
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const { thought } = this.props
        return(
            <DefaultLayout>
                <form action={`/thoughts/${thought.id}?_method=PUT`} method="post">
                    <fieldset>
                            <legend>New Thought</legend>
                            <label>
                                <input type='text' name='name' value={thought.name}/>
                            </label>
                            <label>
                                <input type='text' name='location' value={thought.location}/>
                            </label>
                            <label>
                                <input type='text' name='thought' value={thought.thought}/>
                            </label>
                            <label>
                                <input type='text' name='img' value={thought.img}/>
                            </label>
                            <label>
                                <input type='text' name='rank' placeholder={thought.rank}/>
                            </label>
                    </fieldset>
                    <input type='submit' value='Confirm' />
                </form>
                <a href={`/thoughts/${thought.id}`}><button>Cancel</button></a>
            </DefaultLayout>
        )
    }
}

module.exports = Show