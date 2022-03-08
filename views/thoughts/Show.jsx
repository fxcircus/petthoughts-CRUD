const React = require('react')
const DefaultLayout = require('../layout/Default')

const isChecked = (starId, thought_rank) => {
    if ( thought_rank >= starId) {
        return "fa fa-star checked"
    } else { return "fa fa-star not-checked" }
}

class Show extends React.Component {
    render() {
        const { thought } = this.props
        return(
            <DefaultLayout>
                <div>
                    <article class='show-page'>
                        <div class='thought-bubble negative-space'>{thought.thought}</div>
                        <div className="bubble3 negative-space"></div>
                        <div className="bubble2 negative-space"></div>
                        <div className="bubble1 negative-space"></div>
                        <img src={thought.img} alt={thought.name} class ='show-img'/>
                        <h3>{thought.name}, {thought.location}</h3>
                        <div className="stars">
                            <span class={isChecked(1,thought.rank)}></span>
                            <span class={isChecked(2,thought.rank)}></span>
                            <span class={isChecked(3,thought.rank)}></span>
                            <span class={isChecked(4,thought.rank)}></span>
                            <span class={isChecked(5,thought.rank)}></span>
                        </div>
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