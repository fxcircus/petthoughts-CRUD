const React = require('react')
const DefaultLayout = require('../layout/Default')

const colorCurrPageNum = (currNum, pageNum) => {
    const htmlClass = ''
    currNum === pageNum ? htmlClass= 'current-page' : htmlClass = 'not-current-page'
    return htmlClass
}

// Pageination using testCount var 
const pageLinks = (docNum, currPage) => {
    
    if (docNum  < 9) {
        console.log(`Less than 9 results ==> ${docNum} ==> no pages`)
        return
    } else {
        console.log(`More than 9 results ==> ${docNum} ==> rendering pages`)

        const result = []
        let pageNum = 1
        if(pageNum == currPage) {
            result.push(<a href={ `/thoughts/pages/${pageNum}` } class='current-page'>{ pageNum++ }</a>)
        } else { 
            result.push(<a href={ `/thoughts/pages/${pageNum}` } class='not-current-page'>{ pageNum++ }</a>) 
        }

        let htmlClass = ''
        for (let i = 10; i < docNum; i+=9) {
            currPage == pageNum ? htmlClass= 'current-page' : htmlClass = 'not-current-page' // color current page
            result.push(<a href={`/thoughts/pages/${pageNum}`} class={ htmlClass }>{ pageNum }</a>)
            pageNum++
        }

        return result
    }
}

class Index extends React.Component {
    render() {
        const thoughts = this.props.thoughts
        const session = this.props.session
        let docNum  = this.props.docNum
        const currPage = this.props.currPage
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
                        {pageLinks(docNum, currPage)}
                    </ul>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index