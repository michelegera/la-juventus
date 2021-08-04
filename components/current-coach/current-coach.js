import PropTypes from "prop-types";
import { differenceInCalendarDays } from "date-fns";

import * as S from "./current-coach.styles";

const CurrentCoach = ({ coach: { firstname, lastname, name, photo } }) => {
  const daysInCharge = differenceInCalendarDays(
    new Date(),
    new Date("2021-06-01")
  );

  const isMaxAllegri = firstname === "Massimiliano" && lastname === "Allegri";

  const text = `è l’allenatore della Juventus da ${daysInCharge} giorni${
    isMaxAllegri ? ", per la seconda volta" : ""
  }.`;

  return (
    <S.Wrapper>
      <S.Photo src={photo} alt={name} />
      <S.Text>
        <S.Name>
          {firstname} {lastname}
        </S.Name>
        {text}
      </S.Text>
    </S.Wrapper>
  );
};

CurrentCoach.propTypes = {
  coach: PropTypes.shape({
    career: PropTypes.array,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
};

export default CurrentCoach;
