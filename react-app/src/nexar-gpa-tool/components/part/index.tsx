import useExpansions, {
  Context as ExpansionsContext,
} from "../../hooks/useExpansions";
import useMediaQuery from "../../hooks/useMediaQuery";
import { SupPartResult as Result } from "../../modules/graphql/generated";
import Header from "./Header";
import OffersTable from "./OffersTable/Index";
import PhoneOffersTable from "./PhoneOffersTable";
import ShowButton from "./ShowButton";
import styled from "styled-components";
import { deviceWidths } from "../../lib";
import { IncomingColors, IncomingParams } from "../../types";

const maxSellersInCompactView = 5;

type Props = {
  country: string;
  currency: string;
  query: string;
  result: Result;
  searchParameters: IncomingParams;
  theme: IncomingColors;
};

const Part = ({
  country,
  currency,
  query,
  result,
  searchParameters,
  theme,
}: Props) => {
  const {
    expansions,
    handleExpanderClick,
    handleShowAllClick,
    handleShowFewerClick,
    isShowingAll,
  } = useExpansions(result.part.sellers, searchParameters.expandOfferTable);
  const { isMobile, isTablet } = useMediaQuery();
  const isDesktop = !isTablet && !isMobile;
  let slicedSellers = result.part.sellers;
  if (!isShowingAll) {
    slicedSellers = result.part.sellers.slice(0, maxSellersInCompactView);
  }
  return (
    <ExpansionsContext.Provider value={{ expansions, handleExpanderClick }}>
      <StyledPart
        style={{
          border: `1px solid ${theme.tint}`,
        }}
      >
        <Header
          query={query}
          result={result}
          searchParameters={searchParameters}
          theme={theme}
        />
        {slicedSellers.length > 0 && isDesktop && (
          <OffersTable
            country={country}
            currency={currency}
            result={result}
            sellers={slicedSellers}
            theme={theme}
          />
        )}
        {slicedSellers.length > 0 && !isDesktop && (
          <PhoneOffersTable
            country={country}
            currency={currency}
            result={result}
            sellers={slicedSellers}
            theme={theme}
          />
        )}
        {slicedSellers.length <= 0 && (
          <NotFound style={{ color: theme.text }}>
            No distributors found
          </NotFound>
        )}
        <ShowButton
          handleShowAllClick={handleShowAllClick}
          isShowingAll={isShowingAll}
          handleShowFewerClick={handleShowFewerClick}
          result={result}
          theme={theme}
        />
      </StyledPart>
    </ExpansionsContext.Provider>
  );
};

const StyledPart = styled.div`
  margin-bottom: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${deviceWidths.tablet}) {
    border: unset;
  }
`;

const NotFound = styled.div`
  padding: 6px 40px;
`;

export default Part;
