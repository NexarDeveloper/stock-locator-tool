import { getData as getCountries } from "country-list";
import SelectDropdown from "./SelectDropdown";
import styled from "styled-components";
import { deviceWidths } from "../lib";
import MagnifyingGlass from "./icons/magnifyingGlass";
import { useEffect, useState } from "react";
import { IncomingColors } from "../types";

type Country = {
  code: string;
  name: string;
};

type AvailableCurrency = {
  code: string;
  name: string;
};

type AvailableCurrencies = Array<AvailableCurrency>;

type Props = {
  query: string;
  setQuery: (x: string) => void;
  country: string;
  setCountry: (x: string) => void;
  currency: string;
  setCurrency: (x: string) => void;
  handleFormSubmit: (a: string, b: string, c: string) => void;
  theme: IncomingColors;
};

const SearchForm = ({
  query,
  setQuery,
  country,
  setCountry,
  currency,
  setCurrency,
  handleFormSubmit,
  theme,
}: Props) => {
  const countries: Country[] = [
    ...[...getCountries()].sort((a, b) =>
      a.name > b.name ? 1 : a.name < b.name ? -1 : 0
    ),
  ];
  const [currencies, setCurrencies] = useState<AvailableCurrencies>([]);

  useEffect(() => {
    const loadCurrencies = async () => {
      let url: string = "https://openexchangerates.org/api/currencies.json";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = (await response.json()) as {
          [code: string]: string;
        };
        const objectData = Object.entries(data).map(([code, name]) => {
          return { code, name };
        });
        setCurrencies(objectData);
      } catch (err) {
        console.log(err);
      }
    };

    loadCurrencies();
  }, [setCurrencies]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (query && country && currency) {
      handleFormSubmit(query, country, currency);
    }
    if (e !== undefined) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    handleSubmit();
  }, [country, currency]);

  return (
    <SearchContainer
      onSubmit={handleSubmit}
      style={{
        backgroundColor: theme.searchFormBackground ?? theme.background,
        borderRadius: "10px",
      }}
    >
      <InputContainer
        style={{
          border: `1px solid ${theme.tint}`,
          backgroundColor: "white",
        }}
      >
        <StyledInput
          name="query"
          placeholder="Search MPN"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            color: "black",
          }}
        />
        <SearchButton
          type="submit"
          style={{
            backgroundColor: theme.button,
            color: theme.buttonSecondary,
          }}
        >
          <MagnifyingGlass />
        </SearchButton>
      </InputContainer>
      <SelectDropdown
        name="country"
        onClick={setCountry}
        options={countries.map((c) => ({
          value: c.code,
          text: c.name,
        }))}
        value={country}
        theme={theme}
      />
      <SelectDropdown
        name="currency"
        onClick={setCurrency}
        options={currencies.map((c) => ({
          value: c.code,
          text: c.name,
        }))}
        value={currency}
        theme={theme}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.form`
  display: flex;
  justify-content: flex-start;
  padding: 10px 30px;
  align-items: center;

  @media (max-width: ${deviceWidths.phone}) {
    flex-wrap: wrap;
    padding: 15px;
  }
  @media (max-width: "500px") {
    flex-direction: column;
  }

  > * {
    margin-right: 8px;
  }
`;

const InputContainer = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  height: 35px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 4px;
  @media (max-width: ${deviceWidths.phone}) {
    width: 100%;
    margin-bottom: 4px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  font-family: inherit;
  height: 100%;
  border: none;
  box-sizing: border-box;
  &:focus {
    outline: 0px;
  }
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 20px;
  border-radius: 2px;
  border: none;
  &:hover {
    cursor: pointer;
  }

  svg {
    width: 15px;
    height: 15px;
  }
`;

export default SearchForm;
