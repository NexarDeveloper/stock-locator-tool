var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getData as getCountries } from "country-list";
import SelectDropdown from "./selectDropdown";
import styled from "styled-components";
import { deviceWidths } from "../lib";
import MagnifyingGlass from "./icons/magnifyingGlass";
import React, { useEffect, useState } from "react";
const SearchForm = ({ query, setQuery, country, setCountry, currency, setCurrency, handleFormSubmit, theme, }) => {
    var _a;
    const countries = [
        ...[...getCountries()].sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0),
    ];
    const [currencies, setCurrencies] = useState([]);
    useEffect(() => {
        const loadCurrencies = () => __awaiter(void 0, void 0, void 0, function* () {
            let url = "https://openexchangerates.org/api/currencies.json";
            try {
                const response = yield fetch(url);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = (yield response.json());
                const objectData = Object.entries(data).map(([code, name]) => {
                    return { code, name };
                });
                setCurrencies(objectData);
            }
            catch (err) {
                console.log(err);
            }
        });
        loadCurrencies();
    }, [setCurrencies]);
    const handleSubmit = (e) => {
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
    return (React.createElement(SearchContainer, { onSubmit: handleSubmit, style: {
            backgroundColor: (_a = theme.searchFormBackground) !== null && _a !== void 0 ? _a : theme.background,
            borderRadius: "10px",
        } },
        React.createElement(InputContainer, { style: {
                border: `1px solid ${theme.tint}`,
                backgroundColor: "white",
            } },
            React.createElement(StyledInput, { name: "query", placeholder: "Search MPN", value: query, onChange: (e) => setQuery(e.target.value), style: {
                    color: "black",
                } }),
            React.createElement(SearchButton, { type: "submit", style: {
                    backgroundColor: theme.button,
                    color: theme.buttonSecondary,
                } },
                React.createElement(MagnifyingGlass, null))),
        React.createElement(SelectDropdown, { name: "country", onClick: setCountry, options: countries.map((c) => ({
                value: c.code,
                text: c.name,
            })), value: country, theme: theme }),
        React.createElement(SelectDropdown, { name: "currency", onClick: setCurrency, options: currencies.map((c) => ({
                value: c.code,
                text: c.name,
            })), value: currency, theme: theme })));
};
const SearchContainer = styled.form `
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
const InputContainer = styled.a `
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
const StyledInput = styled.input `
  width: 100%;
  font-family: inherit;
  height: 100%;
  border: none;
  box-sizing: border-box;
  &:focus {
    outline: 0px;
  }
`;
const SearchButton = styled.button `
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
