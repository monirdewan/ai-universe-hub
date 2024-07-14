/* eslint-disable react/prop-types */


const SingleData = (props) => {
    console.log(props.singleData)
    const {image,features, published_in, name} = props.singleData;
    return (
        <>
            <div className="card bg-base-100 w-full shadow-xl">
            <figure>
                <img className='w-full h-64' src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Features</h2>
                {
                    features.map((feature, index)=> <p key={index}>{index+1}: {feature}</p>)
                }
          <div className='flex justify-between items-center'>
          <div>
            <h2 className="card-title border-t pt-4 border-info">{name}</h2>
                <div className='flex mt-2'>
                    <span className='me-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                            </svg>

                    </span>
                    <p>{published_in}</p>
                </div>
            </div>
            <span className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

            </span>
          </div>
            </div>
            </div>
        </>
    );
};

export default SingleData;