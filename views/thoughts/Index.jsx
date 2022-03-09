const React = require('react')
const DefaultLayout = require('../layout/Default')
// const Thought = require("../../models/thought")



// Thought.find({}).countDocuments()
//     .then((count) => {
//         testCount = count
//     })

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

// Pageination mk 2: using moongoose countDocuments method
// const pageLinks = () => {
//     Thought.find({}).countDocuments()
//         .then((count) => {
//             let docNum = count
//             console.log(`aaaasdasadadadad ${docNum}`)
//             if (docNum  < 1) {
//                 console.log(`Less than 10 results ==> ${docNum}`)
//                 return
//             } else {
//                 const result = []
//                 let pageNum = 1
//                 console.log(`Entered function ===> ${docNum}`)
//                 for (let i = 9; i <= docNum; i+=9) {
//                     result.push(<a href={`/thoughts/pages${pageNum}`}>{ pageNum }</a>)
//                     console.log(`pageNum = ${pageNum}`)
//                     pageNum++
//                 }
//                 console.log(`Final result:\n${result}`)
//                 return result
//             }
//         })
// }

class Index extends React.Component {
    render() {
        const thoughts = this.props.thoughts
        let testCount  = this.props.docNum
        return(
            <DefaultLayout>
                <a href='/thoughts/new' class='no-shadow'>Add new thought</a>
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