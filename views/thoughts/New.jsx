const React = require('react')
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <form action="/thoughts" method="post">
                    <fieldset>
                        <legend>New Thought</legend>
                        <label>
                            <input type='text' name='name' placeholder='Pet name'/>
                        </label>
                        <label>
                            <input type='text' name='location' placeholder='Location'/>
                        </label>
                        <label>
                            <input type='text' name='thought' placeholder='Thought'/>
                        </label>
                        <label>
                            <input type='text' name='img' placeholder='Image URL'/>
                        </label>
                    </fieldset>
                    <input type='submit' value='Add thought' />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New