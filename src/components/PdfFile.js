// Create Document Component
import { Component } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "red",
    width: "200mm",
    border: "1px solid blue",
    justifyContent: "space-between",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    width: 210,
  },
});

class Test extends Component {
  state = { isLoaded: false, raja: "1", sekhar: "2" };
  componentDidMount() {
    this.setState({ isLoaded: true, raja: "Raja", sekhar: "Sekhar" });
    this.data();
  }

  render() {
    const { isLoaded, raja, sekhar } = this.state;
    if (isLoaded) {
      return (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>{raja}</Text>
            </View>
            <View style={styles.section}>
              <Text>{sekhar}</Text>
            </View>
          </Page>
        </Document>
      );
    } else {
      return <div>wait</div>;
    }
  }
}

export default Test;
