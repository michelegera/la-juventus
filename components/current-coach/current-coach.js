import PropTypes from "prop-types";
import { differenceInCalendarDays } from "date-fns";

import * as S from "./current-coach.styles";

const CurrentCoach = ({
  coach: { career, firstname, lastname, name, photo },
}) => {
  return (
    <S.Wrapper>
      <S.Photo src={photo} alt={name} />
      <S.Text>
        <S.Name>
          {firstname} {lastname}
        </S.Name>{" "}
        è l’attuale allenatore della Juventus.
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
