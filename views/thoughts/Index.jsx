const React = require('react')
const DefaultLayout = require('../layout/Default')

let numOfThoughts = 0

const makeElements = (numOfThoughtsFinal) => {
    if (numOfThoughts  < 10) {
        return
    } else {
        const result = []
        let pageNum = 1
        for (let i = 9; i <= numOfThoughtsFinal; i+=9) {
            result.push(<a href={`/thoughts/pages${pageNum}`}>{pageNum}</a>)
            pageNum++
        }
        return result
    }
}

class Index extends React.Component {
    render() {
        const { thoughts } = this.props
        return(
            <DefaultLayout>
                <a href='/thoughts/new' class='no-shadow'>Add new thought</a>
                <div class='circles'>
                    {
                        thoughts.map((thought) => {
                            return(
                                <article id={`circle${numOfThoughts++}`} class='index-item'>
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
                <nav aria-label="...">
                    <ul class="pagination" id="page-numbers">
                        {makeElements(numOfThoughts)}
                    </ul>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index