import React from "react";
import styled from "styled-components";
import Offer from "./Offer/Index";
const OffersTable = ({ currency, country, result, sellers, theme, hideColumns, }) => {
    return (React.createElement(StyledOffersTable, { style: {
            borderWidth: "1px 0px",
            borderStyle: "solid",
            borderColor: theme.tint,
        } },
        React.createElement("table", { style: { color: theme.text } },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.isAuthorized) && (React.createElement("th", { style: { width: "22px", color: theme.tableHeaderText } })),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.distributor) && (React.createElement("th", { style: { width: "18.1%", color: theme.tableHeaderText } }, "Distributor")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.sku) && (React.createElement("th", { style: { width: "11.4%", color: theme.tableHeaderText } }, "SKU")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.stock) && (React.createElement("th", { style: { textAlign: "right", color: theme.tableHeaderText } }, "Stock")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.moq) && (React.createElement("th", { style: { textAlign: "right", color: theme.tableHeaderText } }, "MOQ")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.cta) && React.createElement("th", null),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.currency) && (React.createElement("th", { style: {
                            textAlign: "center",
                            color: theme.tableHeaderText,
                            width: "6.4%",
                        } }, currency)),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price1) && (React.createElement("th", { style: { textAlign: "right", color: theme.tableHeaderText } }, "1")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price10) && (React.createElement("th", { style: { textAlign: "right", color: theme.tableHeaderText } }, "10")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price100) && (React.createElement("th", { style: { textAlign: "right", color: theme.tableHeaderText } }, "100")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price1000) && (React.createElement("th", { style: { textAlign: "right", color: theme.tableHeaderText } }, "1000")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.price10000) && (React.createElement("th", { style: { textAlign: "right", color: theme.tableHeaderText } }, "10000")),
                    !(hideColumns === null || hideColumns === void 0 ? void 0 : hideColumns.updated) && (React.createElement("th", { style: {
                            paddingLeft: "40px",
                            width: "60px",
                            color: theme.tableHeaderText,
                        } }, "Updated")))),
            React.createElement("tbody", null, sellers.map((seller, sellerIndex) => (React.createElement(Offer, { country: country, key: seller.company.id, result: result, seller: seller, sellerIndex: sellerIndex, theme: theme, hideColumns: hideColumns })))))));
};
const StyledOffersTable = styled.div `
  table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
  }

  th {
    padding: 4px 6px;
    text-align: left;
    font-size: 13px;
    text-transform: uppercase;
  }
`;
export default OffersTable;
