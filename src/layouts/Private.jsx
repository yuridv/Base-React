const Layout = ({ element }) => {
  console.log('[Layout]=> Private')
  return (
    <>
      <h1>PRIVATE LAYOUT</h1>
      { element }
    </>
  )
}

export default Layout;