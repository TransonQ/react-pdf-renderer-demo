import {
  Document,
  Font,
  Page,
  PDFViewer,
  Text,
  View,
} from '@react-pdf/renderer'
import './App.css'

import font400 from '/fonts/noto-sans-sc-chinese-simplified-400-normal.ttf'
import font700 from '/fonts/noto-sans-sc-chinese-simplified-700-normal.ttf'

import dejaVuBold from '/fonts/DejaVuSans-Bold.ttf'
import dejaVu from '/fonts/DejaVuSans.ttf'

import PingFangSCLight from '/fonts/pingfang/PingFangSC-Light.ttf'
import PingFangSCMedium from '/fonts/pingfang/PingFangSC-Medium.ttf'
import PingFangSCRegular from '/fonts/pingfang/PingFangSC-Regular.ttf'
import PingFangSCSemiBold from '/fonts/pingfang/PingFangSC-Semibold.ttf'

// It's work
Font.register({
  family: 'noto-sans-sc',
  fonts: [
    {
      src: font400,
      fontWeight: 'normal',
    },
    {
      src: font700,
      fontWeight: 'bold',
    },
  ],
})

// It's not work 👇
Font.register({
  family: 'dejavu-sans-latin',
  fonts: [
    {
      src: dejaVu,
      fontWeight: 'normal',
    },
    {
      src: dejaVuBold,
      fontWeight: 'bold',
    },
  ],
})
// It's not work 👇
Font.register({
  family: 'pingfang',
  fonts: [
    {
      src: PingFangSCRegular,
      fontWeight: 'normal',
    },
    {
      src: PingFangSCMedium,
      fontWeight: 'medium',
    },
    {
      src: PingFangSCLight,
      fontWeight: 'light',
    },
    {
      src: PingFangSCSemiBold,
      fontWeight: 'bold',
    },
  ],
})

function App() {
  return (
    <div>
      <h1>Demo</h1>
      <PDFViewer
        showToolbar={true}
        width={'100%'}
        height={'900px'}
      >
        <Document title="Demo">
          <Page
            style={{
              fontFamily: 'noto-sans-sc', // worked
              // fontFamily: 'dejavu-sans-latin', // not work: pdf white screen, no error
              // fontFamily: 'pingfang', // not work: pdf white screen, no error
            }}
          >
            <View>
              <Text>Demo PDF</Text>
              <Text>示例 PDF</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  )
}

export default App
