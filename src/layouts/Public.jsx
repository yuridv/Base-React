const Layout = ({ element }) => {
  console.log('[Layout]=> Public')
  return (
    <>
      <h1>PUBLIC LAYOUT</h1>
      { element }
    </>
  )
}

export default Layout;