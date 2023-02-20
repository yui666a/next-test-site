import Image from "next/image";

const headerStyle = {
  display: "flex",
};
const Header = (props: any) => {
  return (
    <div style={headerStyle}>
      <Image
        src="/style-arts_logo_color.png"
        alt="Site Logo"
        width={180}
        height={60}
      />
      <h1>{props.title}</h1>
      <div>
        <a href="/skills">Skills</a>
      </div>
      <div>
        <a href="/todo">Todoアプリ</a>
      </div>
    </div>
  );
};

export default Header;
