import {RiUserFill} from 'react-icons/ri'
import {RiTeamFill} from 'react-icons/ri'

export function Page3(props) {
    return (
        <>
            <div className="heading-wrapper">
                <div className="heading">How are you planning to use Eden?</div>
                <div className="sub-heading">we'll streamline your setup experience accordingly.</div>
            </div>
            <div className={'fieldContainer'} style={{marginTop:"20px"}}>
            <div className='card-container'>
                <div className={`cards ${props.usage==="self"?"cards-active":""}`} onClick={(e)=>{props.setUsage("self")}}>
                    <RiUserFill style={props.usage==="self"?{color:"#664DE5"}:{}} className='card-icon'/>
                    <div className='card-title'>For myself</div>
                    <div className='card-description'>Write better. Think more clearly. Stay organized</div>
                </div>
                <div className={`cards ${props.usage==="team"?"cards-active":""}`} onClick={(e)=>{props.setUsage("team")}}>
                    <RiTeamFill style={props.usage==="team"?{color:"#664DE5"}:{}} className='card-icon'/>
                    <div className='card-title'>With my team</div>
                    <div className='card-description'>Wikis, docs, tasks &amp; projects, all in one place.</div>
                </div>
            </div>
            <div className='d-grid'>
            <button className='submitButton' onClick={(e)=>{props.setPercentage(100)}}>Create Workspace</button>
            </div>
            </div>
        </>
    )
}