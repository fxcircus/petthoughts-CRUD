const React = require('react')
const DefaultLayout = require('../layout/Default')

class Signup extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div >
                    <form action="/user/signup" method="post">
                        <fieldset class='user-form'>
                        <legend></legend>
                        <label>USERNAME:<br/><input type="text" name="username" required /></label><br/>
                        <label
                            >PASSWORD:<br/><input type="password" name="password" required /><br/>
                        </label>
                        <input type="submit" value="Create Account" />
                        </fieldset>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Signup