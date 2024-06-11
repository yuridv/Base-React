const Page = ({ style }) => {
  console.log('[Page]=> Example/Page')

  return (
    <div>
      <div className={ style.container }>
        <h1 className={ style.center }>Hello World</h1>
      </div>
    </div>
  )
}

export default Page;