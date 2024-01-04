import 'react-vertical-timeline-component/style.min.css';
import '@styles/globals.css'

export const metadata = {
  title: 'Lilian | Portfolio',
  description: 'no desc',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}