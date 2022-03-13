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
                            USERNAME:<br/><input type="text" name="username" required />
                        </label>
                        <br/>
                        <label>
                            PASSWORD:<br/><input type="password" name="password" required />
                        </label>
                        <br/>
                        <input type="submit" value="SIGN IN" />
                    </fieldset>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Login