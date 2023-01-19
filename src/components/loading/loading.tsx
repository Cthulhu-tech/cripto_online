import './loading.scss'

export const Loading = () => {

    return <div className='loading'>
        <div className='loading-board'>
            <div className='loading-animation'></div>
        </div>
        <div className='loading-board'>
            <div className='loading-animation'></div>
        </div>
        <div className='loading-board'>
            <div className='loading-animation'></div>
        </div>
    </div>
}