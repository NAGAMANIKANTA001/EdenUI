import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';


export function Page2(props) {
    const [hasError, setHasError] = useState(false);
    function handleSubmit() {
        if (props.workspaceName !== null && props.workspaceName !== "") {
            setHasError(false)
            props.setPercentage(83);
        } else {
            setHasError(true);
        }
    }
    return (
        <>
            <div className="heading-wrapper">
                <div className="heading">Let's set up a home for all your work</div>
                <div className="sub-heading">You can always create another workspace later.</div>
            </div>
            <div className={'fieldContainer'}>
                {
                    hasError && <div style={{ color: "red" }}>*Please fill all required fields.</div>
                }
                <Form.Group className='formField'>
                    <Form.Label className='label' htmlFor='workspace-name'>Workspace Name</Form.Label>
                    <Form.Control  className='field' placeholder='Enter Workspace Name' id='workspace-name' value={props.workspaceName} onChange={(e) => props.setWorkspaceName(e.target.value)} />
                </Form.Group>
                <Form.Group className='formField'>
                    <Form.Label className='label' htmlFor='workspace-url'>Workspace URL<span className='label-suffix'> (optional)</span></Form.Label>
                    <InputGroup>
                        <InputGroup.Text>www.eden.com/</InputGroup.Text>
                        <Form.Control  className='field' placeholder='Enter Workspace URL' id='workspace-url' value={props.workspaceUrl} onChange={(e) => props.setWorkspaceUrl(e.target.value)} />
                    </InputGroup>
                </Form.Group>
                <div className='d-grid'>
                    <button className='submitButton' onClick={() => handleSubmit()}>Create Workspace</button>
                </div>
            </div>
        </>
    )
}