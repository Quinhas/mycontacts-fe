import PropTypes from 'prop-types';
import { Container } from './styles';

import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';

export default function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {type === 'error' && <img src={xCircleIcon} alt="X" />}
      {type === 'success' && <img src={checkCircleIcon} alt="Check" />}
      <strong>
        {text}
      </strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'error']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
