const React = require('react')
const DefaultLayout = require('../layout/Default')

class Login extends React.Component {
    render() {
        return (
            <DefaultLayout show="no">
                <div class='user-form'>
                    <form action="/user/login" method="post">
                    <fieldset>
                        <legend></legend>
                        <label>
                            USERNAME:<br/><input type="text" name="username" required /><br/>
                        </label>
                        <label>
                            PASSWORD:<br/><input type="password" name="password" required /><br/>
                        </label>
                        <input type="submit" value="Login" />
                    </fieldset>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Login