const Stats = ({tats, otal, gp, avg}) => {

    return(
        <div>
        <h2>Statistics</h2>
        <table><tbody><tr>
        <td>{tats.map((stat,index)=> ( <div key = {index}> {index===0?"Good":index===1?"Bad":"Neutral"}: {stat}</div >))}
    All: {otal}
    <br></br>
    Positive: {gp} %
    <br></br>
    Average: {avg}
    
    </td>
    </tr>
    </tbody></table>
    </div>
    )
}
export default Stats