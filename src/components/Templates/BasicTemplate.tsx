import Header from "../Header";

interface Props {
  children: React.ReactNode;
}

const BasicTemplate = (props: Props) => {
  return (
    <>
      <Header title={"相曽's Portfolio"} />
      {props.children}
    </>
  );
};

export default BasicTemplate;
