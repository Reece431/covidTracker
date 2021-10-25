import React, {useEffect} from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import numeral from 'numeral';

import {setActive} from '../actions';

const InfoBox = ({title,cases,total,active,setActive}) => {

    useEffect(() => {
        setActive('Cases')
    },[])

    //make this look a little prettier
    const formatTxt = (x) => (
        x ? `+${numeral(x).format("0.0a")}` : 0
    )

    return ( //infoBox
        <Card className={active == title ? 'infoBox active' : 'infoBox'} onClick={() => setActive(title)} tabIndex="0" aria-label={`${title} info box`} role="button" aria-pressed={active == title ? 'true' : 'false'}>
            <CardContent>
                {/* title */}
                <Typography color="textSecondary" aria-hidden="true">
                    {title}
                </Typography>
                {/* case numbers */}
                <h2 className="infoBoxCases" tabIndex="0">{formatTxt(cases)}</h2>
                {/* total cases */}
                <Typography className="infoBoxTotal" color="textSecondary" tabIndex="0">
                    {formatTxt(total)} Total
                </Typography>
            </CardContent>
        </Card>
    )
}


const mapStateToProps = (state) => {
    return {
        active: state.setActive
    }
}

export default connect(mapStateToProps,{setActive})(InfoBox)
