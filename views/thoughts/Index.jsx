const React = require('react')
const DefaultLayout = require('../layout/Default')

let circleNum = 1;

class Index extends React.Component {
    render() {
        const { thoughts } = this.props
        return(
            <DefaultLayout>
                <a href='/thoughts/new'>Add new thought</a>
                <div class='circles'>
                    {
                        thoughts.map((thought) => {
                            return(
                                <article id={`circle${circleNum++}`}>
                                    <a href={`/thoughts/${thought._id}`}>
                                        <img src={thought.img} alt={thought.name} />
                                    </a>
                                    <div className='name-area'>
                                        <a href={`/thoughts/${thought._id}`} className='image-text'>{thought.name}</a>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index