import { useRouter } from "next/router";
import { Container } from "./styles";
import Image from "next/image";

const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <div className="container">
        <Image
          src = "/img/logo.jpg"
          alt = "Logo"
          height = {100}
          width = {300}
        />
      </div>
    </Container>
  );
};

export default Header;