const React = require('react')
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const { thought } = this.props
        return(
            <DefaultLayout>
                <div>
                    <article class='show-page'>
                        <div class='thought-bubble negative-space'>{thought.thought}</div>
                        {/* <div className="triangle"></div> */}
                        <div className="bubble3 negative-space"></div>
                        <div className="bubble2 negative-space"></div>
                        <div className="bubble1 negative-space"></div>
                        <img src={thought.img} alt={thought.name} class ='show-img'/>
                        <h3>{thought.name}, {thought.location}</h3>
                        <div className="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
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