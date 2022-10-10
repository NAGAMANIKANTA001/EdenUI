import { MdDone } from 'react-icons/md'
export function Page4(props) {
    return (
        <>
            <div className='done-icon-wrapper'>
                <MdDone />
            </div>
            <div className="heading-wrapper">
                <div className="heading">Congratulations, {props.displayName}</div>
                <div className="sub-heading">you have completed onboarding, you can start using the Eden!</div>
            </div>
            <div className={'fieldContainer'}>
                <div className='d-grid'>
                    <button className='submitButton'>Launch Eden</button>
                </div>
            </div>
        </>
    )
}