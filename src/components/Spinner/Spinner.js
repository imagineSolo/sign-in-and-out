import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import PropTypes from 'prop-types'

const Spinner = ({loading}) => {
    return (
        <Box sx={{ height: 40 }}>
        <Fade
          in={loading}
          style={{
            transitionDelay: '800ms'
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </Box>
    )
}

Spinner.propTypes = {
  loading: PropTypes.bool
}

export default Spinner