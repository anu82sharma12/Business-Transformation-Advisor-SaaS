import { Document, Page, Text, View, PDFDownloadLink } from "@react-pdf/renderer";

const BriefDoc = ({ brief }) => (
  <Document>
    <Page size="A4" style={{ padding: 40 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Digital Strategy Brief</Text>
      {brief.split("\n\n").map((p, i) => (
        <View key={i} style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 14 }}>{p}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default function BriefPDF({ brief }) {
  return (
    <div className="mt-10 p-6 bg-gray-50 rounded-xl">
      <PDFDownloadLink document={<BriefDoc brief={brief} />} fileName="Strategy_Brief.pdf">
        {({ loading }) => (
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            {loading ? "Generating..." : "Download PDF"}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
}
