import clsx from 'clsx'
import { LessonDirection, LessonView } from 'types'
import { useLessonContext } from 'ui'

export default function LessonInfo({ children }) {
  const { activeView, direction } = useLessonContext()
  const isActive = activeView === LessonView.Info

  if (direction === LessonDirection.Horizontal) {
    return (
      <div className="grow justify-center text-white md:basis-1/3">
        <div className="flex h-full flex-col content-center justify-items-start gap-1 px-1 py-6 sm:px-12">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div
      className={clsx(
        'flex w-full max-w-[840px] grow flex-col gap-1 px-4 py-6 font-nunito text-white md:justify-center',
        {
          'hidden md:flex': !isActive,
          flex: isActive,
        }
      )}
    >
      {children}
    </div>
  )
}
