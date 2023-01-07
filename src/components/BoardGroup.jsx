import BoardTag from "./Tag"
import BoardItem from "./BoardItem"
import ButtonIcon from "./ButtonIcon"
import PlusIcon from '../icons/plus-circle.svg'

export default function BoardGroup({boardItem, variant, duration, title}){
  return (
    <div className={`board-group ${variant}`}>
      <BoardTag text={title} variant={variant}/>
      <div className="s-12 font-weight-700 py-2 ms-1">
        {duration}
      </div>
      {
        /* if board item empty */
        !boardItem.length ?
        <div className="px-3 py-2 bg-neutral-20 s-14 font-weight-400 radius-4 border border-neutral-40 text-neutral-70">
          No Task
        </div>
        :
        boardItem.map((item, i)=>(
          <div className="mb-2 pb-1" key={i}>
            <BoardItem title={item.title} progress={item.progress}/>
          </div>
        ))
      }
      <div className="mt-2">
      <ButtonIcon variant="transparent" text="New Task" icon={PlusIcon} noPadding></ButtonIcon>
      </div>
    </div>
  )
}