import { Component } from "react";
import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import Test from "./PdfFile";
import { Navigate } from "react-router-dom";

class Print extends Component {
  state = { printed: false };
  render() {
    const { printed } = this.state;
    return (
      <>
        {printed && <Navigate to="/" />}
        <PDFDownloadLink document={<Test />} fileName="form">
          {({ loading }) =>
            loading ? (
              <p>Loading</p>
            ) : (
              <button
                onClick={() =>
                  setTimeout(() => {
                    this.setState({ printed: true });
                  }, 2000)
                }>
                Download
              </button>
            )
          }
        </PDFDownloadLink>
      </>
    );
  }
}

export default Print;
