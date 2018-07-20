import PropTypes from "prop-types";

export const covoCoordToRealCoord = ({ covoLat, covoLong }) => {
	if (
		-900000 < covoLat &&
		covoLat < 900000 &&
		-1800000 < covoLong &&
		covoLong < 1800000
	) {
		let lat = covoLat * 0.0001;
		let long = covoLong * 0.0001;
		return { lat, long };
	}
	console.log("CoVo coordinates error : not within expected range");
	return { lat: 0, long: 0 };
};
covoCoordToRealCoord.propTypes = {
	covoLat: PropTypes.number.isRequired,
	covoLong: PropTypes.number.isRequired
};

export const realCoordToCoVoCoord = ({ lat, long }) => {
	if (-90 < lat && lat < 90 && -180 < long && long < 180) {
		let covoLat = Math.floor(lat / 0.0001);
		let covoLong = Math.floor(long / 0.0001);
		return { covoLat, covoLong };
	}
	console.log("Real coordinates error : not within expected range");
	return { covoLat: 0, covoLong: 0 };
};
realCoordToCoVoCoord.propTypes = {
	lat: PropTypes.number.isRequired,
	long: PropTypes.number.isRequired
};
