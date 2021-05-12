import { usePlausible } from "next-plausible";

import * as S from "./footer.styles";

const Footer = () => {
  const plausible = usePlausible();

  return (
    <S.Container>
      <S.Disclaimer>
        Questo sito <em>non</em> è affiliato con Juventus Football Club. Tutti i
        marchi riportati appartengono ai legittimi proprietari.
      </S.Disclaimer>
      <S.Sponsor
        href="https://buymeacoffee.com/michelegera"
        onClick={() => plausible("sponsor")}
      >
        ☕️ Offrimi un caffè
      </S.Sponsor>
      <S.Hashtag>#finoallafine</S.Hashtag>
    </S.Container>
  );
};

export default Footer;
