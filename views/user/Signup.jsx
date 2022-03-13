const React = require('react')
const DefaultLayout = require('../layout/Default')

class Signup extends React.Component {
    render() {
        return (
            <DefaultLayout show="no">
                <div class='user-form'>
                    <form action="/user/signup" method="post">
                        <fieldset>
                            <legend></legend>
                            <label>
                                USERNAME:<br/><input type="text" name="username" required />
                            </label>
                            <br/>
                            <label>
                                PASSWORD:<br/><input type="password" name="password" required />
                            </label>
                            <br/>
                            <input type="submit" value="GET STARTED" />
                        </fieldset>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Signup