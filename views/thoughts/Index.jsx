const React = require('react')
const DefaultLayout = require('../layout/Default')

// Pageination mk 1: using testCount var 
const pageLinks = (docNum) => {
    if (docNum  < 9) {
        console.log(`Less than 9 results ==> ${docNum}`)
        return
    } else {
        const result = []
        let pageNum = 1
        for (let i = 9; i <= docNum; i+=9) {
            result.push(<a href={`/thoughts/pages/${pageNum}`}>{ pageNum }</a>)
            console.log(i)
            pageNum++
        }
        console.log(`Entered function ===> ${docNum}`)
        return result
    }
}

class Index extends React.Component {
    render() {
        const thoughts = this.props.thoughts
        const session = this.props.session
        let testCount  = this.props.docNum
        return(
            <DefaultLayout show="yes" session={ session }>
                <div>
                    <a href='/thoughts/new' class='no-shadow'>Add new thought</a>
                </div>

                <div class='circles'>
                    {
                        thoughts.map((thought, i) => {
                            return(
                                <article id={`circle${i}`} class='index-item'>
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
                        {pageLinks(testCount)}
                    </ul>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index