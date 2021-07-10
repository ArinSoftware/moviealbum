import React from 'react'
import PropTypes from 'prop-types';

const Header = (props) => {
        return (
            <section className="pt-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">{props.title}</h1>
                <p className="lead text-muted">{props.slogan}</p>
              </div>
            </div>
          </section>
        )
    }

Header.defaultProps = {
    title: 'Varsayılan başlıkkkkk',
    slogan: 'Varsayılan slogan'
}

Header.propTypes = {
    title: PropTypes.string,
    slogan: PropTypes.string
  };

export default Header
