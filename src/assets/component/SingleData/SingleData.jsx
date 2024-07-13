/* eslint-disable react/prop-types */
import React from 'react';

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
               <h2 className="card-title border-t pt-4 border-info">{name}</h2>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">{published_in}</button>
                </div>
            </div>
            </div>
        </>
    );
};

export default SingleData;