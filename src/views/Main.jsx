import ButtonCancel from '../components/Buttons/Cancel'

const Page = ({ style }) => {
  console.log('[Page]=> Main')
  return (
    <div>
      <div className={ style.container }>
        <h1 className={ style.center }>Hello World</h1>
        <ButtonCancel />
      </div>
    </div>
  )
}

export default Page;