
function Article ({date = "january 1,1970",title, preview} ) {

    return (
        <article>
            <h3>
                {title}
            </h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
};



export default Article