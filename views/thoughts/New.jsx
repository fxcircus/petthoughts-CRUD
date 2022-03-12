const React = require('react')
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render() {
        const session = this.props.session
        return (
            <DefaultLayout show="yes" session={ session }>
                <form action="/thoughts" method="post">
                    <fieldset>
                        <div className="new-form">
                            <legend></legend>
                            <label>
                                <input type='text' name='name' placeholder='Pet name'/>
                            </label>
                            <label>
                                <input type='text' name='location' placeholder='Location'/>
                            </label>
                            <label>
                                <textarea type='text' name='thought' placeholder='Thought' rows="10" cols="50"/>
                            </label>
                            <label>
                                <input type='text' name='img' placeholder='Image URL'/>
                            </label>
                            <label>
                                <input type='number' name='rank' placeholder='Rank from 1 to 5' min='1' max='5'/>
                            </label>
                        </div>
                    </fieldset>
                    <input type='submit' value='Add thought' />
                </form>
                <a href='/thoughts'><button>Back to main</button></a>
            </DefaultLayout>
        )
    }
}

module.exports = New