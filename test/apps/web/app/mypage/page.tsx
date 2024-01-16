import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  heading: {
    color: "red",
  },
  button: {
    margin: "20px",
    padding: "1em",
  },
});

const Mypage = () => {
  return (
    <div>
      <h1 {...stylex.props(styles.heading)}>Heading</h1>
      <button {...stylex.props(styles.button)}>Button</button>
    </div>
  );
};

export default Mypage;
