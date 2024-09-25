import { Images } from '../../Utils/Imports'

const Page = ({ style, text, icon, onClick }) => {
  return (
    <div className={ style.container } onClick={ onClick }>
      <i className={ icon } />
      <a>{ text }</a>
    </div>
  )
}

export default Page;