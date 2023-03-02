import "./Footer.scss"
export default function Footer({developers}){

    return(
    <footer className="footer">
        <div>
          <span>Built by: </span>

          {/* Awesome group of developers */}
          
          {developers.map((developer, i) => {
            if(i !== developers.length-1){
              return <span key={i}>{developer}, </span>
            } else {
              return <span key={i}> and {developer}</span>
            }
          })}
        </div>
    </footer>)
      }