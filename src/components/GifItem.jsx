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
