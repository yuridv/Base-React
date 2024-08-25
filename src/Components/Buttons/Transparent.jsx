import { Images } from '../../Utils/Imports'

const Page = ({ style, text, icon }) => {
  return (
    <div className={ style.container }>
      <i className={ icon } />
      <a>{ text }</a>
    </div>
  )
}

export default Page;