import PropTypes from 'prop-types';

export const GifItem = ({ url, title }) => {
  return (
    <>
      <li className="card">
        <img src={url} alt={title} />
        <a>{title}</a>
      </li>
    </>
  );
};

GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
