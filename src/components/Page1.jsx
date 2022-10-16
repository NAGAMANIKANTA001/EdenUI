import Form from 'react-bootstrap/Form';
import { useRef, useState, useEffect } from 'react';

export function Page1(props) {

    const [hasError, setHasError] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    function handleSubmit() {
        if (props.fullName !== null && props.fullName !== "" && props.displayName !== null && props.displayName !== "") {
            setHasError(false)
            props.setPercentage(50);
        } else {
            setHasError(true);
        }
    }

    return (
        <>
            <div className="heading-wrapper">
                <div className="heading">Welcome! First things first...</div>
                <div className="sub-heading">You can always change them later.</div>
            </div>
            <div className={'fieldContainer'}>
                {
                    hasError && <div style={{ color: "red" }}>*Please fill all required fields.</div>
                }
                <Form.Group className='formField'>
                    <Form.Label className='label' htmlFor='full-name'>Full Name</Form.Label>
                    <Form.Control ref={inputRef} className='field' placeholder='Enter your Full Name' id='full-name' value={props.fullName} onChange={(e) => { props.setFullName(e.target.value) }} />
                </Form.Group>
                <Form.Group className='formField'>
                    <Form.Label className='label' htmlFor='display-name'>Display Name</Form.Label>
                    <Form.Control className='field' placeholder='Enter Display Name' id='display-name' value={props.displayName} onChange={(e) => { props.setDisplayName(e.target.value) }} />
                </Form.Group>
                <div className='d-grid'>
                    <button className='submitButton' onClick={() => handleSubmit()}>Create Workspace</button>
                </div>
            </div>
        </>
    )
}