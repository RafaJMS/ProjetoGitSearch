import "./index.css"
export default function CardRepo({project}) {


    return(
        
        <>
        
        <div className="projeto">
            
            <span>&#9823;</span>
            
            <a href={project.html_url} target="blank"> {project.name}</a>

        </div>
        
        </>
    )

}
