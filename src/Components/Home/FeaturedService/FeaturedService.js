import React from 'react';
import featured from '../../../images/featured.png';

const FeaturedService = () => {
    return (
        <section className="featured-service pb-0 pb-md-5 my-5">
            <div className="container md-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4">
                        <img src={featured} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-6 align-self-center ml-4">
                        <h1>Exceptional Dental Care, on Your Terms</h1>
                        <p className="text-muted mt-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae impedit ad quas tempore quos officia accusamus quo, magnam, repellat sint cum vitae inventore. Fugiat quasi saepe beatae error voluptatem, eius eligendi dignissimos dolorem sequi repellendus perspiciatis doloribus deserunt. Fugit deleniti fugiat ex facilis pariatur a, nihil asperiores placeat vitae.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae impedit ad quas tempore quos officia accusamus quo, magnam, repellat sint cum vitae inventore. Fugiat quasi saepe beatae error voluptatem, eius eligendi dignissimos dolorem sequi repellendus perspiciatis doloribus deserunt. Fugit deleniti fugiat ex facilis pariatur a, nihil asperiores placeat vitae.
                        </p>
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;