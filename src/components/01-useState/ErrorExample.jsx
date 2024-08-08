const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count += 1;
    console.log(count);
  };

  return (
    <>
      <div>{count}</div>
      <button type="button" onClick={handleClick}>
        click to increase
      </button>
    </>
  );
};

export default ErrorExample;
