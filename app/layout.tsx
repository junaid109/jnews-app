import '../styles/globals.css'
import Header from './Header'

export default function RootLayout({ 
    children,
 }: {
    children: React.ReactNode
 }) {
  return (
    <html>
        <head>
        </head>
      <body>
        <Header></Header>
        <div>{children}</div>
      </body>
    </html>
  )
}