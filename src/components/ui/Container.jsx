import { cn } from '@/utils/cn'

function Container({ as = 'div', className, children }) {
  const Component = as

  return (
    <Component
      className={cn('mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8', className)}
    >
      {children}
    </Component>
  )
}

export default Container
