import React from 'react'
import { Link } from 'react-router-dom';

const Middlenav = () => {
    return (
        <>
            <div className="sec-main">
            <ul className="cate">
                <li className="drop" id="dropdownMenuButton" data-toggle="dropdown" >
                    <Link className='text-decoration-none nav-link'> All categories <img src="assets/images/expand-arrow.png" alt="" width="25px" /></Link>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" to="*">Vehicles</Link>
                        <Link className="dropdown-item" to="*">Mobiles</Link>
                        <Link className="dropdown-item" to="*">Electronic and home appliances</Link>
                        <Link className="dropdown-item" to="*">Property For Sale</Link>
                        <Link className="dropdown-item" to="*">Animals</Link>
                        <Link className="dropdown-item" to="*">Furniture and home decor</Link>
                        <Link className="dropdown-item" to="*">Bussiness, Culture &amp; Agriculture</Link>
                        <Link className="dropdown-item" to="*">Mobiles</Link>
                        <Link className="dropdown-item" to="*">jobs</Link>
                    </div>
                </li>
                <li className="list">
                    <Link to="/category-mobile-accesories">Mobile phones</Link>
                </li>
                <li className="list">
                    <Link to="/motors">cars</Link></li>
                <li className="list">
                    <Link to="/category-motors-car">Motorcycles</Link>
                </li>
                <li className="list">
                    <Link to="/category-property">Houses</Link>
                </li>
                <li className="list">
                    <Link to="/CategoryMusic">TV-Video-Audio</Link>
                </li>
                <li className="list">
                    <Link to="/category-mobiles-tablets">Tablets</Link>
                </li>
                <li className="list"><Link to="*">Land &amp; Plots</Link>
                </li>
            </ul>
            </div>
        </>
    )
}

export default Middlenav;