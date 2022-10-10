import logo from '../logo.PNG';
import "react-step-progress-bar/styles.css";
import "./Form.css"
import { useState } from 'react';
import { Progress } from './Progress';
import {Page1} from './Page1';
import {Page2} from './Page2';
import {Page3} from './Page3';
import {Page4} from './Page4';

function Form() {
    const [percentage, setPercentage] = useState(17);
    const [fullName, setFullName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [workspaceName, setWorkspaceName] = useState("");
    const [workspaceUrl, setWorkspaceUrl] = useState("");
    const [usage, setUsage] = useState("self");
    

    return (
        <div className={'formContainer'}>
            <div className={"logo"}><img src={logo} alt={'Logo'}/></div>
            <Progress percentage={percentage}/>
            
            {
                percentage===17 && <Page1 setPercentage={setPercentage} fullName={fullName} displayName={displayName} setFullName={setFullName} setDisplayName={setDisplayName}/>
            }
            {
                percentage===50 && <Page2 setPercentage={setPercentage} workspaceName={workspaceName} workspaceUrl={workspaceUrl} setWorkspaceName={setWorkspaceName} setWorkspaceUrl={setWorkspaceUrl}/>
            }
            {
                percentage===83 && <Page3 setPercentage={setPercentage} usage={usage} setUsage={setUsage}/>
            }
            {
                percentage===100 && <Page4 displayName={displayName}/>
            }
            
        </div>
    );
}

export default Form;