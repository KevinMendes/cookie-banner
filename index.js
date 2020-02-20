import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const CookieBanner = (
    props) => {

    // Cookie creation ::: destroy in 30 day
    const setApprovalCookie = () => {
        let date = new Date(Date.now() + (86400000 * props.day));
        date = date.toUTCString();
        document.cookie = 'cookieApproval=true; path=/; expires=' + date;
        sendNull();
        var cookie_bar = document.getElementById('cookie_bar');
        cookie_bar.remove();

    }
    const sendNull = () => {
        return (null)
    }
    const openLink = () => {
        window.location.href = `${props.link}`
    }


    if (document.cookie !== 'cookieApproval=true') {

        return (
            <div id='cookie_bar'>
                <p className='cookie_text'>{props.text}</p>
                <div className='cookie_buttons'>
                    <button className='cookie_yes' onClick={setApprovalCookie}>{props.yes}</button>
                    <button className='cookie_info' onClick={openLink}>{props.info}</button>
                </div>
            </div>
        )
    }
    else {
        return (null)
    }

}

CookieBanner.propTypes = {
    props: PropTypes.objectOf({
        day: PropTypes.number,
        yes: PropTypes.string.isRequired,
        info: PropTypes.string,
        link: PropTypes.string,
        text: PropTypes.string.isRequired,
    }).isRequired
}

export default CookieBanner;
