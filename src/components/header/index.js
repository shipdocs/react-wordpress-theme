/**
 * Header Component.
 *
 * @package react-wordpress-theme
 */

import { Helmet } from 'react-helmet';
import config from "../../../client-config";
import { useState, useEffect } from 'react';
import Nav from "./nav";

/**
 * Header
 */
const Header = ( props ) => {

	const { headerData: { data }, loading, error } = props;
	const { siteLogoUrl, siteTitle, siteDescription, favicon, headerMenuItems } = data.header;

	return (
		<div className="header wrapper">
			<Helmet>
				<title>
					{ siteTitle ? siteTitle : config.siteTitle }
					-
					{ siteDescription ? siteDescription : config.siteDescription }
				</title>
				<link rel="icon" type="image/png" href={ favicon }/>
			</Helmet>
			<div className="logo-section">

				{/*Site logo*/ }
				{ siteLogoUrl ?
					<img className="site-logo" width="50" height="50" src={ siteLogoUrl } alt="Site Logo URL"/> : '' }

				<div className="site-info">

					{/*Site title*/ }
					{ siteTitle ? <h1 className="site-title">{ siteTitle }</h1> :
						<h1 className="site-title">{ config.siteTitle }</h1> }

					{/*Site description*/ }
					{ siteDescription ? <p className="site-description">{ siteDescription }</p> :
						<p className="site-description">{ config.siteDescription }</p> }

				</div>

			</div>
			<Nav headerMenuItems={ headerMenuItems } />
		</div>
	);
};

export default Header;
